import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { Publication } from "./PublicationsData";
import classes from "./PublicationCard.module.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const matches = useMediaQuery("(min-width: 48em)");
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap={matches ? "nowrap" : undefined} gap={0}>
        <Image
          src={
            publication?.img ||
            "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          }
          h={222}
          w={matches ? 260 : "100%"}
          miw={260}
          style={{ flexGrow: matches ? undefined : 1 }}
        />
        <Stack px="md" gap={0} py="sm" className={classes.content}>
          <Badge
            variant="gradient"
            gradient={{ from: "blue", to: "purple" }}
            className={classes.badge}
          >
            {publication.publicationType}
          </Badge>
          <Title order={4} className={classes.title}>
            {publication.title}
          </Title>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs" mb="md">
            {`${publication.journal}${
              publication.volume !== "" ? `, Volume ${publication.volume}` : ""
            }${publication.year !== "" ? `, ${publication.year}` : ""}`}
          </Text>
          <Text lineClamp={matches ? 2 : 5} mb="sm">
            {publication.abstract}
          </Text>
          {publication?.keywords && (
            <Text lineClamp={1} mb="sm" size="sm">
              {`Keywords: ${publication.keywords}`}
            </Text>
          )}
          <Group wrap="nowrap" gap="xs" justify="end">
            {publication?.github && (
              <Tooltip label="GitHub repository" openDelay={500} withArrow>
                <ActionIcon
                  onClick={() => window.open(publication.github)}
                  color="black"
                >
                  <FaGithub size="1.3em" />
                </ActionIcon>
              </Tooltip>
            )}
            <Button
              variant="subtle"
              color="blue"
              radius="xl"
              rightSection={<FaExternalLinkAlt />}
              onClick={() => window.open(publication.url)}
            >
              Read the article
            </Button>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};

export default PublicationCard;
