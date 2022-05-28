const tl = gsap.timeline({ defaults: { duration: 2.5 } })

tl.fromTo('.cards', { scale: 0, opacity: 0, rotation: '-360deg' }, { scale: 1, opacity: 1, rotation: '0deg', ease: "elastic.out(1, 0.8)" })