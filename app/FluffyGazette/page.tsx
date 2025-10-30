import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
          src="/logo/Fluffy.JPG"
          alt="The Fluffy Gazette Logo"
          width={600}
          height={0}
        />
    </div>
    <div className="flex justify-center mt-5">
        <div className="box-content w-1500 h-30 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/FluffyGazette/gazette1.png", "Fluffy Gazette Paper 1", 900, 500]}
                headerText={["Suprise Attack on the 7th of Tamamo. Read now to find out whos the perpetrator", "text-2xl text-blue-400"]}
            />
            <p className="text-center">On the morning of the 7th of Tamamo wormhole open alongside the North Coast. Multiple cities hit but luckily the Cuddly Kitsune Army responded quickly removing the terrorist. Read now to find out the details.
            </p>
        </div>
    </div>
    <div className="absolute top-2 left-2">
        <Link href="/">
        <button className="cursor-pointer">Go Back</button>
        </Link>
    </div>
    </>
  );
}
