import { verifySession } from "@/src/auth/dal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Punto de Venta - Admin",
    description: "Punto de Venta - Admin",
}

export default async function AdminPage() {
    await verifySession();
    return (
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
            Admins
        </div>
    );
}
