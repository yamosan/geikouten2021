import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

type Props = {
  heading: string;
  subHeading: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export const Section = forwardRef<HTMLElement, Props>((props, ref) => {
  const { heading, subHeading, children, className, ...attrs } = props;
  return (
    <section className={clsx("bg-white py-10", className)} {...attrs} ref={ref}>
      <header className="mx-5">
        <h2 className="text-5xl leading-10 font-genuine text-green-10">{heading}</h2>
        <p role="doc-subtitle" className="font-bold text-text">
          {subHeading}
        </p>
      </header>
      <hr className="mt-3 mb-5 text-gray" />
      <div>{children}</div>
    </section>
  );
});

Section.displayName = "Section";