import { FormEvent } from "react";

export default function CouponForm() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData.get("coupon"));
        const coupon = formData.get("coupon");
        if (!coupon) {
            return;
        }
        console.log(coupon);
    };

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input type="text" placeholder="Código de descuento" name="coupon" />
            <button type="submit">Aplicar</button>
        </form>
    );
}
