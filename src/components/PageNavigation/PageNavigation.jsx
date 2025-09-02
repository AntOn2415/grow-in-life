import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Tooltip from "../../components/Common/Tooltip/Tooltip";
import HeadingsTooltipContent from "../../components/Common/Tooltip/HeadingsTooltipContent/HeadingsTooltipContent";
import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
  ScrollButton,
  NavigationWrapper,
} from "./PageNavigation.styled";

// ✅ 1. Логіка для підказок
const findNestedHeadings = h2Element => {
  const nested = [];
  let nextSibling = h2Element.nextElementSibling;
  while (nextSibling && nextSibling.tagName.toLowerCase() !== "h2") {
    if (nextSibling.tagName.toLowerCase().startsWith("h") && nextSibling.id) {
      nested.push({
        id: nextSibling.id,
        title: nextSibling.textContent,
        level: parseInt(nextSibling.tagName.substring(1)),
      });
    }
    nextSibling = nextSibling.nextElementSibling;
  }
  return nested;
};

const PageNavigation = ({ sections }) => {
  const [activeId, setActiveId] = useState("");
  const [h2Sections, setH2Sections] = useState([]);
  const navigationRef = useRef(null);
  const listRef = useRef(null);

  // ✅ Логіка для збору даних підказок
  useEffect(() => {
    const h2Elements = Array.from(document.querySelectorAll("h2[id]"));
    if (h2Elements.length === 0) {
      setH2Sections([]);
      return;
    }
    const sectionsData = h2Elements.map(h2 => {
      const nested = findNestedHeadings(h2);
      return {
        id: h2.id,
        title: h2.textContent,
        nestedHeadings: nested,
      };
    });
    setH2Sections(sectionsData);
  }, [sections]);

  // ✅ 2. Логіка для підкреслення (activeId)
  useEffect(() => {
    const h2Elements = Array.from(document.querySelectorAll("h2[id]"));
    if (h2Elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        let currentActiveId = null;
        const topIntersectingEntry = entries.find(entry => entry.isIntersecting);

        if (topIntersectingEntry) {
          currentActiveId = topIntersectingEntry.target.id;
        } else {
          const passedHeadings = entries
            .filter(entry => !entry.isIntersecting)
            .sort(
              (a, b) => b.target.getBoundingClientRect().top - a.target.getBoundingClientRect().top
            );
          if (passedHeadings.length > 0) {
            currentActiveId = passedHeadings[0].target.id;
          }
        }

        if (currentActiveId) {
          setActiveId(currentActiveId);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -80% 0px",
        threshold: 0,
      }
    );

    h2Elements.forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  useEffect(() => {
    if (activeId && listRef.current) {
      const activeLink = listRef.current.querySelector(".active");
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeId]);

  const scrollAndSelect = direction => {
    if (!listRef.current) return;
    const listItems = Array.from(listRef.current.children);
    const activeIndex = listItems.findIndex(item => item.querySelector(".active"));
    let nextIndex = activeIndex;
    if (direction === "right" && activeIndex < listItems.length - 1) {
      nextIndex = activeIndex + 1;
    } else if (direction === "left" && activeIndex > 0) {
      nextIndex = activeIndex - 1;
    }
    const nextItem = listItems[nextIndex];
    if (nextItem) {
      const newActiveId = h2Sections[nextIndex]?.id;
      if (newActiveId) {
        setActiveId(newActiveId);
        nextItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        const targetElement = document.getElementById(newActiveId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  if (h2Sections.length === 0) {
    return null;
  }

  return (
    <NavigationWrapper>
      <ScrollButton onClick={() => scrollAndSelect("left")} aria-label="Прокрутити навігацію вліво">
        <IoIosArrowBack size={24} />
      </ScrollButton>
      <NavigationContainer ref={navigationRef}>
        <NavigationList ref={listRef}>
          {h2Sections.map(({ id, title, nestedHeadings }) => (
            <NavigationItem key={id}>
              {nestedHeadings.length > 0 ? (
                <Tooltip
                  content={<HeadingsTooltipContent headings={nestedHeadings} />}
                  alignment="center"
                >
                  <NavigationLink
                    href={`#${id}`}
                    className={activeId === id ? "active" : ""}
                    onClick={() => setActiveId(id)}
                  >
                    {title}
                  </NavigationLink>
                </Tooltip>
              ) : (
                <NavigationLink
                  href={`#${id}`}
                  className={activeId === id ? "active" : ""}
                  onClick={() => setActiveId(id)}
                >
                  {title}
                </NavigationLink>
              )}
            </NavigationItem>
          ))}
        </NavigationList>
      </NavigationContainer>
      <ScrollButton
        onClick={() => scrollAndSelect("right")}
        aria-label="Прокрутити навігацію вправо"
      >
        <IoIosArrowForward size={24} />
      </ScrollButton>
    </NavigationWrapper>
  );
};

export default PageNavigation;
