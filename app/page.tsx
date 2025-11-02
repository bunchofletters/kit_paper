import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
      <h1 className="text-4xl">Kitsunestan Papers Database [KPDB]</h1>
    </div>
    <div className="mt-1">
      <div className="flex justify-center mt-1 mb-1">
        <Link href="/TheSnowliad">
          <Image
            src="/logo/thesnowliad.JPG"
            alt="The Snowliad Post Logo"
            width={400}
            height={200}
          />
        </Link>
      </div>
      <div className="flex justify-center mt-1 mb-1">
        <Link href="/FluffyGazette">
          <Image
            src="/logo/Fluffy.JPG"
            alt="The Fluffy Gazette Logo"
            width={400}
            height={0}
          />
        </Link>
      </div>
      <div className="flex justify-center mt-1 mb-1">
        <Link href="/kitsuneChronicle">
          <Image
            src="/logo/chronice.JPG"
            alt="The Kitsune Chronicle Logo"
            width={400}
            height={100}
          />
        </Link>
      </div>
      <div className="flex justify-center mt-1 mb-1">
        <Link href="/FennecEarPiece">
          <Image
            src="/logo/Fennec_Ear_Piece_Logo.png"
            alt="The Fennec Ear Piece Logo"
            width={400}
            height={100}
          />
        </Link>
      </div>
      <div className="flex justify-center mt-1 mb-1">
        <Link href="/kitsuneHowler">
          <Image
            src="/logo/Kitsco_Howler_Piece.png"
            alt="The Kitsune Howler Logo"
            width={400}
            height={100}
          />
        </Link>
      </div>
    </div>
    </>
  );
}
