import {
  BackgroundImage,
  Badge,
  Center,
  Group,
  Modal,
  Stack,
  Title,
  Text,
  Image,
} from "@mantine/core";
import { ResearchData, ResearchPartner } from "./ResearchData";
import classes from "./ResearchCard.module.css";
import { useMemo } from "react";

interface ResearchCardModalProps {
  opened: boolean;
  close: () => void;
  research: ResearchData;
  partners: ResearchPartner[];
}

const ResearchCardModal = ({
  opened,
  close,
  research,
  partners,
}: ResearchCardModalProps) => {
  const partnersImgs = useMemo(() => {
    return partners.map((partner) => (
      <Image
        src={partner?.logo}
        h={80}
        maw={100}
        key={partner.id}
        fit="contain"
        onClick={() => window.open(partner.url, "_blank")}
        style={{ cursor: "pointer" }}
      />
    ));
  }, [partners]);

  return (
    <Modal.Root opened={opened} onClose={close} size="xl" centered>
      <Modal.Overlay backgroundOpacity={0.1} blur={3} />
      <Modal.Content>
        <BackgroundImage src={research.img} component={Modal.Header} h={200}>
          <Badge
            className={classes.badge_modal}
            variant="gradient"
            gradient={{ from: "blue", to: "purple" }}
          >
            {research.topic}
          </Badge>
          <Group justify="end" align="top">
            <Modal.CloseButton c="black" variant="filled" />
          </Group>
        </BackgroundImage>
        <Modal.Body>
          <Center mt="md">
            <Stack>
              <Title tt="capitalize" order={3}>
                {research.title}
              </Title>
              <Text style={{ textAlign: "justify" }}>
                {research.description}
              </Text>
              <Group justify="center">{partnersImgs}</Group>
            </Stack>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResearchCardModal;
