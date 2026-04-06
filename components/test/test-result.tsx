import {
  Flex,
  Heading,
  Highlight,
  Text,
  Box,
  Stack,
  UnorderedList,
  ListItem,
  Button,
  HStack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

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

function getPCFilePath(type: string, role: string, gender: string) {
  return `/PCs/${type}-${role}-${gender}.pdf`;
}

function getClassNameFromPreference(preference: string) {
  return preference.split(" - ")[0];
}

function getClassIconPath(preference: string) {
  const className = getClassNameFromPreference(preference);
  const formatted =
    className.charAt(0).toUpperCase() +
    className.slice(1).toLowerCase();
  return `/Class Icons/${formatted}.jpeg`;
}

export default function TestResult(props: TestResultProps) {
  const initialGroup = getPersonalityClassGroupByTestScores(
    props.testResult.testScores
  );
  
  const [selectedType, setSelectedType] = useState(initialGroup.type);
 const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isCarouselOpen,
    onOpen: onCarouselOpen,
    onClose: onCarouselClose,
  } = useDisclosure();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  
const personalityClassGroup =
  selectedType === initialGroup.type
    ? initialGroup
    : getPersonalityClassGroupByType(selectedType);

function getCarouselImages() {
  const type = personalityClassGroup.type;

  const typeOrder = [
    "ESFP",
    "ESTP",
    "ISFP",
    "ISTP",
    "ESFJ",
    "ESTJ",
    "ISFJ",
    "ISTJ",
    "ENFP",
    "ENFJ",
    "INFP",
    "INFJ",
    "ENTP",
    "ENTJ",
    "INTP",
    "INTJ",
  ];

  const classOrder = ["Fighter", "Cleric", "Rogue", "Wizard"];

  const typeIndex = typeOrder.indexOf(type);

  return classOrder.map((role, roleIndex) => {
    const imageNumber = String(typeIndex * 4 + roleIndex + 1).padStart(2, "0");

    return `/Summary/${imageNumber}-${type}-${role}.JPG`;
  });
}

function handleNextImage() {
  setCurrentImageIndex((prev) =>
    prev === carouselImages.length - 1 ? 0 : prev + 1
  );
}

function handlePreviousImage() {
  setCurrentImageIndex((prev) =>
    prev === 0 ? carouselImages.length - 1 : prev - 1
  );
}

function handleDownload(gender: string) {
  if (!selectedRole) return;

  const url = getPCFilePath(
    personalityClassGroup.type,
    selectedRole,
    gender
  );

  window.open(url, "_blank");
  onClose();
}

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
        Character Class and Subclass Options
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        w="full"
      >
      
        {/* FIGHTER CARD */}
        <Box
          border="2px solid black"
          bg="gray.100"
          borderRadius="lg"
          p={4}
          boxShadow="sm"
          textAlign="center"
        >
          <Stack spacing={3}>
      
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              FIGHTER OPTION
            </Text>
      
            <HStack spacing={3} justify="center">
              <Image
                src={getClassIconPath(
                  personalityClassGroup.jungianFunctionalPreference.dominant
                )}
                alt="class icon"
                width={14}
                height={14}
              />
              <Text fontWeight="bold">
                {personalityClassGroup.jungianFunctionalPreference.dominant}
              </Text>
            </HStack>
      
            <Button
              size="md"
              bg="#99CCFF"
              color="black"
              border="2px solid black"
              onClick={() => {
                setSelectedRole("Fighter");
                onOpen();
              }}
            >
              Download PC
            </Button>
      
          </Stack>
        </Box>
      
        {/* CLERIC CARD */}
        <Box
          border="2px solid black"
          bg="gray.100"
          borderRadius="lg"
          p={4}
          boxShadow="sm"
          textAlign="center"
        >
          <Stack spacing={3}>
      
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              CLERIC OPTION
            </Text>
      
            <HStack spacing={3} justify="center">
              <Image
                src={getClassIconPath(
                  personalityClassGroup.jungianFunctionalPreference.auxiliary
                )}
                alt="class icon"
                width={14}
                height={14}
              />
              <Text fontWeight="bold">
                {personalityClassGroup.jungianFunctionalPreference.auxiliary}
              </Text>
            </HStack>
      
            <Button
              size="md"
              bg="#99CCFF"
              color="black"
              border="2px solid black"
              onClick={() => {
                setSelectedRole("Cleric");
                onOpen();
              }}
            >
              Download PC
            </Button>
      
          </Stack>
        </Box>
      
        {/* ROGUE CARD */}
        <Box
          border="2px solid black"
          bg="gray.100"
          borderRadius="lg"
          p={4}
          boxShadow="sm"
          textAlign="center"
        >
          <Stack spacing={3}>
      
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              ROGUE OPTION
            </Text>
      
            <HStack spacing={3} justify="center">
              <Image
                src={getClassIconPath(
                  personalityClassGroup.jungianFunctionalPreference.tertiary
                )}
                alt="class icon"
                width={14}
                height={14}
              />
              <Text fontWeight="bold">
                {personalityClassGroup.jungianFunctionalPreference.tertiary}
              </Text>
            </HStack>
      
            <Button
              size="md"
              bg="#99CCFF"
              color="black"
              border="2px solid black"
              onClick={() => {
                setSelectedRole("Rogue");
                onOpen();
              }}
            >
              Download PC
            </Button>
      
          </Stack>
        </Box>
      
        {/* WIZARD CARD */}
        <Box
          border="2px solid black"
          bg="gray.100"
          borderRadius="lg"
          p={4}
          boxShadow="sm"
          textAlign="center"
        >
          <Stack spacing={3}>
      
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              WIZARD OPTION
            </Text>
      
            <HStack spacing={3} justify="center">
              <Image
                src={getClassIconPath(
                  personalityClassGroup.jungianFunctionalPreference.inferior
                )}
                alt="class icon"
                width={14}
                height={14}
              />
              <Text fontWeight="bold">
                {personalityClassGroup.jungianFunctionalPreference.inferior}
              </Text>
            </HStack>
      
            <Button
              size="md"
              bg="#99CCFF"
              color="black"
              border="2px solid black"
              onClick={() => {
                setSelectedRole("Wizard");
                onOpen();
              }}
            >
              Download PC
            </Button>
      
          </Stack>
        </Box>
      
      </SimpleGrid>

      <Button
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
        onClick={() => {
          setCarouselImages(getCarouselImages());
          setCurrentImageIndex(0);
          onCarouselOpen();
        }}
      >
        View Character Gallery
      </Button>       

      <Text
        fontSize="md"
        fontWeight="bold"
        textAlign="center"
        mt={3}
      >
        If you like your pre-generated PC sheet, please buy me a coffee. 
        The tailored PC sheet you just downloaded took a lot of hard work to create.
      </Text>

      <Button
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
        onClick={() => window.open("https://buymeacoffee.com/admiraladventures", "_blank")}
      >
        Buy Me a Coffee ☕️
      </Button>
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
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESFP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Entertainer
        <br />
        ESFP
      </Text>
    </Button>
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESTP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Entrepreneur
        <br />
        ESTP
      </Text>
    </Button>
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISFP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Adventurer
        <br />
        ISFP
      </Text>
    </Button>
    
    <Button
      bg="#FFFFCC"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISTP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Virtuoso
        <br />
        ISTP
      </Text>
    </Button>

    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESFJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Consul
        <br />
        ESFJ
      </Text>
    </Button>
    
    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ESTJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Executive
        <br />
        ESTJ
      </Text>
    </Button>
    
    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISFJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Defender
        <br />
        ISFJ
      </Text>
    </Button>
    
    <Button
      bg="#CCECFF"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ISTJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Logistician
        <br />
        ISTJ
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENFP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Campaigner
        <br />
        ENFP
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENFJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Protagonist
        <br />
        ENFJ
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("INFP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Mediator
        <br />
        INFP
      </Text>
    </Button>
    
    <Button
      bg="#C1D892"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("INFJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Advocate
        <br />
        INFJ
      </Text>
    </Button>
      
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENTP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Debater
        <br />
        ENTP
      </Text>
    </Button>
    
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("ENTJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Commander
        <br />
        ENTJ
      </Text>
    </Button>

    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("INTP")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
        Logician
        <br />
        INTP
      </Text>
    </Button>
      
    <Button
      bg="#CBBFE8"
      h="60px"
      w="100%"
      border="2px solid black"
      whiteSpace="normal"
      onClick={() => setSelectedType("INTJ")}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color="black"
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        whiteSpace="nowrap"
      >
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
      <UnorderedList w="full" styleType="none">
        {personalityClassGroup.relationshipStrengths.map(
          (relationshipStrength, index) => (
            <ListItem
              my={2}
              key={index}
              textAlign="justify"
            >
              {"🟢 "}{relationshipStrength}
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
        <UnorderedList w="full" styleType="none">
          {personalityClassGroup.relationshipWeaknesses.map(
            (relationshipWeakness, index) => (
              <ListItem
                my={2}
                key={index}
                textAlign="justify"
              >
                {"🔴 "}{relationshipWeakness}
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
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
        onClick={() => window.open(`https://admiraladventures.com/-pre-gen-characters#${personalityClassGroup.type}`, "_blank")
}
      >
        Download Character Sheet
      </Button>
      <Button
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
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
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
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
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
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
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
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
        size="md"
        bg="#99CCFF"
        color="black"
        border="2px solid black"
        onClick={() => window.open("https://buymeacoffee.com/admiraladventures", "_blank")}
      >
        Buy Me a Coffee ☕️
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedRole
              ? `Select ${selectedRole} Character Version`
              : "Select Character Version"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4}>
              <Button
                onClick={() => handleDownload("Male")}
                bg="#99CCFF"
                color="black"
                border="2px solid black"
              >
                Male
              </Button>
      
              <Button
                onClick={() => handleDownload("Female")}
                bg="#FFFFCC"
                color="black"
                border="2px solid black"
              >
                Female
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>  

      <Modal isOpen={isCarouselOpen} onClose={onCarouselClose} size="full">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader color="white" textAlign="center">
            Character Summaries
            </ModalHeader>
          <ModalCloseButton
            color="white"
            bg="rgba(0, 0, 0, 0.6)"
            borderRadius="full"
            size="lg"
            _hover={{
              bg: "rgba(255, 255, 255, 0.2)",
            }}
          />

<ModalBody pb={6}>
  <Stack spacing={4} align="center">
    <Box
      overflow="auto"
      maxH="85vh"
      maxW="100%"
      style={{ touchAction: "pan-x pan-y pinch-zoom" }}
    >
      <Image
        src={carouselImages[currentImageIndex]}
        alt="Character art"
        maxH="85vh"
        maxW="95vw"
        objectFit="contain"
        userSelect="none"
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;

          const touchEndX = e.changedTouches[0].clientX;
          const diff = touchStartX - touchEndX;

          if (diff > 50) {
            handleNextImage();
          } else if (diff < -50) {
            handlePreviousImage();
          }

          setTouchStartX(null);
        }}
      />
    </Box>

    <HStack spacing={2}>
      {carouselImages.map((_, index) => (
        <Box
          key={index}
          w="10px"
          h="10px"
          borderRadius="full"
          bg={index === currentImageIndex ? "white" : "gray.500"}
          cursor="pointer"
          onClick={() => setCurrentImageIndex(index)}
        />
      ))}
    </HStack>

    <HStack spacing={6}>
      <Button onClick={handlePreviousImage} colorScheme="gray">
        ← Previous
      </Button>

      <Button onClick={handleNextImage} colorScheme="blue">
        Next →
      </Button>
    </HStack>
  </Stack>
</ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
