import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    gsap.to("#text", {
      y: 0,
      ease: "circ.in",
      opacity: 1,
      scale: 1,
    });

    gsap.fromTo(
      ".para",
      {
        y: 3,
        opacity: 0,
        ease: "power1.in",
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.in",
        delay: 1,
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <div className="pl-5 pt-5 overflow-x-hidden h-screen w-full bg-gray-900">
      <h2
        id="text"
        className="translate-y-3 opacity-0 text-yellow-300 text-3xl pb-5"
      >
        Super Smaoner
      </h2>
      <div className="para text-amber-600 text-lg">
        sldkfdslkjf kdsjfl kdsjflk jsdlkfjds lkfjsdkjflkksdj lkfjdsfdjsf dslkjf
      </div>
      <div className="para text-amber-600 text-lg">
        lkdsjf lksdjflk jdslfj dslkfjsd lkfj ldsjflkgjfslkgjfsljgnsjlkdfg hsjhf
        skjgh jsfgjfldjglkfjdgl jfdkjgfdglkfd jglk fdjlkgjfd lkgjlkdfjglk dfjglk
      </div>
      <div className="para text-amber-600 text-lg">
        fdjglkjdflk gjdflkgj dlfkjg jdfgkjlkfjlgjqflkgjf dg f4d56g4 fd5g45fd4g5
        fd4g56
      </div>
      <div className="para text-amber-600 text-lg">
        df65gfd65g4fd4g56fd4gfd4gfdsgç_è_çgèà_'unt_at_aà"'a"-vaç-ubà'ç"
      </div>
    </div>
  );
}

export default App;
