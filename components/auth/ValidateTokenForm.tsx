"use client";

import { validateToken } from "@/actions/auth/validate-token.action";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import {
    useActionState,
    useEffect,
    useState,
    startTransition,
    Dispatch,
    SetStateAction,
} from "react";
import { toast } from "react-toastify";

type ValidateTokenFormProps = {
    setIsValidToken: Dispatch<SetStateAction<boolean>>;
};

export default function ValidateTokenForm({
    setIsValidToken,
}: ValidateTokenFormProps) {
    const [token, setToken] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const validateTokenInput = validateToken.bind(null, token);
    const [state, dispatch] = useActionState(validateTokenInput, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            setIsValidToken(true);
        }
        if (state.errors) {
            state.errors.map((error) => toast.error(error));
        }
    }, [state, setIsValidToken]);

    useEffect(() => {
        if (isComplete) {
            startTransition(() => {
                dispatch();
            });
            setIsComplete(false);
        }
    }, [isComplete]);

    const handleChange = (token: string) => {
        setToken(token);
    };

    const handleComplete = () => {
        setIsComplete(true);
    };

    return (
        <div className="flex justify-center gap-5 my-10">
            <PinInput
                value={token}
                onChange={handleChange}
                onComplete={handleComplete}
            >
                <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
            </PinInput>
        </div>
    );
}
