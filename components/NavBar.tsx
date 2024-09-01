'use client';

import {DownloadIcon, Menu, MoonIcon, SunIcon} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";

export default function NavBar() {

    const theme = useTheme();
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        setDarkTheme(theme.theme == 'dark');
    }, [theme.theme]);
    const switchTheme = () => {
        theme.setTheme(theme.theme == 'dark' ? 'light' : 'dark');
    }

    return (<div className="flex justify-between ">
            <div className="flex items-center pl-3 invisible sm:visible">
                <button onClick={switchTheme}>
                    <Menu/>
                </button>
            </div>
            <div className={`h-12 flex justify-end pr-3`}>
                <div className="flex items-center">
                    <button onClick={switchTheme}>
                        {darkTheme ? <MoonIcon/> : <SunIcon/>}
                    </button>
                </div>
            </div>
        </div>
    );
}

{/*<div */
}
{/*    // className={`flex gap-5 justify-end xs:hidden xs:bg-lime-400 sm:bg-blue-100 md:bg-green-400`}*/
}
{/*>*/
}

{/*</div>*/
}