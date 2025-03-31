"use server";
import { RegisterSchema } from "../src/schemas/index";

export async function register(formData: FormData) {
    // console.log(formData);

    const registerDate = {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    };

    //validar
    const register = RegisterSchema.safeParse(registerDate);

    const errors = register.error?.errors.map((error) => {
        return error.message;
    });

    console.log(errors);

    if (!register.success) {
        return {};
    }

    const url = `${process.env.API_URL}/auth/register`;

    console.log(url);

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: register.data.name,
            email: register.data.email,
            password: register.data.password,
        }),
    });

    const json = await req.json();

    console.log(json);
    
}
