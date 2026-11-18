import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { TbX } from "react-icons/tb";

// Full-screen image viewer. Rendered in a portal on <body> so no transformed
// ancestor (e.g. scroll-reveal wrappers) can break its fixed positioning.
function Lightbox({ src, title, closeLabel, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 p-4 bg-black/85 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute top-4 right-4 flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <TbX className="text-2xl" aria-hidden="true" />
      </button>
      <img
        src={src}
        alt={title}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[min(1200px,100%)] max-h-[82vh] w-auto h-auto rounded-lg shadow-2xl object-contain"
      />
      <p className="text-sm text-zinc-200 text-center px-4" onClick={(e) => e.stopPropagation()}>
        {title}
      </p>
    </div>,
    document.body
  );
}

export default Lightbox;
