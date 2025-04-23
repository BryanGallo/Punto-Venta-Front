"use server";

import { ErrorSchema, SuccessSchema, ValidateTokenSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
};

export async function validateToken(token: string, prevState: ActionStateType) {
    console.log(prevState);
    const tokenValidate = ValidateTokenSchema.safeParse(token);

    if (!tokenValidate.success) {
        const errors = tokenValidate.error.issues.map((error) => {
            return error.message;
        });
        return { errors, success: "" };
    }

    const url = `${process.env.API_URL}/auth/validate-token`;

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
    });

    const json = await req.json();

    if (!req.ok) {
        const { message } = ErrorSchema.parse(json);
        return {
            errors: message,
            success: ""
        };
    }

    const { message } = SuccessSchema.parse(json);
    return {
        errors: [],
        success: message,
    };
}
