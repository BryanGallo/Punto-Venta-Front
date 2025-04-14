import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "PV - Iniciar Sesión",
    description: "Iniciar Sesión",
};

export default function LoginPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950 text-center">
                Inicia <span className="text-amber-500">Sesión</span>
            </h1>
            <LoginForm />
            <nav className="mt-10 flex flex-col space-y-2">
                <Link
                    href={"/auth/forgot-password"}
                    className="text-center text-gray-500"
                >
                    Olvidaste tu contraseña? Restablecer
                </Link>
                <Link
                    href={"/auth/register"}
                    className="text-center text-gray-500"
                >
                    No tienes cuenta? Crea una!
                </Link>
            </nav>
        </>
    );
}
