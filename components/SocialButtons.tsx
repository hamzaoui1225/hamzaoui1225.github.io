import React from "react";
import '@/styles/SocialButton.css'
import Link from "next/link";

export default function SocialButton({text, link, color, children}: {
    text: string,
    link: string,
    color: string,
    children: React.ReactNode
}) {


    return (
        <Link href={link}>
            <div
                style={{"--color-backgroud": color}}
                buttonText={text}
                className="group animation-button">
                {children}
            </div>
        </Link>
    );
}