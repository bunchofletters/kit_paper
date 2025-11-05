import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
          src="/logo/Kitsco_Howler_Piece.png"
          alt="The Kitsune Howler Logo"
          width={400}
          height={100}
        />
    </div>
    <div className="flex justify-center mt-5 flex-col">
        <div className="box-content w-95vh h-15 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/kitsuneHowler/Kitsco_Howler_Piece_2.png", "Kitsune Howler Article 1", 600, 300]}
                headerText={["General Sam Houston Killed. What does this entail?", "text-2xl text-blue-400"]}
            />
            <p>On the 30th night of Yoko General Houston was brutally killed by a jungle near Kuala Lumpur, Malaysia. Read now to find out more.
            </p>
        </div>
        <div className="box-content w-95vh h-15 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/kitsuneHowler/Kitsco_Howler_2nd_Piece.png", "Kitsune Howler Article 2", 600, 300]}
                headerText={["Greenland Purchase Deal is a Success", "text-2xl text-blue-400"]}
            />
            <p>Kitsunestan and Denmark has reached a deal on the purchase of Greenland. Read now to learn more about the deal.
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
