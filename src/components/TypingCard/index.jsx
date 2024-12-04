import React, { useRef, useEffect } from "react";
import { Card } from "antd";
import { PropTypes } from "prop-types";
import Typing from "./typing";

const TypingCard = (props) => {
  const { title, source, onAnimationEnd } = props;

  const sourceEl = useRef();
  const outputEl = useRef();

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 30,
      done: () => {
        if (onAnimationEnd && typeof onAnimationEnd === "function") {
          onAnimationEnd();
        }
      },
    });
    typing.start();
  }, [onAnimationEnd]);
  return (
    <>
      <div
        style={{ display: "none" }}
        ref={sourceEl}
        dangerouslySetInnerHTML={{ __html: source }}
      />
      <div ref={outputEl} />
    </>
  );
};

TypingCard.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  onAnimationEnd: PropTypes.func,
};

TypingCard.defaultProps = {
  title: "",
  source: "",
  onAnimationEnd: () => {},
};

export default TypingCard;
