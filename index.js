document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // --- MASTER TIMELINE for loading animations ---
  //   const masterTl = gsap.timeline();

  //   // 1. Navbar Animation
  //   masterTl.from("nav > *", {
  //     y: -30,
  //     opacity: 0,
  //     duration: 0.8,
  //     stagger: 0.1,
  //     ease: "power3.out",
  //   });

  // 2. Hero Section Animation
  const heroTl = gsap.timeline();
  heroTl
    .from("[data-anim='hero-badge']", {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(
      "[data-anim='hero-title']",
      { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .from(
      "[data-anim='hero-p']",
      { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
      "-=0.6"
    )
    .from(
      "[data-anim='hero-buttons'] > *",
      {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5"
    );

  //   masterTl.add(heroTl, "-=0.5");

  // 3. Pulsating Glow Effect
  gsap.utils.toArray("[data-anim='glow']").forEach((glow) => {
    gsap.to(glow, {
      scale: 1.2,
      opacity: 0.6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  // --- SCROLL-TRIGGERED ANIMATIONS ---

  // 1. Main Card Animation
  gsap.from("[data-anim='main-card']", {
    scrollTrigger: {
      trigger: "[data-anim='card-section']",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 100,
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  // 2. Features Section Animation
  gsap.utils.toArray(".feature-item").forEach((item) => {
    const text = item.querySelector("[data-anim='feature-text']");
    const image = item.querySelector("[data-anim='feature-image']");

    const featureTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Check if image is on the right or left to adjust animation direction
    if (image.classList.contains("md:order-none")) {
      featureTl
        .from(text, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          image,
          { x: 80, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
    } else {
      featureTl
        .from(image, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          text,
          { x: 80, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
    }
  });

  // 3. Section Title Animation
  gsap.utils.toArray("[data-anim='section-title']").forEach((title) => {
    let subtitle = title.querySelector("[data-anim='section-subtitle']");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.from(title, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).from(
      subtitle,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );
  });

  // 4. "How it Works" Cards Animation
  gsap.from("[data-anim='step-card']", {
    scrollTrigger: {
      trigger: "[data-anim='step-card']",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // 5. Pricing Cards Animation
  gsap.from("[data-anim='price-card']", {
    scrollTrigger: {
      trigger: "[data-anim='price-card']",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // --- FAQ Section Animation ---
  gsap.from("[data-anim='faq-item']", {
    scrollTrigger: {
      trigger: "#faq",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1, 
    ease: "power3.out",
  });

  // 6. Footer Animation
  gsap.from("[data-anim='footer'] > div", {
    scrollTrigger: {
      trigger: "[data-anim='footer']",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from("[data-anim='footer-copy']", {
    scrollTrigger: {
      trigger: "[data-anim='footer']",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  // Make all elements visible after setting up animations
  gsap.set("body", { autoAlpha: 1 });
  document
    .querySelectorAll(".gsap-hidden")
    .forEach((el) => el.classList.remove("gsap-hidden"));
});
