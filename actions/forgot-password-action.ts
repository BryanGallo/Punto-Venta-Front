"use server";

import {
    ErrorSchema,
    ForgetPasswordSchema,
    SuccessSchema,
} from "@/src/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
};

export default async function forgotPassword(
    prevState: ActionStateType,
    formData: FormData
) {
    const forgotPassword = {
        email: formData.get("email"),
    };

    const forgotPasswordEmail = ForgetPasswordSchema.safeParse(forgotPassword);

    console.log(forgotPasswordEmail);

    if (!forgotPasswordEmail.success) {
        const errors = forgotPasswordEmail.error.issues.map((error) => {
            return error.message;
        });
        return { errors, success: "" };
    }

    const url = `${process.env.API_URL}/auth/forgot-password`;

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: forgotPasswordEmail.data.email,
        }),
    });

    const json = await req.json();

    // console.log(json);

    if (!req.ok) {
        const { message } = ErrorSchema.parse(json);
        return {
            errors: message,
            success: "",
        };
    }

    const { message } = SuccessSchema.parse(json);
    // console.log(message);

    return {
        errors: [],
        success: message,
    };
}
