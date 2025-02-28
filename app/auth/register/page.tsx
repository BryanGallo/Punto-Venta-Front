import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";

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
        </>
    );
}
