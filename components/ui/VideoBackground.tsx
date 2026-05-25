interface VideoBackgroundProps {
  src: string;
  overlayOpacity?: number;
}

export default function VideoBackground({ src, overlayOpacity = 65 }: VideoBackgroundProps) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(8,8,8,${overlayOpacity / 100})` }}
      />
    </>
  );
}
