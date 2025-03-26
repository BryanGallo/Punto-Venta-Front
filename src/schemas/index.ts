import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string().min(1, { message: "El email es obligatorio" }).email(),
    name: z.string().min(1, { message: "El nombre es obligatorio" }),
    password: z
        .string()
        .min(6, {
            message: "La contraseña debe ser de mínimo de 6 caracteres",
        }),
    password_confirmation: z
        .string()
        .min(6, { message: "La contraseña debe ser de mínimo de 6 caracteres" }),
});
