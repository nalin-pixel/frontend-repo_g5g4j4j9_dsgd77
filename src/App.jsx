import Hero from "./components/Hero";
import Bio from "./components/Bio";
import VideoGrid from "./components/VideoGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Bio />
      <VideoGrid />
      <Footer />
    </div>
  );
}

export default App;
