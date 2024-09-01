
import React from "react";
import NavBar from "@/components/NavBar";
import WelcomePage from "@/components/WelcomePage"

export default function Home() {


    return (<div>
            <div  className="separate-bg sticky top-0">

                <div className="flex justify-end max-w-[1200px] border-primary border-b-2">
                    <NavBar/>
                </div>
            </div>
            <div className="max-w-[1200px] pl-5 pr-5 mt-10">
                <WelcomePage/>
            </div>
        </div>
    );
}
