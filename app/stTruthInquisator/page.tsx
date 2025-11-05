import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
          src="/logo/St._Truth_Inquisitor_Piece_Logo.png"
          alt="The St Truth Inquisitor Logo"
          width={400}
          height={100}
        />
    </div>
    <div className="flex justify-center mt-5">
        <div className="box-content w-1500 h-20 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/stTruthInquisator/St._Truth_Inquisitor_Piece.png", "St Truth Inquisitor 1", 600, 300]}
                headerText={["Joint Military-Training between Texas and Kitsunestan to Begin Soon.", "text-2xl text-blue-400"]}
            />
            <p>Maegabat and Austin has settled on a cooperative military training. Will this cause Kitsunestan to be in conflict with the US as tension rises between Texas and the United State. Read now.
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
