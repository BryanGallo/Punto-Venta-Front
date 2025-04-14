import { verifySession } from "@/src/auth/dal";

export default async function AdminPage() {
    await verifySession();
    return (
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
            Admins
        </div>
    );
}
