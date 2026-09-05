import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

type VideoPosition = "left" | "center" | "right";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // Set default focus to "right" so that typical video framing (face on the right) is offset from center text
  const [videoPosition, setVideoPosition] = useState<VideoPosition>("right");

  // Programmatically handle play, looping, and muting to bypass aggressive browser/iframe autoplay policies
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset states
    setVideoError(false);

    // Forces inline and muted playing (Strictly required for autoplay)
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    // Immediate state check: If the video is already loaded or cached, readyState will be >= 2 (HAVE_CURRENT_DATA)
    if (video.readyState >= 2) {
      setVideoLoaded(true);
    }

    // Attempt autoplay programmatically
    const playVideo = () => {
      video.play().then(() => {
        setVideoLoaded(true);
        setVideoError(false);
      }).catch((err) => {
        console.warn("Autoplay was blocked initially. Retrying on user interaction or loaded event.", err);
      });
    };

    // Try playing right away
    playVideo();

    // Setup fallback trigger on window interaction if blocked
    const handleInteraction = () => {
      if (video.paused) {
        video.play().then(() => {
          setVideoLoaded(true);
          setVideoError(false);
        }).catch(() => {});
      }
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  const handleCanPlay = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleError = (e: any) => {
    // Log any events, but do not clear elements to maintain continuous streams
    console.warn("Video stream status notification:", e);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  };

  const cyclePosition = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVideoPosition((prev) => {
      if (prev === "right") return "center";
      if (prev === "center") return "left";
      return "right";
    });
  };

  // Maps alignment string to object-position style classes
  const getPositionClass = () => {
    if (videoPosition === "left") return "object-left";
    if (videoPosition === "right") return "object-right";
    return "object-center";
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden select-none" style={{ zIndex: 0 }}>
      {/* Immersive subtle gradients to frame the video beautifully while keeping text highly legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40" style={{ zIndex: 10 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-[#020617]/80" style={{ zIndex: 10 }} />
      <div className="absolute inset-0 bg-[#020617]/10" style={{ zIndex: 10 }} />

      {/* Futuristic Grid and Neon Glow Fallback Background (always active as underlying ambiance at zIndex 1) */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" style={{ zIndex: 1 }} />
      
      {/* Glowing Neon Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ zIndex: 1 }} />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[150px] animate-pulse-slow" style={{ zIndex: 1, animationDelay: "2s" }} />

      <video
        ref={videoRef}
        src="/intro.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${getPositionClass()} opacity-100`}
        style={{ zIndex: 5 }}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={handleCanPlay}
        onCanPlayThrough={handleCanPlay}
        onLoadedData={handleCanPlay}
        onLoadedMetadata={handleCanPlay}
        onPlaying={handleCanPlay}
        onError={handleError}
        preload="auto"
      />

      {/* Control Panel in the Bottom Right */}
      {videoLoaded && (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-auto flex items-center gap-3">
          
          {/* Alignment Selector Controls */}
          <button
            onClick={cyclePosition}
            className="flex items-center gap-2 px-3 py-3 h-14 rounded-full border border-neon-blue/20 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            title={`Cycle Video Alignment (Current: ${videoPosition})`}
          >
            {videoPosition === "right" && <AlignRight className="w-5 h-5 text-neon-blue" />}
            {videoPosition === "center" && <AlignCenter className="w-5 h-5 text-neon-blue" />}
            {videoPosition === "left" && <AlignLeft className="w-5 h-5 text-neon-blue" />}
            <span className="text-[10px] font-mono font-bold uppercase pr-2 tracking-wider hidden sm:inline">
              Focus: {videoPosition}
            </span>
          </button>

          {/* Floating Audio Toggle Controller */}
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-14 h-14 rounded-full border border-neon-blue/30 bg-slate-950/85 hover:bg-slate-900 text-white shadow-[0_0_20px_rgba(0,240,255,0.25)] backdrop-blur-md hover:border-neon-blue/80 hover:text-neon-blue hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            aria-label={isMuted ? "Unmute cinematic audio" : "Mute audio"}
            title={isMuted ? "Unmute Background Audio" : "Mute Background Audio"}
          >
            {isMuted ? (
              <div className="relative flex items-center justify-center">
                <VolumeX className="w-5 h-5 text-slate-400 group-hover:text-neon-blue transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              </div>
            ) : (
              <div className="relative flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-neon-blue animate-[bounce_1s_infinite]" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            )}
          </button>
        </div>
      )}

      {/* Elegant Vector / Particle Grid Backup in case Video is not present or loaded */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ zIndex: 2 }}>
          {/* Holographic rings */}
          <div className="relative w-full h-full max-w-4xl max-h-4xl aspect-square opacity-20 flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full border border-neon-blue/30 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-neon-purple/40 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[40%] h-[40%] rounded-full border border-neon-orange/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_#00f0ff]" />
          </div>
        </div>
      )}
    </div>
  );
}
