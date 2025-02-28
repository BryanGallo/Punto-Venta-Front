import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PV - ",
    description: "Recupera tu contraseña",
};

export default function ForgotPasswordPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">
                Recuperar Contraseña
            </h1>
            <p className="text-3xl font-bold">
                y vende tus <span className="text-amber-500">productos</span>
            </p>
            <ForgotPasswordForm />
        </>
    );
}
