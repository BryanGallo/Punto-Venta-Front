import Logo from "@/components/ui/Logo";
import ToastNotification from "@/components/ui/ToastNotification";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                <div className="bg-purple-950 min-h-32 lg:bg-auth lg:bg-30 bg-no-repeat bg-left-bottom">
                    <div className="w-96 py-10 lg:py-20 mx-auto">
                        <Logo />
                    </div>
                </div>
                <div className="p-3 lg:py-10 flex flex-col justify-center items-center">
                    <div className="max-w-xl w-full flex flex-col">
                        {children}
                    </div>
                </div>
            </div>
            <ToastNotification />
        </>
    );
}
