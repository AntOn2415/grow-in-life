// src/hooks/useClickOutside.js

import { useEffect, useRef } from "react";

export const useClickOutside = handler => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = event => {
      try {
        if (!ref.current) {
          return;
        }

        const isClickInside = ref.current.contains(event.target);

        // Якщо клік відбувся поза елементом, викликаємо обробник
        if (!isClickInside) {
          handler(event);
        }
      } catch (e) {
        console.error("useClickOutside: An error occurred during event handling.", e);
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler]);

  return ref;
};
