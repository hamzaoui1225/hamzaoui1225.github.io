'use client';

import {MoonIcon, SunIcon} from "lucide-react";
import {useState} from "react";

export default function NavBar() {

    const [ darkTheme, setDarkTheme ] = useState<boolean>(true);

    return (<div className="h-16 bg-gray-800 flex justify-end pr-3">
            <div className="flex items-center gap-4">
                <button onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? <MoonIcon /> : <SunIcon />}
                </button>
                <button className="bg-primary pr-4 pl-4 pt-1.5 pb-1.5 h-10 rounded-md">
                    Resume
                </button>
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