import { Flex, Text, Heading, Link } from "@chakra-ui/react";
import { personalityClasses } from "../../data/personality-classes";
import { PersonalityClass, TestResult } from "../../lib/personality-test";

interface TestResultStatsProps {
  testResult: TestResult;
}

function ScoreStats(props: {
  testScores: PersonalityClass["type"][];
  targetScore: PersonalityClass["type"];
  totalQuestions: { [key: string]: number };
}) {
  const totalForPair = props.testScores.filter(
    (score) => score === props.targetScore
  ).length;
  const totalQuestionsForPair = props.totalQuestions[props.targetScore];
  const percentage = ((totalForPair / totalQuestionsForPair) * 100).toFixed(0);

  return (
    <Flex py={1} px={2} gap={2} rounded="md" justifyContent="space-between" bg="white">
      <Text fontWeight="semibold">{percentage}%</Text>
      <Text>({totalForPair})</Text>
    </Flex>
  );
}

export default function TestResultStats(props: TestResultStatsProps) {
  const totalQuestions = {
    E: 10,
    I: 10,
    S: 20,
    N: 20,
    T: 20,
    F: 20,
    P: 20,
    J: 20,
  };
  const statsColorScheme = ["red", "blue", "yellow", "purple", "orange", "green", "pink", "teal"];

  function MailtoLinkForTestResult(testResult: TestResult) {
    const personalityClass = personalityClasses.find(
      (pc) => pc.type === testResult.testScores.join("")
    );

    if (!personalityClass) {
      throw new Error("Personality class not found for test scores.");
    }

    const subjectText = 'My Myers-Briggs D&D Character Type';
    const bodyText = [
      `My character type is "${personalityClass.type} - ${personalityClass.name}"`,
      '',
      JSON.stringify(testResult),
    ].join('\n');
    const recipientEmail = ''; // Insert your recipient email here if needed
    const uri = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    return uri;
  }

  return (
    <Flex
      my={4}
      mx={{ base: 0, lg: 4 }}
      w={{ base: "full", lg: "25%" }}
      h="min-content"
      p={2}
      gap={4}
      top={5}
      direction="column"
      pos={{ base: "static", lg: "sticky" }}
      alignSelf="flex-start"
    >
      <Heading as="h1" textAlign="center" fontSize="lg">
        Scores
      </Heading>
      {personalityClasses.map((personalityClass, index) => (
        <Flex
          key={index}
          p={2}
          rounded="md"
          justifyContent="space-between"
          alignItems="center"
          bg={`${statsColorScheme[index]}.500`}
          mb={2} // Add margin bottom for spacing
        >
          <Text fontWeight="semibold" color="white">
            {personalityClass.description}
          </Text>
          <ScoreStats
            testScores={props.testResult.testScores}
            targetScore={personalityClass.type}
            totalQuestions={totalQuestions}
          />
        </Flex>
      ))}
      {/* Email Results Button */}
      <Flex justifyContent="center" mt={2}>
        <Link
          href={MailtoLinkForTestResult(props.testResult)}
          rel="noopener noreferrer"
          target="_blank"
          colorScheme="blue" // Use Chakra UI color scheme for light blue
        >
          Email Results
        </Link>
      </Flex>
    </Flex>
  );
}
