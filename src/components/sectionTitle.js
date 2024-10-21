import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="text-bluish md:text-lg font-normal leading-8">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;