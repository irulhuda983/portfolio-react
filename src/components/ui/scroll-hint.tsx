import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface IProps {
  label: string;
  targetId: string;
}

const ScrollHint: React.FC<IProps> = ({ label, targetId }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`#${targetId}`}
      aria-label={label}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-1 text-xs text-muted-foreground hover:text-foreground transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <span>{label}</span>
      <ChevronDown className="size-4 animate-bounce" />
    </a>
  );
};

export default ScrollHint;
