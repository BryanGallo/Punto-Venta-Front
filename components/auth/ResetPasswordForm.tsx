"use client";

import { useActionState, useEffect, useState } from "react";
import { resetPassword } from "@/actions/auth/reset-password-action";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function ResetPasswordForm({ token }: { token: string }) {
    const [formValues, setFormValues] = useState({
        password: "",
        password_confirmation: "",
    });

    const resetPasswordToken = resetPassword.bind(null, token);
    const [state, dispatch] = useActionState(resetPasswordToken, {
        errors: [],
        success: "",
    });

    console.log(state);

    useEffect(() => {
        if (state.success) {
            setFormValues({
                password: "",
                password_confirmation: "",
            });
            toast.success(state.success, {
                onClose: () => {
                    redirect("/auth/login");
                },
            });
        }
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
        <form className=" mt-14 space-y-5" noValidate action={dispatch}>
            <div className="flex flex-col gap-5">
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

            <div className="flex flex-col gap-5">
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
                value="Guardar Password"
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
            />
        </form>
    );
}
