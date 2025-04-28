"use server";

import { ErrorSchema, ResetPasswordSchema, SuccessSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
};

export async function resetPassword(
    token: string,
    prevState: ActionStateType,
    formData: FormData,
) {
    const resetPassword = {
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    };
    const newPassword = ResetPasswordSchema.safeParse(resetPassword);

    if (!newPassword.success) {
        return {
            errors: newPassword.error.issues.map((error) => error.message),
            success: "",
        };
    }

    const url = `${process.env.API_URL}/auth/reset-password/${token}`;

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPassword.data),
    });
    console.log(req);

    const json = await req.json();

    if (!req.ok) {
        const { message } = ErrorSchema.parse(json);
        console.log(message);
        return {
            errors: message,
            success: "",
        };
    }

    const { message } = SuccessSchema.parse(json);
    return {
        errors: [],
        success: message,
    };
}
