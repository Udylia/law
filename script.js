const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })
})
removeFocus = () => {
    items.forEach(item => {
        item.classList.remove('selected');
    })
}

gsap.from(".price-list", {delay: 2, duration: 2, x: 400, ease: "power2.inOut", opacity: 0})
gsap.from(".credo", {delay: 1, duration: 2, x: -400, ease: "power2.inOut", opacity: 0})
gsap.from(".price-name", {delay: 3, duration: 2, opacity: 0, rotation: 720})
gsap.from(".begin", {delay: 1, duration: 3, x: 400, ease: "power2.inOut", opacity: 0})
gsap.from(".logo", {delay: 1.5, duration: 2, opacity: 0, rotation: 720})