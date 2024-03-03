import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Loader({ transitionStyle, children }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={children.key}
        timeout={300}
        classNames={transitionStyle}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}
