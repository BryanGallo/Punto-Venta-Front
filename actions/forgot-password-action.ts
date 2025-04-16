"use server";

import { ForgetPasswordSchema } from "@/src/schemas";

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

    return {
        errors: [],
        success: "",
    };
}
