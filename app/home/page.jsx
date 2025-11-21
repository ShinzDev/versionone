import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import FeaturedProjects from "@/components/projects";

export default function Home() {
    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <FeaturedProjects/>
        </main>
    )
}