import { useRef, useState, useEffect } from "react";

export default function useHeadingsObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
  
    const createObserver = () => {
      observer.current?.disconnect();
  
      observer.current = new IntersectionObserver(handleObserver, {
        rootMargin: "-20% 0% -35% 0px",
      });
  
      const elements = document.querySelectorAll("h1[data-toc], h2");
  
      elements.forEach((element) => observer.current?.observe(element));
    };
  
    // Initial attach
    createObserver();
  
    // Re-attach when DOM changes (MBTI switch)
    const mutationObserver = new MutationObserver(() => {
      createObserver();
    });
  
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  
    return () => {
      observer.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return {
    activeId,
    setActiveId,
  };
}
