import { useRef, useState, useEffect } from "react";

export default function useHeadingsObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isInitialLoad.current) return;
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
    
    // ✅ ADD THIS BLOCK RIGHT HERE
    setTimeout(() => {
      isInitialLoad.current = false;
    }, 200);
    
    // Re-attach when DOM changes (MBTI switch)
    const mutationObserver = new MutationObserver(() => {
      createObserver();
    
      // ✅ ALSO RESET INITIAL LOAD DURING CONTENT SWAP
      isInitialLoad.current = true;
    
      setTimeout(() => {
        isInitialLoad.current = false;
      }, 200);
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
