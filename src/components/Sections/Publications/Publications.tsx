import { Container, Divider, Group, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaRegNewspaper } from "react-icons/fa6";
import { publicationsData } from "./PublicationsData";
import PublicationCard from "./PublicationCard";
import { useMemo } from "react";

const Publications = () => {
  const matches = useMediaQuery("(min-width: 48em)");

  const sortedPublications = useMemo(() => {
    //   sort by publication.year and publication.firstAuthor
    // with the most recent publication first and the first author = true first

    return publicationsData.sort((a, b) => {
      if (a.year < b.year) return 1;
      if (a.year > b.year) return -1;
      if (a.firstAuthor && !b.firstAuthor) return -1;
      if (!a.firstAuthor && b.firstAuthor) return 1;
      return 0;
    });
  }, []);

  return (
    <Container
      id="Publications"
      py={!matches ? "2rem" : "8rem"}
      style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
      // bg="dark.2"
      fluid
    >
      <Container size="lg">
        <Stack>
          <Group>
            <FaRegNewspaper size={32} />
            <Title order={1}>Publications</Title>
          </Group>
          <Divider mb="md" />
          {sortedPublications.map((publication, index) => {
            return <PublicationCard publication={publication} key={index} />;
          })}
        </Stack>
      </Container>
    </Container>
  );
};

export default Publications;
