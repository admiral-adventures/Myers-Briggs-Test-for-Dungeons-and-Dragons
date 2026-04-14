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

        <Text>
          This test is designed as a {" "}
            <Text as="span" fontWeight="semibold">
              36-scene D&D adventure campaign
            </Text>{" "}, following your party from low-level goblin 
          raids to legendary battles against dragons, liches, and the great villains of Faerûn.
        </Text>
      
      <Flex
        direction="column"
        gap={2}
      >
        <UnorderedList spacing={2}>
          <ListItem>
           {" "}
            <Text as="span" fontWeight="semibold">
            Answer by instinct.
            </Text>{" "} . Choose the response that feels most natural in the moment, even if it is not the “best” tactical choice.
          </ListItem>
          <ListItem>
           {" "}
            <Text as="span" fontWeight="semibold">
            Step into the viewpoint given in the question.
            </Text>{" "} . Some scenes place you as the party’s strategist, while others ask what you would do in Lyra’s, Brom’s, Maeve’s, or 
            Theron’s position. Answer from that stated point of view only.
          </ListItem>
          <ListItem>
           {" "}
            <Text as="span" fontWeight="semibold">
            Do not build a character in advance.
            </Text>{" "} . There is no need to decide race, class, alignment, or backstory before starting. Let your choices emerge naturally through the adventure.
          </ListItem>
          <ListItem>
           {" "}
            <Text as="span" fontWeight="semibold">
            Ignore table politics and other players.
            </Text>{" "} . Answer as if the scene is unfolding around you personally, without worrying about what would make the “best party decision.”
          </ListItem>
          <ListItem>
           {" "}
            <Text as="span" fontWeight="semibold">
            Do not try to predict the personality type.
            </Text>{" "} . The most accurate results come from fast, honest choices rather than pattern-hunting.
          </ListItem>
        </UnorderedList>

        <Text>
          To get the most accurate result, approach each question as if you are {" "}
            <Text as="span" fontWeight="semibold">
            inside the scene in that exact moment.
            </Text>{" "} 
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
