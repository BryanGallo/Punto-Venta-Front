import Image from "next/image";

export default function Logo() {
    //TODO: Cambiar por la etique Img de Next
    return <Image src="/logo.svg" alt="Logo Local" width={0} height={0} className="w-400 h-100" priority />;
}
