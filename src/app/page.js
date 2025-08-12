import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-white opacity-30 z-10"></div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        <Image
          src="/daran.png"
          alt="logo"
          width={180}
          height={180}
          className="rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-white drop-shadow-lg text-center">
          Website is under construction!
        </h1>
      </div>
    </div>
  );
}
