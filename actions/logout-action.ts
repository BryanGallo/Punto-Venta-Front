"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {
    (await cookies()).delete("CrEpErIa_Token");

    redirect("/auth/login");
}
