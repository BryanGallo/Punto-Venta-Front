import Logo from "@/components/ui/Logo";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                <div className="bg-purple-950 min-h-32">
                    <Logo />
                </div>
                <div className="p-3 lg:py-10 flex flex-col justify-center items-center">
                    <div className="max-w-xl w-full flex flex-col">{children}</div>
                </div>
            </div>
        </>
    );
}
