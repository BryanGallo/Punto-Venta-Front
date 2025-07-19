import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoAdmin from "./LogoAdmin";
import { CategoriesResponseSchema } from "@/src/schemas";
import Link from "next/link";
import LogoutButton from '../auth/LogoutButton';

async function getCategories() {
    const url = `${process.env.API_URL}/categories`;

    const token = (await cookies()).get(`${process.env.COOKIE_NAME}`)?.value;

    if (!token) {
        redirect("/auth/login");
    }

    const req = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
        },
    });
    const data = await req.json();
    return data;
}

export default async function MainNav() {
    const categories = await getCategories();
    const validatedCategories = CategoriesResponseSchema.safeParse(categories);

    if (!validatedCategories.success) {
        return (
            <header className="px-10 py-5 bg-gray-700 flex flex-col md:flex-row justify-between ">
                <div className="flex justify-center">
                    <LogoAdmin />
                </div>
                <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0">
                    <span className="text-red-500">
                        Error al obtener las categorías
                    </span>
                </nav>
            </header>
        );
    }

    return (
        <header className="px-10 py-5 bg-purple-950 flex flex-col md:flex-row justify-between ">
            <div className="flex justify-center">
                <LogoAdmin />
            </div>

            <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0">
                {validatedCategories.data.map((category) => (
                    <Link
                        key={category.id}
                        href={`/store/${category.id}`}
                        className="text-white hover:text-amber-500 font-bold py-2 px-4 rounded-md"
                    >
                        {category.name}
                    </Link>
                ))}
            </nav>
            <LogoutButton />
        </header>
    );
}
