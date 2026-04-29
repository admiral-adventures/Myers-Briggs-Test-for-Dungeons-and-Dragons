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
  const percentage =
    props.total === 0
      ? "0"
      : ((props.count / props.total) * 100).toFixed(0);

  return (
    <Flex direction="column" w="full" gap={0.3}>
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
}

export default function TestResultStats(props: TestResultStatsProps) {

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
      pos={{ base: "relative", lg: "sticky" }}
      alignSelf="flex-start"
    >
      <Heading as="h1" textAlign="center" fontSize="lg">
        Test Results Summary
      </Heading>
      {traitPairs.map((pair, index) => {
        const countA = countTrait(pair.a);
        const countB = countTrait(pair.b);
        const total = countA + countB;
      
        return (
          <Box
            key={index}
            bg="gray.100"
            p={1}
            rounded="md"
            w="full"
            border="2px solid black"
          >
            <Flex direction="column" gap={1}>
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
        <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="40px"
        pointerEvents="none"
        bgGradient="linear(to-t, var(--chakra-colors-yellow-50), transparent)"
      />
    </Flex>
  );
}
