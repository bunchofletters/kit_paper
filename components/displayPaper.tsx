'use client'
import {useState} from "react";
import Image from "next/image";

interface paperSetUp {
    imageInfo: [string, string, number, number]
    headerText: [string, string]
}

export default function DisplayPaper({imageInfo, headerText}: paperSetUp){
    const [open, setOpen] = useState(false);

    const openPaper = () => setOpen(true)
    const closePaper = () => setOpen(false);

    return (
        <>
        <h1 onClick={openPaper} className={`cursor-pointer ${headerText[1]}`}>
            {headerText[0]}
        </h1>
        {open && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50" onClick={closePaper}>
                <div onClick={(e) => e.stopPropagation()} className={`relative overflow-hidden`}>
                    <Image
                        src={imageInfo[0]}
                        alt={imageInfo[1]}
                        width={imageInfo[2]}
                        height={imageInfo[3]}
                        draggable={false}
                        className={`max-w-full max-h-screen object-contain`}
                    />
                </div>
                <div className="absolute top-2 right-2">
                    <button className="cursor-pointer text-4xl">&#11198;</button>
                </div>
            </div>
        )}
        </>
    )
}