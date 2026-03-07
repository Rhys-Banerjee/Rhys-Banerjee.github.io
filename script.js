function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// Prevent default on nav onclick links
document.querySelectorAll('a[onclick], span[onclick]').forEach(el => {
  el.addEventListener('click', e => e.preventDefault());
});

// Lightbox
function openLightbox(src, alt) {
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt || '';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  // Only close if clicking the backdrop, not the image
  if (e && e.target.id === 'lightbox-img') return;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
});
