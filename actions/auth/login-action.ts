"use server";

import { ErrorSchema, LoginSchema } from "@/src/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
        name: `${process.env.COOKIE_NAME}`,
        value: JSON.stringify(json.token),
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 // 1 día en segundos
    });

    redirect("/store/1");
}
