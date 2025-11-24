import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import FeaturedProjects from "@/components/projects";

export default function Home() {
    return(
        <main className="scroll-smooth">
            <Navbar/>
            <Hero/>
            <FeaturedProjects/>
            <Contact/>
        </main>
    )
}