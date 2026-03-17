import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import { TestResult } from "../../lib/personality-test";

interface TestResultStatsProps {
  testResult: TestResult;
}

type TraitKey = "E" | "I" | "S" | "N" | "T" | "F" | "P" | "J";

const traitNames: Record<TraitKey, string> = {
  E: "Extroverted",
  I: "Introverted",
  S: "Sensing",
  N: "Intuitive",
  T: "Thinking",
  F: "Feeling",
  P: "Perceiving",
  J: "Judging",
};

function TraitBar(props: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const percentage = ((props.count / props.total) * 100).toFixed(0);

    return (
      <Flex direction="column" w="full" gap={1}>
        <Text fontWeight="bold" color="black">
          {props.label}
        </Text>
    
        <Flex align="center" w="100%" gap={2}>
          <Box
            flex="1"
            h="14px"
            bg="gray.200"
            rounded="md"
            overflow="hidden"
          >
            <Box
              h="100%"
              bg={`${props.color}.500`}
              w={`${percentage}%`}
              rounded="md"
            />
          </Box>
    
          <Text fontWeight="semibold" minW="40px">
            {percentage}%
          </Text>
        </Flex>
      </Flex>
    );
  );
}

export default function TestResultStats(props: TestResultStatsProps) {
  const totalQuestions: Record<TraitKey, number> = {
    E: 10, // Total number of questions for Extroverted/Introverted pair
    I: 10, // Total number of questions for Extroverted/Introverted pair (corrected)
    S: 20, // Total number of questions for Sensing/Intuitive pair
    N: 20, // Total number of questions for Sensing/Intuitive pair (corrected)
    T: 20, // Total number of questions for Thinking/Feeling pair
    F: 20, // Total number of questions for Thinking/Feeling pair (corrected)
    P: 20, // Total number of questions for Perceiving/Judging pair
    J: 20, // Total number of questions for Perceiving/Judging pair (corrected)
  };
  const statsColorScheme = ["red", "pink", "blue", "purple", "yellow", "orange", "green", "teal"];

  const traitPairs: { a: TraitKey; b: TraitKey; colors: string[] }[] = [
    { a: "E", b: "I", colors: ["red", "pink"] },
    { a: "S", b: "N", colors: ["blue", "purple"] },
    { a: "T", b: "F", colors: ["yellow", "orange"] },
    { a: "P", b: "J", colors: ["green", "teal"] },
  ];

  function countTrait(trait: TraitKey) {
  return props.testResult.testScores.filter(
    (score) => score === trait
  ).length;
}
  
  return (
    <Flex
      my={4}
      mx={{ base: 0, lg: 4 }}
      w={{ base: "full", lg: "20%" }}
      h="min-content"
      p={2}
      gap={4}
      top={5}
      direction="column"
      pos={{ base: "static", lg: "sticky" }}
      alignSelf="flex-start"
    >
      <Heading as="h1" textAlign="center" fontSize="lg">
        Test Results Summary
      </Heading>
      {traitPairs.map((pair, index) => {
        const countA = countTrait(pair.a);
        const countB = countTrait(pair.b);
        const total = totalQuestions[pair.a];
      
        return (
          <Box
            key={index}
            bg="gray.100"
            p={3}
            rounded="md"
            w="full"
            border="2px solid black"
          >
            <Flex direction="column" gap={3}>
              <TraitBar
                label={traitNames[pair.a]}
                count={countA}
                total={total}
                color={pair.colors[0]}
              />
      
              <TraitBar
                label={traitNames[pair.b]}
                count={countB}
                total={total}
                color={pair.colors[1]}
              />
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
