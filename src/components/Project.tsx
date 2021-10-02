import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { VFC } from "react";
import { useEffect, useRef } from "react";

import { Highlight, Paragraph } from "@/components/basics";
import { Card, Section } from "@/components/ui";
import useWindowSize from "@/hooks/useWindowSize";

export const Project: VFC = () => {
  const triggerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const anime = useRef<gsap.core.Tween>(null);

  const { width } = useWindowSize();
  //TODO: リサイズした時にxを変更したい
  useEffect(() => {
    const boxElm = boxRef.current;
    const triggerElm = triggerRef.current;
    if (boxElm === null || triggerElm === null) return;

    if (anime.current === null) {
      gsap.registerPlugin(ScrollTrigger);
      anime.current = gsap.to(boxElm, {
        // xPercent: -100,
        x: () => -boxElm.clientWidth + width * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: triggerElm,
          start: "bottom bottom",
          end: `+=${boxElm.clientWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }, [width]);

  return (
    <Section heading="Project" subHeading="プロジェクト" ref={triggerRef}>
      <div className="px-5 mb-4">
        <Paragraph>
          web会場限定！芸工生が力を合わせて企画しました！
          <Highlight>ぜったい全部見てね〜！</Highlight>
        </Paragraph>
      </div>
      <div className="flex items-center h-[512px] bg-lightGray relative overflow-x-hidden">
        <div className="absolute flex pl-12 my-auto space-x-24" ref={boxRef}>
          {new Array(8).fill(0).map((v, i) => (
            <Card
              key={i.toString()}
              index={1}
              title={"作品展示"}
              description={"芸工性による作品展示"}
              colorLevel={10}
              imageSrc={"/images/project.png"}
              size="md"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};