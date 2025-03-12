import NavBar from "../../../components/navbar";
import AboutMe from "../../../components/aboutme";
import Footer from "../../../components/footer";
import Projects from "../../../components/projects";

export default function ProjectPage() {
  return (
    <div className="pt-16 min-h-screen">
      <NavBar />
      <Projects />
      <Footer />
    </div>
  );
}
