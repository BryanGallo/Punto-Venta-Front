import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PV - Iniciar Sesión",
    description: "Iniciar Sesión",
};

export default function LoginPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950 text-center">
                Inicia Sesión
            </h1>
            <p className="text-3xl font-bold text-center">
                y vende tus <span className="text-amber-500">productos</span>
            </p>
            <LoginForm />
        </>
    );
}
