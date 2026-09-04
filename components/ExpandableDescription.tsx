"use client";

import { useState } from "react";

export default function ExpandableDescription({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = text.split("\n\n");
  
  if (paragraphs.length <= 2) {
    return <p className="product-description">{text}</p>;
  }

  const visibleText = paragraphs.slice(0, 2).join("\n\n");
  const hiddenText = paragraphs.slice(2).join("\n\n");

  return (
    <div className="product-description">
      <div dangerouslySetInnerHTML={{ __html: visibleText }} style={{ whiteSpace: "pre-wrap", margin: 0 }} />
      {isExpanded && (
        <div dangerouslySetInnerHTML={{ __html: hiddenText }} style={{ marginTop: "1.65em", whiteSpace: "pre-wrap", margin: 0 }} />
      )}
      <div style={{ marginTop: "12px" }}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            backgroundColor: "transparent",
            color: "#d51a1a",
            border: "none",
            padding: "0",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "16px"
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
