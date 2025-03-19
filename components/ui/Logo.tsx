import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="Logo Local"
            width={0}
            height={0}
            className="max-w-96 w-96"
            priority
        />
    );
}
