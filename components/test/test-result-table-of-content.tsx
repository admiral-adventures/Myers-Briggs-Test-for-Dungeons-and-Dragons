import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

import useHeadingsObserver from "../../hooks/use-headings-observer";

export default function TestResultTableOfContent() {
  const { activeId, setActiveId } = useHeadingsObserver();

  const [headings, setHeadings] = useState<
    {
      id: string;
      text: string;
    }[]character traits
  >([]);

  useEffect(() => {
    const buildHeadings = () => {
      const h1Toc = Array.from(
        document.querySelectorAll("h1[data-toc]")
      ).map((element) => ({
        id: element.id,
        text: element.getAttribute("data-toc") || "",
      }));
    
      const h2Toc = Array.from(
        document.querySelectorAll("h2")
      ).map((element) => ({
        id: element.id,
        text: element.textContent || "",
      }));
    
    const baseHeadings = [
      {
        id: "__top__",
        text: h1Toc[0]?.text || "Top",
      },
      ...h1Toc.slice(1),
      ...h2Toc,
    ];
    
    // Insert AFTER "Explore Other Character Types"
    const insertIndex = baseHeadings.findIndex(
      (h) => h.text === "Explore Other Character Types"
    );
    
    const allHeadings =
      insertIndex !== -1
        ? [
            ...baseHeadings.slice(0, insertIndex + 1),
            {
              id: "character-traits",
              text: "Character Options",
            },
            ...baseHeadings.slice(insertIndex + 1),
          ]
        : baseHeadings;
    
      setHeadings(allHeadings);
    
      // ✅ NEW: force first item active
      if (allHeadings.length > 0) {
        setActiveId(allHeadings[0].id);
      }
    };
  
    // Initial build
    buildHeadings();
  
    // Watch for DOM changes (MBTI switching)
    const observer = new MutationObserver(() => {
      buildHeadings();
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  
    return () => observer.disconnect();
  }, []);

function handleTableOfContentLinkClick(
  event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
  id: string
) {
  event.preventDefault();

  // ✅ Special case: scroll to top
  if (id === "__top__") {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setActiveId("__top__");
    }, 100);

    return;
  }

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      setActiveId(id);
    }, 100);
  }
}

  return (
    <Flex
      mx={4}
      my={4}
      w={{
        base: "25%",
      }}
      h="min-content"
      p={2}
      gap={4}
      top={5}
      direction="column"
      pos="sticky"
      alignSelf="flex-start"
    >
      <Text fontWeight="bold">Table Of Content</Text>
      <UnorderedList
        spacing={2}
        listStyleType="none"
      >
        {headings.map((heading, index) => (
          <ListItem
            key={index}
            fontSize="sm"
            cursor="pointer"
            _hover={{
              borderLeft: "4px solid black",
              pl: 2,
            }}
            {...(heading.id === activeId && {
              color: "primary.500",
              fontWeight: "bold",
            })}
            onClick={(event) =>
              handleTableOfContentLinkClick(event, heading.id)
            }
          >
            <Link href={heading.id === "__top__" ? "#" : `#${heading.id}`}>
              {heading.text}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
