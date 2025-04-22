"use server";
import {
    RegisterSchema,
    SuccessSchema,
    ErrorSchema,
} from "../../src/schemas/index";

type ActionStateType = {
    errors: string[];
    success: string;
};

export async function register(prevState: ActionStateType, formData: FormData) {
    const registerDate = {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    };

    //validar
    const register = RegisterSchema.safeParse(registerDate);

    if (!register.success) {
        const errors = register.error.issues.map((error) => {
            return error.message;
        });
        return { errors, success: "" };
    }

    const url = `${process.env.API_URL}/auth/register`;

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: register.data.name,
            email: register.data.email,
            password: register.data.password,
            // TODO: Validar si se deja el rol quemado
            roles: [1],
        }),
    });

    const json = await req.json();

    if (json.statusCode === 409) {
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
