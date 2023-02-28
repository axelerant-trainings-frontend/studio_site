const hamburger: HTMLElement | null = document.querySelector('.hamburger');
const navbar: HTMLElement | null = document.querySelector('.navbar');
const closeBtn: HTMLElement | null = document.querySelector('.close-btn');

hamburger?.addEventListener('click', function (): void {
  hamburger.classList.toggle('open');
  navbar?.classList.toggle('hidden');
});

closeBtn?.addEventListener('click', function (): void {
  navbar?.classList.toggle('hidden');
  hamburger?.classList.toggle('open');
});
