import { Hero } from "./components/sections/Hero";
import { AntiPositioning } from "./components/sections/AntiPositioning";
import { Technology } from "./components/sections/Technology";
import { Journey } from "./components/sections/Journey";
import { ScienceConnection } from "./components/sections/ScienceConnection";
import { AboutUrania } from "./components/sections/AboutUrania";
import { EcosystemPrograms } from "./components/sections/EcosystemPrograms";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <>
      <main>
        <Hero />
        <AntiPositioning />
        <Technology />
        <Journey />
        <ScienceConnection />
        <AboutUrania />
        <EcosystemPrograms />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
