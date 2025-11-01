import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
            src="/logo/Fennec_Ear_Piece_Logo.png"
            alt="The Fennec Ear Piece Logo"
            width={600}
            height={100}
        />
    </div>
    <div className="flex justify-center mt-5">
        <div className="box-content w-1500 h-30 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/fennecEar/Fennec_Ear_Piece.png", "Fennec Ear Piece 1", 900, 500]}
                headerText={["United State Threatens War. Texas Border in High Tension.", "text-2xl text-blue-400"]}
            />
            <p className="text-center">The 2nd Republic of Texas and the Democratic Kitsune's Republic of Kitsunestan signed a formally defence cooperation. The United States of America is not happy about it. Read Now.
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
