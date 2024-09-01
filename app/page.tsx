
import React from "react";
import NavBar from "@/components/NavBar";
import WelcomePage from "@/components/pages/WelcomePage"
import AboutPage from "@/components/pages/AboutPage";


export default function Home() {


    return (<div>
            {/*<div*/}
            {/*    // className="separate-bg sticky top-0"*/}
            {/*>*/}
            {/*    <div className="border-primary border-b-2">*/}
            {/*        <NavBar/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="flex justify-center bg-gradient-to-r from-black via-blue-900 to-black">
                <div className=" bg-black bg-opacity-50 mt-3 mb-3 pr-10 pl-10 rounded-3xl">
                    <WelcomePage/>
                </div>
            </div>
            <div>
                <AboutPage />
            </div>
        </div>
    );
}
