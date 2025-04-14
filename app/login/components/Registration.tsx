import React from "react";
import { AuthButton } from "./AuthButton";
import { useRouter } from "next/navigation";

export const RegistrationForm: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex-1 bg-white px-10 py-6 rounded-3xl max-sm:p-5" aria-label="Registration form">
            <div>
                <h2 className="mb-4 text-2xl font-semibold" aria-label="Registration title">Registration</h2>
                <div className="mb-8 h-px bg-zinc-300 bg-opacity-90" />
                <p className="mb-8 text-base font-medium leading-snug text-center" aria-label="Registration description">
                    If you don't have an account,
                    <br />
                    please register here.
                </p>
                <AuthButton fullWidth ariaLabel="Create a new account" onClick={() => router.push("/register")}>Create a new account</AuthButton>
            </div>
        </div>
    );
};
