import { MouseEventHandler } from "react";
import { BackgroundImage, Container } from "@mantine/core";
import classes from "./TopNavigation.module.css";

import HomeHeader from "./HomeHeader";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { useMediaQuery } from "@mantine/hooks";
import About from "../Sections/About";

export interface TopNavigationProps {
  /** Table of Contents Button Click */
  tocClick?: MouseEventHandler<HTMLButtonElement>;
}

const TopNavigation = ({ tocClick }: TopNavigationProps) => {
  // const navigate = useNavigate();
  // const matches = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <BackgroundImage src="img/about_bg.jpeg">
        <Container fluid py="1em" className={classes.container} id="Index">
          <HomeHeader tocClick={tocClick} variant={"transparent"} />
          <Container size="lg" mih={"100vh"} mt={"-76px"} pt={"76px"}>
            <About />
          </Container>
        </Container>
      </BackgroundImage>
    </>
  );
};

export default TopNavigation;
