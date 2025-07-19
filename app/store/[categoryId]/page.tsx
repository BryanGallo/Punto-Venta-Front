import ProductCard from "@/components/products/ProductCard";
import { verifySession } from "@/src/auth/dal";
import { CategoryWithProductsSchema } from "@/src/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Params = Promise<{
    categoryId: string;
}>;

async function getProducts(categoryId: string){
    const url = `${process.env.API_URL}/categories/${categoryId}?products=true`;
    const token = (await cookies()).get(`${process.env.COOKIE_NAME}`)?.value;

    if (!token) {
        redirect("/auth/login");
    }

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
        },
    });
    const data = await response.json();
    return data;
}

export default async function PageCategory({ params }: { params: Params }) {
    await verifySession();
    const { categoryId } = await params;

    const category = await getProducts(categoryId);
    // console.log(category);
    const validatedCategory = CategoryWithProductsSchema.safeParse(category);

    if (!validatedCategory.success) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Error</h1>
                <p className="text-sm text-gray-500">
                    {category.message}
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {validatedCategory.data.products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
