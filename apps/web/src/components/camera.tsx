"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { CameraIcon, RefreshCw } from "lucide-react";

interface CameraProps {
  onCapture: (element: HTMLCanvasElement) => void;
}

export function Camera({ onCapture }: CameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
          setIsCameraReady(true);
          setError(null);
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError(
          "Could not access camera. Please make sure you have granted camera permissions."
        );
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setCapturedImage(canvas.toDataURL("image/png"));
        onCapture(canvas);
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  return (
    <div className="flex flex-col items-center">
      {error && (
        <div className="bg-destructive/20 text-destructive-foreground p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="relative w-full aspect-video bg-black rounded-md overflow-hidden">
        {!capturedImage ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover -scale-x-100"
          />
        ) : (
          <img
            src={capturedImage || "/placeholder.svg"}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      <div className="mt-4 flex justify-center">
        {!capturedImage ? (
          <Button
            onClick={captureImage}
            disabled={!isCameraReady}
            className="flex items-center"
          >
            <CameraIcon className="mr-2 h-4 w-4" />
            Take Photo
          </Button>
        ) : (
          <Button
            onClick={retakePhoto}
            variant="outline"
            className="flex items-center"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Retake
          </Button>
        )}
      </div>
    </div>
  );
}
