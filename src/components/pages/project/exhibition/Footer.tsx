import Link from "next/link";
import type { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <div className="w-full md:pl-shead h-[165px] md:h-[245px]">
      <div className="h-full flex items-center justify-center ">
        <Link href="/#project">
          <a className="text-text border-b border-brown">部屋選択に戻る</a>
        </Link>
      </div>
    </div>
  );
};
