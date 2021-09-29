import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import type { VFC } from "react";

import { NAV_LINKS } from "../constants";

export const Nav: VFC = () => {
  const router = useRouter();

  return (
    <ul className="flex flex-col pl-8 space-y-6">
      {NAV_LINKS.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <a style={{ display: "block" }}>
              <div className="flex flex-col items-start py-3">
                <div
                  className={clsx("w-full border-r-8 border-solid border-transparent transform duration-300 group", {
                    "border-green-10": item.activePatterns.includes(router.asPath),
                  })}
                >
                  <p className="text-2xl leading-none text-white duration-300 transform font-genuine group-hover:scale-90">
                    {item.text}
                  </p>
                  <p className="mt-1 leading-none text-white duration-300 transform text-xxs font-genuine group-hover:scale-90">
                    {item.subText}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};