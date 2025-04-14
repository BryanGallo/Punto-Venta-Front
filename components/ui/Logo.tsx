import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.jpg"
            alt="Logo Local"
            width={2000}
            height={2000}
            className="max-w-96 w-32 lg:w-96  rounded-full"
            priority
        />
    );
}
