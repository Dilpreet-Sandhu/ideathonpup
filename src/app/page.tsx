import gear from "@/assets/gear.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white flex gap-4 text-black flex-col items-center justify-center">

      <Image
        src={gear}
        width={40}
        height={40}
        alt="gear"
        className="gear-animation"
      />
      <p className="text-[20px] font-semibold tracking-normal">Website is under devlopment</p>
    </div>
  );
}
