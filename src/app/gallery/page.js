"use client";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Gallery from "../../../components/gallery";

export default function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen">
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  );
}
