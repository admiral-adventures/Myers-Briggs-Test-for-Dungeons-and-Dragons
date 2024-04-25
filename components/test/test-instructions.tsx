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
      <Heading>Instructions</Heading>
      <Flex
        direction="column"
        gap={2}
      >
        <Text>
          Completing the test should only take 15 minutes. Here are several
          hints about how to complete this test:
        </Text>
        <UnorderedList spacing={2}>
          <ListItem>
            These questions are about how you would approach situations if you were an actual character in a typical D&D game.
          </ListItem>
          <ListItem>
            Answer the questions in a way that would feel natural for you - not the way you wish to be perceived. 
          </ListItem>
          <ListItem>
            Do not assume a race, background, class, or subclass when answering any of the questions.
          </ListItem>          
          <ListItem>
            When answering questions, do not factor in how your decisions may affect the other players you are playing with.
          </ListItem>
        </UnorderedList>
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
