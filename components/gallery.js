"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/gallery/deep-solv.png",
  "/gallery/iitm-cert-2022.png",
  "/gallery/iitmdegree.png",
  "/gallery/indianarmy.png",
  "/gallery/nptel.png",
  "/gallery/pentest.png",
  "/gallery/techdrill.png",
  "/gallery/devfest.png",
  "/gallery/dkm.jpg",
  "/gallery/guvi1.png",
  "/gallery/guvi2.png",
  "/gallery/guvi3.png",
  "/gallery/BitGuard 2.0 - Certificate of Achievement.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClient, setIsClient] = useState(false); // Prevent hydration mismatch

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
