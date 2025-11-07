import Image from "next/image";
import DisplayPaper from "@/components/displayPaper";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
        <Image
          src="/logo/thesnowliad.JPG"
          alt="The Snowliad Post Logo"
          width={1000}
          height={200}
        />
    </div>
    <div className="flex justify-center mt-5 flex-col">
        <div className="box-content w-95vh h-15 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/SnowliadPost/snowliad1.png", "Snowliad Paper 1", 1000, 300]}
                headerText={["Kitsunestan President her Excellency Caught in a Scandle!!?", "text-2xl text-blue-400"]}
            />
            <p>Her Excenellency, the President Has been found to be in some hot water this past week. The scandle has only grown worse...
            </p>
        </div>
        <div className="box-content w-95vh h-15 border flex justify-center items-center flex-col">
            <DisplayPaper
                imageInfo={["/articles/SnowliadPost/Snowliad_Post_2nd_Piece.png", "Snowliad Paper 2", 1000, 300]}
                headerText={["Planned Archeological Expedition Underway on Greenland", "text-2xl text-blue-400"]}
            />
            <p>Her Excenellency in Search of the lost city of Beijing; Plan to excavate newly brought Greenland. Learn more about Her Excenellency plan by read it here now.
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
