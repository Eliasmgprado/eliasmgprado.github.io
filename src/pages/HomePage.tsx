import TopNavigation from "../components/Layout/TopNavigation";
import AppFooter from "../components/Layout/AppFooter";
import { useShellCtx } from "../components/Layout/Shell";
import Publications from "../components/Sections/Publications/Publications";
import Research from "../components/Sections/Research/Research";
import Art3D from "../components/Sections/art3D/art3D";
import { useScrollIntoView } from "@mantine/hooks";

const HomePage = () => {
  const { tocToggleHandler } = useShellCtx();
  // const matches = useMediaQuery("(min-width: 48em)");
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <>
      <TopNavigation
        tocClick={tocToggleHandler}
        scrollIntoView={scrollIntoView}
      />
      <Research scrollViewRef={targetRef} />
      <Publications />
      <Art3D />
      <AppFooter />
    </>
  );
};

export default HomePage;
