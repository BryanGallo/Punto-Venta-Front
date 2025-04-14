import LogoAdmin from "@/components/ui/LogoAdmin";
import ToastNotification from "@/components/ui/ToastNotification";
import Link from "next/link";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="bg-purple-950">
                <div className="flex flex-col lg:flex-row justify-between items-center p-3">
                    <div className="w-1/12 flex justify-center items-center">
                        <Link href={"/admin"}>
                            <LogoAdmin />
                        </Link>
                    </div>
                    <div className="">
                        <button className="text-white" type="button">Cerrar Sesión</button>
                    </div>
                </div>
            </header>
            <section className="flex">
                <div className=" h-screen w-1/12 bg-purple-950 p-3 text-white">
                    <p>Prueba de fee y alegri</p>
                    <p>Prueba</p>
                    <p>Prueba</p>
                </div>
                <div className="w-11/12 p-3 border-4 border-amber-500">{children}</div>
            </section>
            <ToastNotification />

            <footer className="">
                <p className="text-center bg-purple-950 text-white p-4">
                    Todos los Derechos Reservados {new Date().getFullYear()}
                </p>
            </footer>
        </>
    );
}
