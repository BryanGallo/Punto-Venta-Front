import { verifySession } from "@/src/auth/dal";

type Params = Promise<{
    categoryId: string;
}>;

export default async function PageCategory({ params }: { params: Params }) {
    await verifySession();
    const { categoryId } = await params;

    return <div>Store2 con id {categoryId} y validate session</div>;
}
