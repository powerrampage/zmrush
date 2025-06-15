import Image from "next/image";
import Link from "next/link";
import { ServerCard } from "@/components/server-card";
import { ServerRecordsTable } from "@/components/server-records-table";
import { AboutSection } from "@/components/about-section";
import { PartnerSection } from "@/components/partner-section";
import { VideoSection } from "@/components/video-section";

export default async function HomePage() {

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12 mt-8">
        <Image
          src="https://ext.same-assets.com/3864282553/702904724.png"
          alt="Kreedz Logo"
          width={50}
          height={80}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Welcome to zmrush</h1>
        <div className="flex items-center mb-8">
          <Image
            src="https://ext.same-assets.com/3864282553/4145055831.png"
            alt="Estonian Flag"
            width={16}
            height={12}
            className="mr-2"
          />
          <span className="text-gray-400">Estonian Kreedz Community</span>
        </div>
        <h2 className="text-xl text-gray-300">
          Join our community and explore the world of speedrunning
        </h2>
      </div>

      {/* Server Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        <ServerCard
          title="BEGINNER/EASY"
          playersOnline={2}
          maxPlayers={32}
          serverAddress="cs.zmrush:27002"
          ipAddress="185.31.242.203:27002"
          mapName="b2j_bhopward"
          imageUrl="https://ext.same-assets.com/3864282553/1619353944.jpeg"
        />
        <ServerCard
          title="MEDIUM/HARD"
          playersOnline={1}
          maxPlayers={32}
          serverAddress="cs.zmrush:27004"
          ipAddress="185.31.242.203:27004"
          mapName="bla_basementblock"
          imageUrl="https://ext.same-assets.com/3864282553/2892819904.jpeg"
        />
        <ServerCard
          title="EXTREME/DEATH"
          playersOnline={1}
          maxPlayers={32}
          serverAddress="cs.zmrush:27006"
          ipAddress="185.31.242.203:27006"
          mapName="idw_carnifex"
          imageUrl="https://ext.same-assets.com/3864282553/3959488579.jpeg"
        />
        <ServerCard
          title="LONGJUMPS"
          playersOnline={0}
          maxPlayers={32}
          serverAddress="cs.zmrush:27009"
          ipAddress="185.31.242.203:27009"
          mapName="kz_longjumps2"
          imageUrl="https://ext.same-assets.com/3864282553/3796478390.jpeg"
        />
        <ServerCard
          title="MASTERS"
          playersOnline={1}
          maxPlayers={32}
          serverAddress="cs.zmrush:27012"
          ipAddress="185.31.242.203:27012"
          mapName="kzray_rocky-bhop"
          imageUrl="https://ext.same-assets.com/3864282553/2595524853.jpeg"
        />
      </div>

      {/* Server Records */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Latest server records:</h2>
        <ServerRecordsTable />
      </div>

      {/* About Sections */}
      <AboutSection />

      {/* Partners */}
      <PartnerSection />

      {/* Videos */}
      <VideoSection />
    </main>
  );
}
