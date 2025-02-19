import {
  ActionIcon,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useCallback, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/eliasmgprado/",
    icon: FaLinkedinIn,
  },
  {
    label: "ResearchGate",
    url: "https://www.researchgate.net/profile/Elias-Prado-2",
    icon: SiResearchgate,
  },
  {
    label: "Github",
    url: "https://github.com/eliasmgprado",
    icon: FaGithub,
  },
];

const About = () => {
  const matches = useMediaQuery("(min-width: 48em)");
  const [showAll, setShowAll] = useState<boolean>(false);
  const toggleShowAll = useCallback(() => setShowAll((state) => !state), []);

  return (
    <Container
      id="About"
      py={!matches ? "2rem" : "8rem"}
      style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
      fluid
    >
      <Container size="lg" px={matches ? undefined : 0}>
        <Grid gutter={{ base: 0, sm: "sm" }}>
          <Grid.Col span={{ base: 12, sm: 6 }} p="xl">
            <Center h="100%" w="100%">
              <Image
                src="img/PDAC22_mod.jpg"
                radius="100%"
                style={{ outline: "10px solid #f1f3f5", userSelect: "none" }}
              />
            </Center>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 6 }}
            style={{
              position: "relative",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            px="md"
            // style={{ alignSelf: "center" }}
            // px={!matches ? 0 : "md"}
            // pt={!matches ? "md" : 0}
          >
            <Title order={1} fw={700} mb={0} c="gray.1">
              Elias M. G. Prado
            </Title>
            <Text size="md" c="gray.2">
              Ph.D. in Geology
            </Text>
            <Group my="md">
              {SOCIAL_LINKS.map((link, index) => (
                <ActionIcon
                  variant="filled"
                  color="cyan"
                  aria-label={link.label}
                  onClick={() => window.open(link.url)}
                  key={index}
                >
                  <link.icon style={{ width: "70%", height: "70%" }} />
                </ActionIcon>
              ))}
            </Group>
            <Text
              size="md"
              mb="sm"
              style={{ textAlign: "justify" }}
              c="gray.1"
              lineClamp={matches || showAll ? undefined : 8}
            >
              {`I'm Elias Martins Guerra Prado, a geologist and researcher at the
              Center for Applied Geosciences (CGA) of the Geological Survey of
              Brazil (SGB/CPRM). I hold a Ph.D. in geosciences from the University
              of Campinas (Unicamp) where my research focused on applying
              artificial intelligence techniques to mineral exploration. My
              expertise lies in using machine learning, deep learning and big
              data analytics to develop innovative solutions for geoscience
              challenges. I have published papers in high-impact journals on
              topics such as mineral prospectivity mapping, ore grade estimation
              from hyperspectral data, and integrated assessments of geothermal
              resources. Prior to my current role, I worked on regional
              geological mapping projects in the state of Rondônia. I am
              passionate about leveraging cutting-edge computational techniques
              to advance our understanding of the Earth and uncover new insights
              from geoscientific data. At the CGA, I continue to push the
              boundaries of what is possible by developing AI-powered tools and
              methodologies for a wide range of geoscience applications.`}
            </Text>

            {!matches && (
              <Center>
                <ActionIcon
                  radius="100%"
                  variant="transparent"
                  color="gray"
                  onClick={toggleShowAll}
                >
                  {!showAll && <FaChevronDown />}
                  {showAll && <FaChevronUp />}
                </ActionIcon>
              </Center>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default About;
