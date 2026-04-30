import { useRef, useState, useEffect } from "react";

export default function useHeadingsObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");
  const isInitialLoad = useRef(true);
  const TOP_ID = "__top__";

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isInitialLoad.current) return;
        
          // If near top, keep "__top__" active
          if (window.scrollY < 100) return;
        
          setActiveId(entry.target.id);
        }
      });
    };
  
    const createObserver = () => {
      observer.current?.disconnect();
  
      observer.current = new IntersectionObserver(handleObserver, {
        rootMargin: "-20% 0% -35% 0px",
      });
  
      const elements = document.querySelectorAll(
        'h1[data-toc], h2, #character-options, #character-traits, #character-flaws, #character-ideals'
      );
  
      elements.forEach((element) => observer.current?.observe(element));
    };
  
    // Initial attach
    createObserver();

    // ✅ Detect when user is near top of page
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveId(TOP_ID);
      }
    };

window.addEventListener("scroll", handleScroll);
    
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    activeId,
    setActiveId,
  };
}
