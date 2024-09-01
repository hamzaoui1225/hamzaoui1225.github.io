'use client';

import {DownloadIcon, MoonIcon, SunIcon} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";

export default function NavBar() {

    const theme = useTheme();
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    useEffect(()=> { setDarkTheme(theme.theme == 'dark'); }, [theme.theme]);
    const switchTheme = () => {
        theme.setTheme(theme.theme == 'dark' ? 'light' : 'dark');
    }

    return (<div><div className={`h-16 flex justify-end pr-3`}>
            <div className="flex items-center gap-4">
                <button onClick={switchTheme}>
                    {darkTheme ? <MoonIcon/> : <SunIcon/>}
                </button>
                <button className="flex gap-1 content-center bg-primary pr-3 pl-3 pt-1.5 pb-1.5 h-9 text-sm rounded-md text-white hover:bg-primary-hover">
                    <DownloadIcon size={19}/> Resume
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