import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
          src="/logo/chronice.JPG"
          alt="The Kitsune Chronicle Logo"
          width={600}
          height={0}
        />
    </div>
    <div className="flex justify-center mt-5">
        <div className="box-content w-1500 h-15 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/kitsuneChronicle/kitchronicle1.png", "Kitsune Chronicle Paper 1", 600, 300]}
                headerText={["Kitsunestan defense budget disappeared overnight, where did it go? Will this spell trouble for Kitsunestan?", "text-2xl text-blue-400"]}
            />
            <p>Defense budget is Gone and our politicans are pointing fingers. Read Now to Find out what they are saying. No Resolution in Sight.
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
