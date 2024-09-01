'use client';
import {abel} from "@/ui/fonts";
import Image from "next/image";
import {motion} from "framer-motion"
import SocialMediaSection from "@/components/SocialMediaSection";
import {DownloadIcon, UserPen} from "lucide-react";
import React from "react";

export default function WelcomePage() {

    return <div className={`${abel.className} flex gap-10 pt-10 md:pt-5 md:gap-2 sm:pt-3 sm:flex-col sm:gap-0 pb-8`}>
        <motion.div initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.5}}>
            <div className="flex justify-center ">
                <div className="border-2 rounded-full p-2 border-blue-600">
                    <div className="w-72 h-72 overflow-hidden border-8 border-blue-400 rounded-full">
                        <Image width={72} height={72} className="w-72 h-72" src="/hamzaoui.jpg" alt="hamzaoui"/>
                    </div>
                </div>
            </div>
        </motion.div>

        <motion.div initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.5}} className="flex flex-col text-center justify-center pt-8">
            <span className="text-3xl text-blue-500 font-extrabold">Mohamed Nour Hamzaoui</span>
            <span className="text-2xl text-white font-extralight">Software Engineer</span>
            <div className="pt-2 pb-2 space-x-3">
                <button
                    className="border-primary border-2 bg-primary pr-3 pl-3 pt-1.5 pb-1.5 rounded-2xl hover:bg-primary-hover">
                    <div className="flex gap-2 items-center justify-center text-white">
                        <DownloadIcon size={20}/>
                        <h1 className="font-extrabold text-white text-md">Resume</h1>
                    </div>
                </button>
                <button
                    className="bg-blue-500 border-blue-500 border-2 pr-3 pl-3 pt-1.5 pb-1.5 rounded-2xl text-white hover:bg-primary-hover">
                    <div className="flex gap-2 items-center justify-center">
                        <UserPen size={20}/>
                        <h1 className="font-extrabold text-md">Contact Me</h1>
                    </div>
                </button>
            </div>
            <div className="mt-6">
                <SocialMediaSection/>
            </div>
        </motion.div>
    </div>;
}