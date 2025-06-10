import { verifySession } from "@/src/auth/dal";
import { redirect } from "next/navigation";

export default async function StorePage() {
    await verifySession();
    redirect("/store/1");
}
