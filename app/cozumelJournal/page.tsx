import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
          src="/logo/Cozumel_Journal_Piece_Logo.png"
          alt="The Cozumel Journal Logo"
          width={400}
          height={100}
        />
    </div>
    <div className="flex justify-center mt-5">
        <div className="box-content w-1500 h-30 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/cozumelJournal/Cozumel_Journal_Piece_Final.png", "Cozumel Journal Piece 1", 900, 500]}
                headerText={["New Wildlife Ministry being Created by the Government.", "text-2xl text-blue-400"]}
            />
            <p className="text-center">Five new ministry will be created to handle the care of wildlife in Kitsunestan as approved by the President. Read now to learn more.
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
