'use client';

import { motion } from "framer-motion"
import React from "react";
import '@/styles/SocialButton.css'
import Link from "next/link";

export default function SocialButton({link, color, children, delay}: {
    link: string,
    color: string,
    delay: number,
    children: React.ReactNode
}) {
    return (
        <Link href={link}>
            <motion.div
                initial={ {y: 100 , opacity: 0} }
                whileInView={ {y: 0 , opacity: 1} }
                transition={{ delay: delay }}
                style={{
                ['--color-backgroud' as any]: color
            }} className="group animation-button">
                {children}
            </motion.div>
        </Link>
    );
}