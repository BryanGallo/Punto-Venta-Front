import { formatCurrency } from "@/src/utils";

type AmountProps = {
    label: string;
    amount: number;
};

export default function Amount({ label, amount }: AmountProps) {
    return (
        <div className="flex justify-between">
            <dt className="text-gray-500">{label}</dt>
            <dd className="text-gray-900 font-bold text-xl">
                {formatCurrency(amount)}
            </dd>
        </div>
    );
}
