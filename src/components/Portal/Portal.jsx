import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(elRef.current);
    }

    return () => {
      if (modalRoot && elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, [modalRoot]);

  return createPortal(children, elRef.current);
};

export default Portal;
