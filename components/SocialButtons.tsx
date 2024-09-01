import React from "react";
import '@/styles/SocialButton.css'
import Link from "next/link";

export default function SocialButton({link, color, children}: {
    link: string,
    color: string,
    children: React.ReactNode
}) {
    return (
        <Link href={link}>
            <div style={{
                ['--color-backgroud' as any]: color
            }} className="group animation-button">
                {children}
            </div>
        </Link>
    );
}