import Link from "next/link";
import {
  Heading,
  Text,
  Highlight,
  Flex,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
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
          <Heading as="h1" lineHeight="tall" textAlign="center">
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

          <Flex direction="column" gap={4} align="center">
            <Text fontSize="xl" align="center">
              This test will identify your Myers-Briggs personality type and
              suggest what kind of Dungeons & Dragons Player Character (PC) best
              fits your personality strengths and preferences.
            </Text>

            <Text align="center">
              Research shows that playing a character aligned with your
              personality can reduce table conflict and make your RPG sessions
              more enjoyable.
            </Text>

            <Text align="center">
              When you finish the test, your results page will include:
            </Text>

            <UnorderedList spacing={2} textAlign="left">
              <ListItem>
                Four recommended PC options based on classic party roles
                (Fighter, Cleric, Rogue, and Wizard). Each includes a
                downloadable pre-generated character sheet (PDF).
              </ListItem>
              <ListItem>
                Recommended PC <strong>Personality Traits, Flaws, and Ideals</strong>.
              </ListItem>
              <ListItem>
                A summary of your positive and negative{" "}
                <strong>table behaviors</strong> during gameplay.
              </ListItem>
            </UnorderedList>

            <Text fontWeight="semibold" align="center">
              The test takes about 15 minutes to complete.
            </Text>
          </Flex>

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
