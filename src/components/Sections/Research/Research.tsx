import {
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// import { FaRegNewspaper } from "react-icons/fa6";

import { useMemo } from "react";
import { TbWorldSearch } from "react-icons/tb";
import { researchData } from "./ResearchData";
import ResearchCard from "./ResearchCard";

const Research = () => {
  const matches = useMediaQuery("(min-width: 48em)");

  const sortedResearchs = useMemo(() => {
    //   sort by publication.year and publication.firstAuthor
    // with the most recent publication first and the first author = true first

    return researchData.sort((a, b) => {
      const a_year = +a.startDate.split("/")[1];
      const b_year = +b.startDate.split("/")[1];
      if (a_year < b_year) return 1;
      if (a_year > b_year) return -1;
      return 0;
    });
  }, []);

  return (
    <Container
      id="Research"
      py={!matches ? "2rem" : "6rem"}
      style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
      fluid
    >
      <Container size="lg">
        <Stack>
          <Group>
            <TbWorldSearch size={32} />
            <Title order={1}>Research</Title>
          </Group>
          <Divider mb="md" />
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
          >
            {sortedResearchs.map((research, index) => {
              return <ResearchCard research={research} key={index} />;
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Container>
  );
};

export default Research;
