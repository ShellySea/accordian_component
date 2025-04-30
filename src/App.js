import "./styles.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function App() {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  // const items = [];

  const [activeIndex, setActiveIndex] = useState(null);

  const handlePanelClick = (index) => {
    setActiveIndex((prev) => {
      if (prev === index) {
        return prev != index;
      } else {
        return (prev = index);
      }
    });
  };

  return (
    <div className="container">
      {items.length === 0 ? (
        <div className="no-content">No Items to display!</div>
      ) : (
        items.map((d, index) => {
          return (
            <div className="accordian" key={index}>
              <button
                className="accordian-title"
                onClick={() => handlePanelClick(index)}
              >
                {d.title}
                {activeIndex === index ? (
                  <FaChevronUp style={{ float: "right" }} />
                ) : (
                  <FaChevronDown style={{ float: "right" }} />
                )}
              </button>
              {activeIndex === index && (
                <div className="accordian-content">{d.content}</div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
