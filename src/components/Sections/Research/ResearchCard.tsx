import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import {
  ResearchData,
  ResearchPartner,
  researchPartners,
} from "./ResearchData";
import classes from "./ResearchCard.module.css";
// import { useMediaQuery } from "@mantine/hooks";
import { memo, useMemo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import ResearchCardModal from "./ResearchCardModal";

interface ResearchCardProps {
  research: ResearchData;
}

const ResearchCard = ({ research }: ResearchCardProps) => {
  const [opened, { close, open }] = useDisclosure(false);
  //   const matches = useMediaQuery("(min-width: 48em)");

  const partners = useMemo(() => {
    return research.partners.reduce<ResearchPartner[]>((obj, part_id) => {
      const partner = researchPartners.find((p) => p.id === part_id);
      if (partner) {
        obj.push(partner);
      }
      return obj;
    }, []);
  }, [research.partners]);

  const img = useMemo(
    () => <Image src={research?.img} height={180} />,
    [research?.img]
  );

  const partnersImgs = useMemo(() => {
    return partners.map((partner) => (
      <Image
        src={partner?.logo}
        h={80}
        maw={100}
        key={partner.id}
        fit="contain"
      />
    ));
  }, [partners]);

  return (
    <>
      <Card
        withBorder
        radius="md"
        className={classes.card}
        component="a"
        onClick={open}
      >
        <Card.Section>{img}</Card.Section>
        <Badge
          className={classes.badge}
          variant="gradient"
          gradient={{ from: "blue", to: "purple" }}
        >
          {research.topic}
        </Badge>
        <Card.Section inheritPadding mt="md">
          <Text className={classes.title} fw={500} lineClamp={2}>
            {research.title}
          </Text>

          <Text fz="sm" c="dimmed" lineClamp={8}>
            {research.description}
          </Text>
        </Card.Section>
        <Card.Section py="md" className={classes.footer}>
          <Group justify="center" gap={"0 10"}>
            {partnersImgs}
          </Group>
          {research.url && (
            <Center>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(research.url, "_blank");
                }}
                rightSection={<FaExternalLinkAlt />}
                variant="gradient"
              >
                Visit Webpage
              </Button>
            </Center>
          )}
        </Card.Section>
      </Card>
      <ResearchCardModal
        opened={opened}
        close={close}
        research={research}
        partners={partners}
      />
    </>
  );
};

export default memo(ResearchCard);
