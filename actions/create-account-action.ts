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
}
