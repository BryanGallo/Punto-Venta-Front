import { z } from "zod";

export const RegisterSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: "El email es obligatorio" })
            .email({ message: "Email no valido" }),
        name: z.string().min(1, { message: "El nombre es obligatorio" }),
        password: z.string().min(6, {
            message: "La contraseña debe ser de mínimo de 6 caracteres",
        }),
        password_confirmation: z.string().min(6, {
            message: "Las contraseñas no son iguales",
        }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Las contraseñas deben ser iguales",
        path: ["password_confirmation"], //*Indicamos donde debe colocarse el error
    });

export const SuccessSchema = z.object({
    message: z.string(),
});

//*Este es usado para todo el auth
export const ErrorSchema = z.object({
    message: z.string().array(),
});

export const LoginSchema = z.object({
    email: z
        .string()
        .email({ message: "Email no valido" })
        .min(1, { message: "El email es obligatorio" }),
    password: z.string().min(1, { message: "La Contraseña es obligatoria" }),
});

export const UserSchema = z.object({
    user: z.object({
        id: z.string({ message: "Debe" }),
        name: z.string(),
        email: z.string().email(),
        isActive: z.boolean(),
        roles: z
            .object({
                id: z.number(),
                name: z.string(),
            })
            .array(),
    }),
});

export const ForgetPasswordSchema = z.object({
    email: z
        .string()
        .email({ message: "Email no valido" })
        .min(1, { message: "El email es obligatorio" }),
});

export const ValidateTokenSchema = z.string().length(6, {
    message: "El token no es valido",
});

export const ResetPasswordSchema = z
    .object({
        password: z.string().min(6, {
            message: "La contraseña debe ser de mínimo de 6 caracteres",
        }),
        password_confirmation: z.string().min(6, {
            message: "Las contraseñas no son iguales",
        }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Las contraseñas deben ser iguales",
        path: ["password_confirmation"], //*Indicamos donde debe colocarse el error
    });
