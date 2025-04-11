"use server";

import { ErrorSchema, LoginSchema, SuccessSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
};

export async function login(prevState: ActionStateType, formData: FormData) {
    console.log(prevState);
    console.log(formData.get("email"));

    const loginDate = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    console.log(loginDate);
    const login = LoginSchema.safeParse(loginDate);

    console.log(login);

    if (!login.success) {
        const error = login.error.issues.map((error) => {
            return error.message;
        });
        return {
            errors: error,
            success: "",
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

    console.log(json);

    if (json.statusCode === 401) {
        const { message } = ErrorSchema.parse(json);
        return {
            errors: message,
            success: "",
        };
    }

    const { message } = SuccessSchema.parse(json);
    console.log(message);

    return {
        errors: [],
        success: message,
    };
}
