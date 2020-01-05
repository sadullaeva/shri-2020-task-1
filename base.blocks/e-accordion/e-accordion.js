function toggleAccordion(evt) {
  const short = evt.target.closest('.e-accordion__short');
  if (!short) return;

  const accordion = short.closest('.e-accordion');
  const more = accordion && accordion.querySelector('.e-accordion__more');
  if (!more) return;

  if (more.style.display === '' || more.style.display === 'none') {
    more.style.display = 'unset';
  } else {
    more.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', toggleAccordion);
});