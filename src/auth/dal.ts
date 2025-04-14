import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { UserSchema } from "../schemas";

export const verifySession = cache(async () => {
    const token = (await cookies()).get("CrEpErIa_Token")?.value;

    if (!token) {
        redirect("/auth/login");
    }
    // console.log(JSON.parse(token));

    const url = `${process.env.API_URL}/auth/protected-route`;

    const req = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
        },
    });

    const session = await req.json();
    const result = UserSchema.safeParse(session);

    if (!result.success) {
        redirect("/auth/login");
    }

    return {
        user: result.data,
        isAuth: true,
    };
});
