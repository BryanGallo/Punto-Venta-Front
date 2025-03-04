import Image from "next/image";

export default function Logo() {
    //TODO: Cambiar por la etique Img de Next
    return <Image src="/logo.svg" alt="Logo Local" width={400} height={123} priority />;
}
