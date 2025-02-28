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
                Olvidaste tu Contraseña
            </h1>
            <p className="text-3xl font-bold">
                aqui <span className="text-amber-500">puedes reestablecerla</span>
            </p>
            <ForgotPasswordForm />
        </>
    );
}
