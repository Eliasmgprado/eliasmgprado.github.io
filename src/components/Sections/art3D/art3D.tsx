import {
  AspectRatio,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// import { FaRegNewspaper } from "react-icons/fa6";
// import { publicationsData } from "./PublicationsData";
// import PublicationCard from "./PublicationCard";
// import { useMemo } from "react";
import { BsBadge3dFill } from "react-icons/bs";

const ART_LIST = [
  { label: "VMS", src: "videos/art3d/vms.mp4", type: "video" },
  {
    label: "VMS Infographic",
    src: "videos/art3d/vms_infografico_EP.jpg",
    type: "img",
  },
  { label: "Pillow", src: "videos/art3d/Pillow_Flow_FInal.mp4", type: "video" },
  {
    label: "Folds",
    src: "videos/art3d/Chamaleon_0001-1841.mp4",
    type: "video",
  },
  {
    label: "Fold Outcrop",
    src: "videos/art3d/fold_outcrop_0001-0810.mp4",
    type: "video",
  },
  {
    label: "Minerals",
    src: "videos/art3d/minerals_cinematic.mp4",
    type: "video",
  },
  {
    label: "Lizardite",
    src: "videos/art3d/Lizardite_0001-0740.mp4",
    type: "video",
  },
  {
    label: "Phyllosilicates",
    src: "videos/art3d/phyllo_sheet_0001-0740.mp4",
    type: "video",
  },
  {
    label: "Piryte",
    src: "videos/art3d/pyrite_grow0001-0500.mp4",
    type: "video",
  },
  {
    label: "Subduction",
    src: "videos/art3d/subduction0001-0600.mp4",
    type: "video",
  },
  {
    label: "Tension Gashes",
    src: "videos/art3d/tension_gashes_0001-0250.mp4",
    type: "video",
  },
  {
    label: "Thrust Fault",
    src: "videos/art3d/thrust_fault_final_0001-1095.mp4",
  },
];

const Art3D = () => {
  const matches = useMediaQuery("(min-width: 48em)");

  // const sortedPublications = useMemo(() => {
  //   //   sort by publication.year and publication.firstAuthor
  //   // with the most recent publication first and the first author = true first

  //   return publicationsData.sort((a, b) => {
  //     if (a.year < b.year) return 1;
  //     if (a.year > b.year) return -1;
  //     if (a.firstAuthor && !b.firstAuthor) return -1;
  //     if (!a.firstAuthor && b.firstAuthor) return 1;
  //     return 0;
  //   });
  // }, []);

  return (
    <Container
      id="Art3D"
      py={!matches ? "2rem" : "8rem"}
      style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
      fluid
    >
      <Container size="lg">
        <Stack>
          <Group>
            <BsBadge3dFill size={32} />
            <Title order={1}>3D Art</Title>
          </Group>
          <Divider mb="md" />
          {/* {sortedPublications.map((publication, index) => {
            return <PublicationCard publication={publication} key={index} />;
          })} */}
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
          >
            {ART_LIST.map((art, index) => {
              if (art.type === "img") {
                return (
                  <AspectRatio ratio={1} key={index}>
                    <img
                      src={art.src}
                      alt={art.label}
                      onClick={() => window.open(art.src, "_blank")}
                      style={{ cursor: "pointer" }}
                    />
                  </AspectRatio>
                );
              }
              return (
                <AspectRatio ratio={1} key={index}>
                  <video autoPlay loop controls muted>
                    <source src={art.src} type="video/mp4" />
                  </video>
                  {/* <iframe
                    src={art.src}
                    title={art.label}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}
                </AspectRatio>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Container>
  );
};

export default Art3D;
