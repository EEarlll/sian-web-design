let tl = gsap.timeline();

// P - Flip + rise
tl.fromTo(
  ".P",
  {
    rotateX: -180,
    y: 50,
    transformOrigin: "center center",
    transformPerspective: 800,
  },
  { rotateX: 0, y: 0, duration: 0.8, ease: "power4.out" }
);

// i - Slide in, overlapping
tl.fromTo(
  ".i",
  { y: -80, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
  "-=0.5" // start slightly before P finishes
);

// X - multi sequence
// Intro svg
tl.fromTo(
  ".intro-svg",
  { scale: 0, y: 50, opacity: 0 },
  { scale: 1.2, y: 0, opacity: 1, duration: 0.2, ease: "back.out(2)" },
  "-=0.5" // overlap with i
).to(".intro-svg", {
  opacity: 0,
  scale: 0.5,
  duration: 0.3,
  ease: "power2.in",
});

// Letter E → X
tl.fromTo(
  ".x",
  { y: 0, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    onStart: () => (document.querySelector(".x").textContent = "n"),
  },
  "+=0.1"
);

// Flip E → X
tl.to(".x", {
  rotateY: 90,
  duration: 0.3,
  ease: "power2.in",
  onComplete: () => (document.querySelector(".x").textContent = "x"),
}).to(".x", {
  rotateY: 0,
  duration: 0.3,
  ease: "power2.out",
});

// Brace
tl.fromTo(
  ".brace",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
  "-=0.3"
);

// Start brace rotation loop
tl.add(() => {
  gsap.to(".brace", {
    rotation: "+=90",
    duration: 0.2,
    ease: "none",
    repeat: -1,
    repeatDelay: 1,
    transformOrigin: "center center",
  });
});

// l - e animation
// 1. Scale in the rounding (appears at "e" position)
tl.fromTo(
  ".rounding",
  { scale: 0, opacity: 1 },
  { scale: 1, duration: 1, ease: "back.out(1.7)" },
  "-=1"
);

// 🔄 Continuous spin while visible
gsap.to(".rounding", {
  rotation: "+=360",
  duration: 2,
  ease: "linear",
  repeat: -1,
  transformOrigin: "50% 50%",
});

// 2. E slides in FROM LEFT *and* pushes rounding at the same time
tl.fromTo(
  ".e",
  { x: -100, opacity: 0 }, // start off left and invisible
  { x: 60, opacity: 1, duration: 1.2, ease: "power2.out" },
  "+=0.3" // wait a bit after rounding shows
);

tl.to(
  ".rounding",
  {
    x: 140,
    duration: 0.8,
    ease: "power2.out",
  },
  "<"
); // "<" ensures this happens at the same time as `.e`

// 4. Drop the rounding down
tl.to(".rounding", {
  y: 80,
  opacity: 0,
  duration: 0.3,
  ease: "power2.in",
});

// 5. Reveal L from the top (AFTER rounding drops)
tl.fromTo(
  ".l",
  { y: -80, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
);

let tl2 = gsap.timeline({ delay: 2 });

// s - Drop in from top, then bounce to final position
tl2
  .fromTo(
    ".s",
    { y: -80, opacity: 0 },
    { y: 240, opacity: 1, duration: 0.8, ease: "power2.in" }
  )
  .to(".s", {
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });

// t - scale in
tl2.fromTo(
  ".t",
  {
    opacity: 0,
    scale: 0,
  },
  { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
);

tl2.fromTo(
  ".r",
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
  "-=0.5" // start slightly before P finishes
);

// r - Rotate Animation
let rtl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
rtl
  .to(".r", {
    rotateY: "+=540",
    duration: 2,
    ease: "power2.inOut",
  })
  .to({}, { duration: 3 })
  .to(".r", {
    rotateY: "+=540",
    duration: 2,
    ease: "power2.inOut",
  })
  .to({}, { duration: 3 });

// o - Drop in from top, then bounce to final position (overlapping with s)
tl2
  .fromTo(
    ".o",
    { y: -80, opacity: 0 },
    { y: 240, opacity: 1, duration: 0.8, ease: "power2.in" },
    "<+0.01"
  )
  .to(".o", {
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });

tl2
  .fromTo(
    ".e2",
    { y: -80, opacity: 0, rotate: -90 },
    { y: 20, opacity: 1, rotate: 0, duration: 0.6, ease: "power4.out" },
    "-=0.5"
  )
  .to(".e2", {
    y: 0,
    duration: 0.4,
    ease: "bounce.out",
  });

  tl2.fromTo(
    ".c",
    { y: -80, opacity: 0, rotate: -90 },
    { y: 20, opacity: 1, rotate: 0, duration: 0.6, ease: "power4.out" },
    "-=0.5"
  )
  .to(".c", {
    y: 0,
    duration: 0.4,
    ease: "bounce.out",
  });

  tl2.fromTo(
    ".e3",
    { y: -80, opacity: 0, rotate: -90 },
    { y: 20, opacity: 1, rotate: 0, duration: 0.6, ease: "power4.out" },
    "-=0.5"
  )
  .to(".e3", {
    y: 0,
    duration: 0.4,
    ease: "bounce.out",
  });

  tl2.fromTo(
    ".s2",
    { y: -80, opacity: 0, rotate: -90 },
    { y: 20, opacity: 1, rotate: 0, duration: 0.6, ease: "power4.out" },
    "-=0.5"
  )
  .to(".s2", {
    y: 0,
    duration: 0.4,
    ease: "bounce.out",
  });

// Worm Animation
gsap.set(".worm", { x: 28, y: 64 });
document.addEventListener("mousemove", (e) => {
  const baseX = 28;
  const baseY = 64;
  let normX = e.clientX / window.innerWidth - 0.5;
  let normY = e.clientY / window.innerHeight - 0.5;

  let offsetX = normX * 20;
  let offsetY = normY * 20;

  let rotate = normX * 15;

  gsap.to(".worm", {
    x: baseX + offsetX,
    y: baseY + offsetY,
    rotation: rotate,
    duration: 0.5,
    ease: "power2.out",
    transformOrigin: "center center",
  });
});
