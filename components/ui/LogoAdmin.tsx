import Image from "next/image";

export default function LogoAdmin() {
    return (
        <Image
            src="/logo.jpg"
            alt="Logo Local"
            width={200}
            height={200}
            className="max-w-96 w-16 rounded-full"
            priority
        />
    );
}
