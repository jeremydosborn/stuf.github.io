function updateStufHero() {
  const hero = document.querySelector(".stuf-hero")
  if (!hero) return

  const rect = hero.getBoundingClientRect()
  const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)))

  document.querySelectorAll(".stuf-orbit--one").forEach((el) => {
    el.style.transform = `translateY(${-progress * 28}px) scale(${1 + progress * 0.02})`
  })

  document.querySelectorAll(".stuf-orbit--two").forEach((el) => {
    el.style.transform = `translateY(${-progress * 44}px) scale(${1 + progress * 0.03})`
  })

  document.querySelectorAll(".stuf-orbit--three").forEach((el) => {
    el.style.transform = `translateY(${-progress * 60}px) scale(${1 + progress * 0.04})`
  })

  document.querySelectorAll(".stuf-device--panel").forEach((el) => {
    el.style.transform = `translateY(${-progress * 38}px) rotate(${-8 - progress * 1.5}deg)`
  })

  document.querySelectorAll(".stuf-device--tablet").forEach((el) => {
    el.style.transform = `translateY(${-progress * 58}px) rotate(${10 + progress * 2}deg)`
  })

  document.querySelectorAll(".stuf-device--phone").forEach((el) => {
    el.style.transform = `translateY(${-progress * 72}px) rotate(${16 + progress * 2.5}deg)`
  })

  document.querySelectorAll(".stuf-foreground--back").forEach((el) => {
    el.style.transform = `translateY(${-progress * 55}px)`
  })

  document.querySelectorAll(".stuf-foreground--front").forEach((el) => {
    el.style.transform = `translateY(${-progress * 95}px)`
  })
}

document.addEventListener("scroll", updateStufHero, { passive: true })
document.addEventListener("DOMContentLoaded", updateStufHero)
document.addEventListener("DOMContentSwitch", updateStufHero)
