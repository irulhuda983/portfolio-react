import { Fragment } from "react";

interface IProps {
  text: string;
}

const STRONG_PATTERN = /<strong>(.*?)<\/strong>/g;

function RichText({ text }: IProps) {
  const parts = text.split(STRONG_PATTERN);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-foreground">{part}</span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default RichText;
