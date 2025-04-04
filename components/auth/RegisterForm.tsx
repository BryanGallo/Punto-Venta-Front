"use client";

import { register } from "@/actions/create-account-action";
import { useActionState, useState } from "react";
import ErrorMessage from "../ui/ErrorMessage";

export default function RegisterForm() {
    // const prueba= 1
    const [state, dispacth] = useActionState(register, {
        errors: [],
    });
    console.log(state);
    
    // if (state.success) {
    //     reset(); // Limpia el formulario solo si la acción fue exitosa
    //   }

    const [formValues, setFormValues] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const handle = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form className="mt-5 space-y-2" noValidate action={dispacth}>
            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="email"
                    value={formValues.email}
                    onChange={handle}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl">Nombre</label>
                <input
                    type="name"
                    placeholder="Nombre de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="name"
                    value={formValues.name}
                    onChange={handle}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl">Password</label>
                <input
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                    value={formValues.password}
                    onChange={handle}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl">Repetir Password</label>
                <input
                    id="password_confirmation"
                    type="password"
                    placeholder="Repite Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password_confirmation"
                    value={formValues.password_confirmation}
                    onChange={handle}
                />
            </div>

            <input
                type="submit"
                value="Registrarme"
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
            />

            {state.errors.map((error, index) => (
                <ErrorMessage error={error} key={index} />
            ))}
        </form>
    );
}
