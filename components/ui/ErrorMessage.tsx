export default function ErrorMessage({ error }: { error: string }) {
    return (
        <p className="bg-red-100 border border-red-400 rounded-lg text-red-700 p-2 text-center uppercase">
            {error}
        </p>
    );
}
