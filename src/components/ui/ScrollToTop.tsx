import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useCallback } from "react";

import { ArrowUp } from "../icons";

type Props = ComponentPropsWithoutRef<"button">;

export const ScrollToTop = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className } = props;
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button className={clsx("bg-brown w-[54px] h-[54px]", className)} onClick={handleClick} ref={ref}>
      <span className="flex items-center justify-center w-full h-full">
        <ArrowUp className="w-6" />
      </span>
    </button>
  );
});

ScrollToTop.displayName = "ScrollToTop";