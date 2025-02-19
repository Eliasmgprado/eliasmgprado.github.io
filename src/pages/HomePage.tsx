import TopNavigation from "../components/Layout/TopNavigation";
import AppFooter from "../components/Layout/AppFooter";
import { useShellCtx } from "../components/Layout/Shell";
import Publications from "../components/Sections/Publications/Publications";
import Research from "../components/Sections/Research/Research";
import Art3D from "../components/Sections/art3D/art3D";

const HomePage = () => {
  const { tocToggleHandler } = useShellCtx();
  // const matches = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <TopNavigation tocClick={tocToggleHandler} />
      <Research />
      <Publications />
      <Art3D />
      <AppFooter />
    </>
  );
};

export default HomePage;
