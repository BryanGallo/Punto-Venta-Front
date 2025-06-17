import { verifySession } from "@/src/auth/dal";
import { CategoryWithProductsSchema } from "@/src/schemas";
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
    const validatedProducts = CategoryWithProductsSchema.safeParse(products);

    if (!validatedProducts.success) {
        console.log(validatedProducts.error);
    }

    return (
        <div>
            Store2 con id {categoryId} y validate session
            {validatedProducts.data?.products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.inventory}</p>
                </div>
            ))}
        </div>
    );
}
