import { verifySession } from "@/src/auth/dal";

export default async function StorePage() {
    await verifySession();
    return <div>Store</div>;
}
