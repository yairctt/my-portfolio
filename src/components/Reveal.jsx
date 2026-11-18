import { useEffect, useRef, useState } from "react";

// Fades a section in the first time it enters the viewport.
// motion-safe: users with "reduce motion" enabled see the content immediately.
function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out ${
        visible ? "" : "motion-safe:opacity-0 motion-safe:translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

export default Reveal;
