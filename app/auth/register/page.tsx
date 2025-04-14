import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "PV - Register",
    description: "Registrate",
};

export default function RegisterPage() {
    return (
        <>
            <h1 className="font-black text-5xl text-purple-950 text-center">
                Crea una <span className="text-amber-500">cuenta</span>
            </h1>
            <RegisterForm />
            <nav className="mt-10 flex flex-col space-y-2">
                <Link
                    href={"/auth/login"}
                    className="text-center text-gray-500"
                >
                    Ya tienes cuenta? Iniciar Sesión
                </Link>
                <Link
                    href={"/auth/forgot-password"}
                    className="text-center text-gray-500"
                >
                    Olvidaste tu contraseña? Restablecer
                </Link>
            </nav>
        </>
    );
}
