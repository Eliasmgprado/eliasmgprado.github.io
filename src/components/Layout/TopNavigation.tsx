import { MouseEventHandler } from "react";
import { ActionIcon, BackgroundImage, Center, Container } from "@mantine/core";
import classes from "./TopNavigation.module.css";

import HomeHeader from "./HomeHeader";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { useMediaQuery } from "@mantine/hooks";
import About from "../Sections/About";
import { FaChevronDown } from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";

export interface TopNavigationProps {
  /** Table of Contents Button Click */
  tocClick?: MouseEventHandler<HTMLButtonElement>;

  scrollIntoView: (params: any) => void;
}

const TopNavigation = ({ tocClick, scrollIntoView }: TopNavigationProps) => {
  // const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 48em)");
  console.log(matches);
  return (
    <>
      <BackgroundImage src="img/about_bg.webp">
        <Container fluid py="1em" className={classes.container} id="Index">
          <HomeHeader tocClick={tocClick} variant={"transparent"} />
          <Container size="lg" mih={"100vh"} mt={"-76px"} pt={"76px"}>
            <About />
            {matches && (
              <Center>
                <ActionIcon
                  onClick={() => {
                    scrollIntoView({
                      alignment: "start",
                    });
                  }}
                  radius="xl"
                  variant="filled"
                  style={{
                    position: "absolute",
                    bottom: "3em",
                  }}
                >
                  <FaChevronDown />
                </ActionIcon>
              </Center>
            )}
          </Container>
        </Container>
      </BackgroundImage>
    </>
  );
};

export default TopNavigation;
