import { Flex, Text, Heading } from "@chakra-ui/react";
import { personalityClasses } from "../../data/personality-classes";
import { PersonalityClass, TestResult } from "../../lib/personality-test";

interface TestResultStatsProps {
  testResult: TestResult;
}

function ScoreStats(props: {
  testScores: PersonalityClass["type"][];
  targetScore: PersonalityClass["type"];
  totalQuestions: number;
}) {
  const totalForPair = props.testScores.filter(
    (score) => score === props.targetScore
  ).length;
  const percentage = ((totalForPair / props.totalQuestions) * 100).toFixed(0);

  return (
    <Flex py={1} px={2} gap={2} rounded="md" justifyContent="space-between" bg="white">
      <Text fontWeight="semibold">{percentage}%</Text>
      <Text>({totalForPair})</Text>
    </Flex>
  );
}

export default function TestResultStats(props: TestResultStatsProps) {
  const totalQuestions = 70; // Total number of questions in the MBTI quiz
  const statsColorScheme = ["red", "blue", "yellow", "purple", "orange", "green", "pink", "teal"];

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
    </Flex>
  );
}
