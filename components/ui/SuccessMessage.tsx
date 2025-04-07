import React from "react";

export default function SuccessMessage({ success }: { success: string }) {
    return (
        <p className="bg-green-500 border border-green-600 rounded-lg text-white text-center uppercase p-2">
            {success}
        </p>
    );
}
