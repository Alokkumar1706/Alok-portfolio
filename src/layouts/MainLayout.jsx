import useLenis from "../hooks/useLenis";
import ScrollProgress from "../components/ScrollProgress";
const MainLayout = () => {

  useLenis();

  return (
    <>
      {/* Your Sections */}
    
  <ScrollProgress />

  <Navbar />

  <Hero />

  ...

    </>
  );
};