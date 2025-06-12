import { verifySession } from "@/src/auth/dal";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Params = Promise<{
    categoryId: string;
}>;

async function getProducts(categoryId: string) {
    const url = `${process.env.API_URL}/categories/${categoryId}?products=true`;
    const token = (await cookies()).get(`${process.env.COOKIE_NAME}`)?.value;

    if (!token) {
        redirect("/auth/login");
    }

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(token)}`,
        },
    });
    const data = await response.json();
    return data;
}

export default async function PageCategory({ params }: { params: Params }) {
    await verifySession();
    const { categoryId } = await params;

    const products = await getProducts(categoryId);
    console.log(products);

    return <div>Store2 con id {categoryId} y validate session</div>;
}
