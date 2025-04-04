export default function ErrorMessage({ error }: { error: string }) {
    return (
        <p className="bg-red-500 rounded-lg text-white p-2 text-center uppercase">
            {error}
        </p>
    );
}
