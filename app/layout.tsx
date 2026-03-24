import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cat Breeds",
    description: "Browse cat breeds from The Cat API"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
                <footer>
                    <p>All Rights Reserved ©</p>
                </footer>
            </body>
            
        </html>
    );
}
