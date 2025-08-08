type AmountProps = {
    label: string;
    amount: number;
};

export default function Amount({ label, amount }: AmountProps) {
    return (
        <div>
            <dt>{label}</dt>
            <dd>{amount}</dd>
        </div>
    );
}
