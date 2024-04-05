import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={2}
      w="100%"
      h="full"
      bg="black"
      color="white"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        This personality test is designed to support leadership development and team training. Visit us at {" "}
        <Link
          href="https://www.admiraladventures.games/"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            AdmiralAdventures.com
          </Button>
        </Link>
      </Text>
      <Text>
        🔨 Made by{" "}
        <Link
          href="https://startplaying.games/gm/admiral-adventures"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            The Admiral
          </Button>
        </Link>
      </Text>
    </Flex>
  );
}
