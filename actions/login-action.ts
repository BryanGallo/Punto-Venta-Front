"use server";

import { ErrorSchema, LoginSchema } from "@/src/schemas";
import { cookies } from "next/headers";

type ActionStateType = {
    errors: string[];
};

export async function login(prevState: ActionStateType, formData: FormData) {
    const loginDate = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const login = LoginSchema.safeParse(loginDate);

    if (!login.success) {
        const error = login.error.issues.map((error) => {
            return error.message;
        });
        return {
            errors: error,
        };
    }

    const url = `${process.env.API_URL}/auth/login`;

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: login.data.email,
            password: login.data.password,
        }),
    });

    const json = await req.json();

    // console.log(json);
    // console.log(req.status);

    if (!req.ok) {
        const { message } = ErrorSchema.parse(json);
        return {
            errors: message,
        };
    }

    //* Setear Cookie
    (await cookies()).set({
        name: "CrEpErIa_Token",
        value: json,
        httpOnly: true, //? true :solo el codigo del servidor puede acceder a la cookie
        path: "",
    });

    return {
        errors: [],
    };
}
