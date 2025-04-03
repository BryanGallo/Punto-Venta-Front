"use server";
import { RegisterSchema } from "../src/schemas/index";

type ActionStateType = {
    errors: string[];
};

export async function register(prevState: ActionStateType, formData: FormData) {
    console.log(prevState);
    const registerDate = {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    };

    //validar
    const register = RegisterSchema.safeParse(registerDate);

    if (!register.success) {
        const errors = register.error.errors.map((error) => {
            return error.message;
        });
        return { errors };
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

    console.log(json);

    return {
        errors: [],
    };
}
