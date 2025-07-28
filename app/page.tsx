import About from "@/components/about/page";
import Contact from "@/components/contact/page";
import Main from "@/components/main/page";
import Navbar from "@/components/navbar/page";
import Showcase from "@/components/showcase/page";

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Showcase/>
      <Contact/>
    </div>
  );
}
