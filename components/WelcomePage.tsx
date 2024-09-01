'use client';
import {abel} from "@/ui/fonts";
import Image from "next/image";
import { motion } from "framer-motion"
import SocialMediaSection from "@/components/SocialMediaSection";

export default function WelcomePage() {
    return <div className={`${abel.className} flex sm:flex-col `}>
        <motion.div initial={ {x: -100 , opacity: 0} }
                    animate={ {x: 0 , opacity: 1} }
                    transition={{ delay: 0.5 }}
        >
            <div className="flex justify-center mt-5">
                <div className="border-2 rounded-full p-2 border-blue-600">
                    <div className="w-72 h-72 overflow-hidden border-8 border-blue-400 rounded-full">
                        <Image width={72} height={72} className="w-72 h-72" src="/hamzaoui.jpg" alt="hamzaoui"/>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="w-full">
            <div className="flex flex-col text-center justify-center pt-5">
                <span className="text-3xl text-blue-500 font-extrabold">Mohamed Nour Hamzaoui</span>
                <span className="text-3xl font-extralight">Software Developer</span>
            </div>
            <div className="flex flex-col text-center justify-center pt-5 ">
                <span className=" text-lg font-extralight pr-4 pl-4">I am proud to have a unique background that combines system engineering, computer networking, and software development. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges. From developing a user-friendly frontend to building reliable web servers, Ive worked on many projects. Also, have experience with cross-platform mobile application development.</span>
            </div>
            <div className="p-8 lg:p-1">
                <SocialMediaSection/>
            </div>
        </div>
    </div>;
}