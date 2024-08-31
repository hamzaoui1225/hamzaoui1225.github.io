import SocialMediaSection from "@/components/SocialMediaSection";
import Image from "next/image";
import {abel} from "@/ui/fonts";

function WellcomePage () {
        return <div className={`container ${abel.className}`}>
            <div className="flex justify-center mt-5">
                <div className="border-2 rounded-full p-2 border-blue-600">
                    <div className="w-72 h-72 overflow-hidden border-8 border-blue-400 rounded-full">
                        <Image width={72} height={72} className="w-72 h-72" src="/hamzaoui.jpg" alt="hamzaoui"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center justify-center pt-5">
                <span className="text-3xl text-blue-500 font-extrabold">Mohamed Nour Hamzaoui</span>
                <span className="text-3xl font-extralight">Software Developer</span>
            </div>
            <div className="flex flex-col text-center justify-center pt-5">
                <span className="text-xl font-extralight">Software Engineer</span>
            </div>
            <div className="p-16">
                <SocialMediaSection/>
            </div>
        </div>;
    }


export default function Home() {


    return (
        <WellcomePage/>
    );
}
