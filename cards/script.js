const tl = gsap.timeline({ defaults: { duration: 2.5, ease: "elastic.out(1, 0.8)" } })

tl.fromTo('.cards', { scale: 0, opacity: 0, rotation: '-360deg' },
  { scale: 1, opacity: 1, rotation: '0deg', x: 250, y: 250 })

tl.to('#ret3', { rotation: '10deg', ease: "elastic.out(1, 0.4)" }, '<')
tl.fromTo('#ret3', { rotation: '10deg' },
  { rotation: '0deg', ease: "elastic.out(1, 0.4)" }, '<')

tl.to('#ret2', { rotation: '15deg', ease: "elastic.out(3, 0.4)" }, '<')
tl.fromTo('#ret2', { rotation: '15deg' },
  { rotation: '0deg', ease: "elastic.out(3, 0.4)" }, '<')

tl.to('#ret1, #star', { rotation: '20deg', ease: "elastic.out(3, 0.4)" }, '<')
tl.fromTo('#ret1, #star', { rotation: '20deg' },
  { rotation: '0deg', ease: "elastic.out(3, 0.4)" }, '<')

// 192

const cardBlue = document.querySelector('.cards');
cardBlue.addEventListener('mouseover', () => {
  //gsap.to('#ret1', { duration: 0.5, ease: "circ.out", y: -100, rotation: '-45deg' })
  gsap.to('#ret2', { scale: 1.1, duration: 0.5, ease: "back.out(1.7)" })
})
cardBlue.addEventListener('mouseout', () => {
  //gsap.to('#ret1', { duration: 0.5, ease: "circ.out", y: 0, rotation: '0deg' })
  gsap.to('#ret2', { scale: 1, duration: 0.5, ease: "back.out(1.7)" })
})

//document.getElementById('star').classList.add('hidden');
