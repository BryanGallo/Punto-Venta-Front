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
                Crea una cuenta
            </h1>
            <p className="text-3xl font-bold text-center">
                y vende tus <span className="text-amber-500">productos</span>
            </p>
            <RegisterForm />
            <nav>
                <Link href={"/auth/login"}>
                    Ya tienes cuenta ? Iniciar Sesión
                </Link>
            </nav>
        </>
    );
}
