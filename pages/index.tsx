import Link from "next/link";
import { Heading, Text, Highlight, Flex, Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image"; 

import MainLayout from "../components/layouts/main-layout";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <Flex
          w={{
            base: "full",
            lg: "50%",
          }}
          alignSelf="center"
          px={4}
          gap={8}
          minH="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div style={{ marginBottom: "1rem" }}>
            <Image
              src="/images/mbti/Logo1.png" 
              alt="D&D Image"
              height={200}
              width={800}
            />
          </div>
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
          >
            <Highlight
              query="D&D Personality Test"
              styles={{
                py: 1,
                px: 4,
                rounded: "full",
                bg: "primary.500",
                color: "white",
              }}
            >
              Welcome to the D&D Personality Test
            </Highlight>
          </Heading>
          <Text
            fontSize="xl"
            align="center"
          >
            This test will identify your Myers-Briggs personality type and suggest what kind of Dungeons & Dragons Player Character (PC) best fits your personality strengths and preferences.

Research shows that playing a character aligned with your personality can reduce table conflict and make your RPG sessions more enjoyable.

When you finish the test, your results page will include:
• Four recommended PC options based on classic party roles (Fighter, Cleric, Rogue, and Wizard). Each includes a downloadable pre-generated character sheet (PDF).
• Recommended PC Personality Traits, Flaws, and Ideals.
• A summary of your positive and negative table behaviors during gameplay.

The test takes about 15 minutes to complete.
          </Text>
          <Link href="/test">
            <Button
              w="min-content"
              colorScheme="primary"
              variant="outline"
              rightIcon={<FiArrowRight size={20} />}
            >
              Take Test
            </Button>
          </Link>
        </Flex>
      </MainLayout>
    </>
  );
}
