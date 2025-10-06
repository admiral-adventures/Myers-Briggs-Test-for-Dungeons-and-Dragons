import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

interface TestInstructionsProps {
  onCloseTestInstructions: () => void;
}

export default function TestInstructions(props: TestInstructionsProps) {
  return (
    <Flex
      h="full"
      px={4}
      direction="column"
      gap={8}
    >
      <Heading>Guidelines</Heading>

      <Flex
        direction="column"
        gap={2}
      >
        <UnorderedList spacing={2}>
          <ListItem>
            Answer as if you were an actual D&D character in a typical game scenario.
          </ListItem>
          <ListItem>
            Respond honestly — choose what feels natural to you,{" "}
            <Text as="span" fontWeight="semibold">
              not
            </Text>{" "}
            how you wish to be perceived.
          </ListItem>
          <ListItem>
            Do{" "}
            <Text as="span" fontWeight="semibold">
              not
            </Text>{" "}
            assume a specific race, background, class, or subclass.
          </ListItem>
          <ListItem>
            Do{" "}
            <Text as="span" fontWeight="semibold">
              not
            </Text>{" "}
            consider how your choices might affect other players — answer as if you’re acting alone.
          </ListItem>
        </UnorderedList>

        <Text>
          If your answers result in a perfect 50/50 split on any of the four
          personality dimensions (e.g., Introversion vs. Extroversion), the
          system will randomly select one option to display. To view the
          alternate result, click{" "}
          <Text as="span" fontWeight="semibold">
            “Test Result History”
          </Text>{" "}
          until it appears.
        </Text>
      </Flex>

      <Button
        w="min-content"
        colorScheme="primary"
        alignSelf="flex-end"
        onClick={props.onCloseTestInstructions}
      >
        Roll Initiative
      </Button>
    </Flex>
  );
}
