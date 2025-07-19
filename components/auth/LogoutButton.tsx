"use client";

import logout from "@/actions/auth/logout-action";


export default function LogoutButton() {
    return (
        <button className="text-white hover:bg-amber-500 font-bold my-2 px-4 rounded-md border border-white flex items-center gap-2" onClick={() => logout()}>
            {" "}
            Cerrar Sesión
        </button>
    );
}
