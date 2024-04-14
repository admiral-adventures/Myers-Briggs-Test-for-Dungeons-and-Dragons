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
              Welcome to D&D Personality Test
            </Highlight>
          </Heading>
          <Text
            fontSize="xl"
            align="center"
          >
            This test will help you to identify a character to play that is better aligned with your personality type.
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
