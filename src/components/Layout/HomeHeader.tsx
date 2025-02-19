import {
  Box,
  Burger,
  Button,
  Container,
  ContainerProps,
  Group,
  Image,
} from "@mantine/core";
import { MouseEventHandler } from "react";
import classes from "./HomeHeader.module.css";
import cx from "clsx";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "@mantine/hooks";

export interface TopNavigationProps extends ContainerProps {
  /** Table of Contents Button Click */
  tocIsOpen?: boolean;
  /** Table of Contents Button Click */
  tocClick?: MouseEventHandler<HTMLButtonElement>;
  /** Controls header appearance */
  variant?: "default" | "transparent" | "dark";
  /** User is Logged*/
  isLogged?: boolean;
}

export const LINKS = [
  { label: "About", url: "#" },
  { label: "Research", url: "#Research" },
  { label: "Publications", url: "#Publications" },
  { label: "3D Art", url: "#Art3D" },
];

const HomeHeader = ({
  tocIsOpen,
  tocClick,
  variant,
  ...props
}: TopNavigationProps) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 48em)");
  return (
    <Container
      id="TopNavigation"
      className={classes.root}
      size="lg"
      h={"60px"}
      pos={"relative"}
      variant={variant}
      {...props}
    >
      <Group justify="center" h="100%">
        <Group justify="left" align="center">
          <Burger
            className={classes.tocButton}
            opened={tocIsOpen}
            onClick={tocClick}
            hiddenFrom="sm"
            color={variant === "transparent" ? "white" : "black"}
            size="sm"
          />
          <Group
            justify="left"
            align="stretch"
            gap={0}
            pos="relative"
            className={classes["hide-sm"]}
          >
            {matches &&
              LINKS.map((item) => {
                return (
                  <Button
                    component={HashLink}
                    variant="subtle"
                    classNames={{
                      root: cx(classes.linkButton, {
                        [classes.transparent]: variant === "transparent",
                      }),
                    }}
                    to={item.url}
                    key={item.label}
                  >
                    {item.label}
                  </Button>
                );
              })}
          </Group>
        </Group>
      </Group>
    </Container>
  );
};

export default HomeHeader;
