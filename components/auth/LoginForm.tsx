"use client";

import { login } from "@/actions/auth/login-action";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Visible from "../ui/Visible";

export default function LoginForm() {
    const [state, dispach, isPending] = useActionState(login, {
        errors: [],
    });

    console.log(state);

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (state.errors) {
            state.errors.map((error) => toast.error(error));
        }
    }, [state]);

    const handle = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <form className="mt-14 space-y-5" noValidate action={dispach}>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-2xl">Email</label>

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
                    <label className="font-bold text-2xl">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password de Registro"
                            className="w-full border border-gray-300 p-3 rounded-lg pr-12"
                            name="password"
                            value={formValues.password}
                            onChange={handle}
                        />
                        <div className="absolute right-3 top-[55%] -translate-y-1/2">
                            <Visible
                                show={showPassword}
                                handleShow={handleShowPassword}
                            />
                        </div>
                    </div>
                </div>

                <input
                    type="submit"
                    disabled={isPending}
                    value={isPending ? "Cargando" : "Iniciar Sesión"}
                    className={`bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer `}
                />
            </form>
        </>
    );
}
