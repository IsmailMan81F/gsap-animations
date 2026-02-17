import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

function App() {
  const scrollRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 300,
          rotate: 360,
          borderRadius: "50%",
          scale: 20,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top top",
            scrub: 0.5,
          },
        });
      });
    },
    { scope: scrollRef },
  );

  return (
    <div className="pl-5 pt-[900px] h-[2000px] overflow-x-hidden">
      <div className="flex flex-col gap-5" ref={scrollRef}>
        <div className="box w-20 h-20 bg-green-400 shadow-md shadow-green-500/60"></div>
        <div className="box w-20 h-20 bg-amber-600 shadow-md shadow-orange-500/60"></div>
      </div>
    </div>
  );
}

export default App;
