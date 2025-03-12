import NavBar from "../../components/navbar";
import AboutMe from "../../components/aboutme";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <div className="pt-16 min-h-screen">
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  );
}
