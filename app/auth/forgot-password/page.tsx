import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PV - ",
    description: "Recupera tu contraseña",
};

export default function ForgotPasswordPage() {
    return (
        <>
            <h1 className="font-black text-5xl text-purple-950 text-center">
                Olvidaste tu Contraseña
            </h1>
            <p className="text-3xl font-bold text-center">
                aqui <span className="text-amber-500">puedes reestablecerla</span>
            </p>
            <ForgotPasswordForm />
        </>
    );
}
