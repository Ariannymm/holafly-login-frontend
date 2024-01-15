import React from "react";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <main className="ml-auto mr-auto flex items-center justify-center h-screen">
                {children}
            </main>
        </>
    );
}