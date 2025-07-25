import { CartItem } from "@/src/schemas";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";

export default function ShoppingCartItem({ item }: { item: CartItem }) {
    // console.log(item);
    return (
        <li className="flex items-center space-x-6 py-6 relative">
            <div className="h-24 w-24">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/img/${item.image}`}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-auto space-y-2">
                <h3 className="text-gray-900">{item.name}</h3>
                <p>{formatCurrency(item.price)}</p>
                <select
                    className="w-32 text-center p-2 rounded-lg bg-white"
                    value={item.quantity}
                    onChange={() => {}}
                >
                    {/* Generando las opciones del select */}
                    {Array.from({ length: item.inventory }, (_, index) => (
                        <option key={index} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <div className="absolute top-10 -right-0">
                <button type="button" onClick={() => {}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-red-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
        </li>
    );
}
