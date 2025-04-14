"use client";

import logout from "@/actions/logout-action";

export default function AdminMenu() {
    return (
        <button className="text-white" type="button" onClick={logout}>
            Cerrar Sesión
        </button>
    );
}
