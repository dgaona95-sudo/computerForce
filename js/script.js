// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Mobile cart drawer
const cartFab = document.querySelector('.cart-fab');
const cartDrawer = document.querySelector('.cart-drawer');
const drawerOverlay = document.querySelector('#drawerOverlay');
const drawerClose = document.querySelector('.drawer-close');

function openCart() {
  if (!cartDrawer || !drawerOverlay || !cartFab) return;
  cartDrawer.classList.add('open');
  drawerOverlay.hidden = false;
  drawerOverlay.classList.add('show');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartFab.setAttribute('aria-expanded', 'true');
}

function closeCart() {
  if (!cartDrawer || !drawerOverlay || !cartFab) return;
  cartDrawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
  drawerOverlay.hidden = true;
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartFab.setAttribute('aria-expanded', 'false');
}

if (cartFab) cartFab.addEventListener('click', openCart);
if (drawerClose) drawerClose.addEventListener('click', closeCart);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeCart);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCart();
});