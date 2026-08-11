import React from "react";
import Link from "next/link";
import { Disc, Github, HomeIcon, Linkedin, NotebookText, Palette, Phone, UserIcon } from "lucide-react";

const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <HomeIcon className="w-full h-auto" strokeWidth={1.5}/>
        case "about":
            return <UserIcon className="w-full h-auto" strokeWidth={1.5}/>
        case "projects":
            return <Palette className="w-full h-auto" strokeWidth={1.5}/>
        case "contact":
            return <Phone className="w-full h-auto" strokeWidth={1.5}/>
        case "github":
            return <Github className="w-full h-auto" strokeWidth={1.5}/>
        case "linkedin":
            return <Linkedin className="w-full h-auto" strokeWidth={1.5}/>
        case "music":
            return <Disc className="w-full h-auto" strokeWidth={1.5}/>
        case "resume":
            return <NotebookText className="w-full h-auto" strokeWidth={1.5}/>

        default:
            return <HomeIcon className="w-full h-auto" strokeWidth={1.5}/>
    }
}

const NavButton = ({ x, y, label, link, icon, newTab }) => {
    return (
        <div
            className="absolute cursor-pointer z-50 pointer-events-auto"
            style={{ transform: `translate(${x}, ${y})` }}
        >
            <Link
                href={link}
                target={newTab ? '_blank' : '_self'}
                className='text-foreground rounded-full flex items-center justify-center'
                aria-label={label}
                name={label}
            >
                <span className="relative w-14 h-14 p-4">
                    {getIcon(icon)}
                </span>
            </Link>
        </div>
    );
};

export default NavButton;