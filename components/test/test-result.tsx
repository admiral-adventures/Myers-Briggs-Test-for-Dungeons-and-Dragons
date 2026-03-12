import Image from "next/image";
import { useState } from "react";
import {
  Flex,
  Heading,
  Highlight,
  Text,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  UnorderedList,
  ListItem,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  TestResult as ITestResult,
  PersonalityClassGroup,
  getPersonalityClassGroupByTestScores,
  getPersonalityClassGroupByType,
} from "../../lib/personality-test";

interface TestResultProps {
  testResult: ITestResult;
}

function MailtoLinkForTestResult(testResult:ITestResult, personalityClassGroup:PersonalityClassGroup) {
  const subjectText = 'My Myers-Briggs D&D Character Type';
  const bodyText = [
    `My character type is "${personalityClassGroup.type} - ${personalityClassGroup.name}"`,
    '',
    JSON.stringify(testResult),
  ].join('\n');
  const recipientEmail = 'brody.berkhout@admiraladventures.com';// 'Brody Berkhout <brody.berkhout@admiraladventures.com>';
  const uri = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  return uri;
}

export default function TestResult(props: TestResultProps) {
  const initialGroup = getPersonalityClassGroupByTestScores(
    props.testResult.testScores
  );
  
  const [selectedType, setSelectedType] = useState(initialGroup.type);
  
  const personalityClassGroup =
    selectedType === initialGroup.type
      ? initialGroup
      : getPersonalityClassGroupByType(selectedType);

  return (
    <Flex
      my={4}
      w={{
        base: "full",
        lg: "50%",
      }}
      h="full"
      px={8}
      gap={4}
      alignItems="center"
      direction="column"
    >
      <Heading
        id={personalityClassGroup.type}
        as="h1"
        textAlign="center"
      >
        <Highlight
          query={personalityClassGroup.type}
          styles={{ color: "primary.500" }}
        >
          {`${personalityClassGroup.type} - ${personalityClassGroup.name}`}
        </Highlight>
      </Heading>
      <Text
        fontSize="lg"
        fontWeight="bold"
        textAlign="center"
      >
        {personalityClassGroup.nameDescription}
      </Text>
      <Image
        alt="illustration"
        src={`/images/mbti/${personalityClassGroup.type.toLowerCase()}.png`}
        width={200}
        height={200}
      />
      <Heading
        scrollMarginTop={8}
        id="description"
        as="h1"
        my={8}
        fontSize="lg"
        textAlign="center"
      >
        {personalityClassGroup.epithet}
      </Heading>
      {personalityClassGroup.description
        .split(/\.\n+/g)
        .map((description) =>
          description.endsWith(".") ? description : `${description}.`
        )
        .map((description, index) => (
          <Text
            key={index}
            textAlign="justify"
          >
            {`${description}`}
          </Text>
        ))}
      <Heading
        scrollMarginTop={8}
        id="jungian-functional-preference-ordering"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Race and Class Options
      </Heading>
      <Table>
        <Tbody>
          <Tr>
            <Th>Fighter Option</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.dominant}
            </Td>
          </Tr>
          <Tr>
            <Th>Cleric Option</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.auxiliary}
            </Td>
          </Tr>
          <Tr>
            <Th>Rogue Option</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.tertiary}
            </Td>
          </Tr>
          <Tr>
            <Th>Wizard Option</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.inferior}
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading
        scrollMarginTop={8}
        my={6}
        as="h2"
        size="md"
        textAlign="center"
      >
        Explore Other Character Types
    </Heading>
    
    <SimpleGrid
      columns={4}
      spacing={3}
      w="full"
      maxW="500px"
      justifyItems="center"
    >
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESFP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Entertainer
        <br />
        ESFP
      </Text>
    </Button>
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESTP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Entrepreneur
        <br />
        ESTP
      </Text>
    </Button>
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISFP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Adventurer
        <br />
        ISFP
      </Text>
    </Button>
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISTP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Virtuoso
        <br />
        ISTP
      </Text>
    </Button>

    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESFJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Consul
        <br />
        ESFJ
      </Text>
    </Button>
    
    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESTJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Executive
        <br />
        ESTJ
      </Text>
    </Button>
    
    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISFJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Defender
        <br />
        ISFJ
      </Text>
    </Button>
    
    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISTJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Logistician
        <br />
        ISTJ
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENFP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Campaigner
        <br />
        ENFP
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENFJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Protagonist
        <br />
        ENFJ
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("INFP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Mediator
        <br />
        INFP
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("INFJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Advocate
        <br />
        INFJ
      </Text>
    </Button>
    
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("INTP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Logician
        <br />
        INTP
      </Text>
    </Button>
    
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENTP")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Debater
        <br />
        ENTP
      </Text>
    </Button>
    
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENTJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Commander
        <br />
        ENTJ
      </Text>
    </Button>
    
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      whiteSpace="normal"
      onClick={() => setSelectedType("INTJ")}
    >
      <Text fontWeight="bold" textAlign="center" color="black">
        Architect
        <br />
        INTJ
      </Text>
    </Button>
      
    </SimpleGrid>
      <Heading
        scrollMarginTop={8}
        id="general-traits"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        {`${personalityClassGroup.type}s You May Know`}
      </Heading>
      <UnorderedList>
        {personalityClassGroup.generalTraits.map((trait, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {trait}
          </ListItem>
        ))}
      </UnorderedList>
<Heading
  scrollMarginTop={8}
  id="relationship-strengths"
  my={4}
  as="h2"
  size="md"
  textAlign="center"
>
  Character Personality Traits
</Heading>
<UnorderedList w="full">
  {personalityClassGroup.relationshipStrengths.map(
    (relationshipStrength, index) => (
      <ListItem
        my={2}
        key={index}
        textAlign="justify"
      >
        {relationshipStrength}
      </ListItem>
    )
  )}
</UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="relationship-weaknesses"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Flaws
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.relationshipWeaknesses.map(
          (relationshipWeakness, index) => (
            <ListItem
              my={2}
              key={index}
              textAlign="justify"
            >
              {relationshipWeakness}
            </ListItem>
          )
        )}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="success-definition"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Ideals
      </Heading>
      {personalityClassGroup.successDefinition
        .split(/\.\n+/g)
        .map((successDefinition) =>
          successDefinition.endsWith(".")
            ? successDefinition
            : `${successDefinition}.`
        )
        .map((successDefinition, index) => (
          <Text
            key={index}
            textAlign="justify"
          >
            {`${successDefinition}`}
          </Text>
        ))}
      <Heading
        scrollMarginTop={8}
        id="strengths"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Positive Table Behaviors
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.strengths.map((strength, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {strength}
          </ListItem>
        ))}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="special-gifts"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Negative Table Behaviors
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.gifts.map((gift, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {gift}
          </ListItem>
        ))}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="potential-problem-areas"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Download Your Character Sheet
      </Heading>
      {personalityClassGroup.potentialProblemAreas.length === 1 ? (
        personalityClassGroup.potentialProblemAreas[0]
          .split(/\.\n+/g)
          .map((potentialProblemArea) =>
            potentialProblemArea.endsWith(".")
              ? potentialProblemArea
              : `${potentialProblemArea}.`
          )
          .map((potentialProblemArea, index) => (
            <Text
              key={index}
              textAlign="justify"
              alignSelf="start"
            >
              {`${potentialProblemArea}`}
            </Text>
          ))
      ) : (
        <UnorderedList w="full">
          {personalityClassGroup.potentialProblemAreas.map(
            (potentialProblemArea, index) => (
              <ListItem
                my={2}
                key={index}
                textAlign="justify"
              >
                {potentialProblemArea}
              </ListItem>
            )
          )}
        </UnorderedList>
      )}
      <Button
        mt={2} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.open(`https://admiraladventures.com/-pre-gen-characters#${personalityClassGroup.type}`, "_blank")
}
      >
        Download Character Sheet
      </Button>
      <Button
        mt={2} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.location.href = MailtoLinkForTestResult(props.testResult, personalityClassGroup)}
      >
        Email Results
      </Button>
      <Heading
        scrollMarginTop={8}
        id="explanation-of-problems"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        About Admiral Adventures
      </Heading>
      {personalityClassGroup.explanationOfProblems
        .split(/\.\n+/g)
        .map((explanationOfProblem) =>
          explanationOfProblem.endsWith(".")
            ? explanationOfProblem
            : `${explanationOfProblem}.`
        )
        .map((explanationOfProblem, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${explanationOfProblem}`}
          </Text>
        ))}
      <Button
        mt={2} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.open("https://admiraladventures.com", "_blank")}
      >
        Visit Our Website
      </Button>
      <Heading
        scrollMarginTop={8}
        id="solutions"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
      Can&apos;t Find a Group to Play With? Hire a Professional DM!
      </Heading>
      {personalityClassGroup.solutions
        .split(/\.\n+/g)
        .map((solution) => (solution.endsWith(".") ? solution : `${solution}.`))
        .map((solution, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${solution}`}
          </Text>
        ))}
      <Button
        mt={2} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.open("https://startplaying.games/gm/admiral-adventures", "_blank")}
      >
        Book a Session
      </Button>
      <Heading
        scrollMarginTop={8}
        id="living-happily-tips"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
       My Resume 
      </Heading>
      {personalityClassGroup.livingHappilyTips
        .split(/\.\n+/g)
        .map((tips) => (tips.endsWith(".") ? tips : `${tips}.`))
        .map((tips, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${tips}`}
          </Text>
        ))}
            <Button
        mt={2} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.open("https://www.linkedin.com/in/brody-berkhout/", "_blank")}
      >
        LinkedIn Profile
      </Button>
      {personalityClassGroup.suggestions !== undefined &&
        personalityClassGroup.suggestions.length === 1 && (
          <>
            <Heading
              scrollMarginTop={8}
              id="specific-suggestions"
              my={4}
              as="h2"
              size="md"
              textAlign="center"
            >
              Specific Suggestions
            </Heading>
            {personalityClassGroup.suggestions[0]
              .split(/\.\n+/g)
              .map((suggestion) =>
                suggestion.endsWith(".") ? suggestion : `${suggestion}.`
              )
              .map((suggestion, index) => (
                <Text
                  key={index}
                  textAlign="justify"
                  alignSelf="start"
                >
                  {`${suggestion}`}
                </Text>
              ))}
          </>
        )}
      {personalityClassGroup.suggestions !== undefined &&
        personalityClassGroup.suggestions.length > 1 && (
          <>
            <Heading
              scrollMarginTop={8}
              id="specific-suggestions"
              my={4}
              as="h2"
              size="md"
              textAlign="center"
            >
              Specific Suggestions
            </Heading>
            <UnorderedList w="full">
              {personalityClassGroup.suggestions!.map((suggestion, index) => (
                <ListItem
                  my={2}
                  key={index}
                  textAlign="justify"
                >
                  {suggestion}
                </ListItem>
              ))}
            </UnorderedList>
          </>
        )}
      <Heading
        scrollMarginTop={8}
        id="ten-rules-to-live-to-achieve-success"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Buy Me a Coffee
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.tenRulesToLive.map((rule, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {rule}
          </ListItem>
        ))}
      </UnorderedList>
      <Button
        mt={2} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.open("https://buymeacoffee.com/admiraladventures", "_blank")}
      >
        ☕️
      </Button>
    </Flex>
  );
}
