// Coast Rescue — click a thumbnail to swap the main product image
document.addEventListener('click', function (e) {
  var thumb = e.target.closest('.thumb');
  if (!thumb) return;
  e.preventDefault();
  var product = thumb.closest('.product');
  if (!product) return;
  var main = product.querySelector('.product-media img');
  var thumbImg = thumb.querySelector('img');
  if (!main || !thumbImg) return;
  main.src = thumbImg.getAttribute('src');
  main.alt = thumbImg.getAttribute('alt') || main.alt;
  product.querySelectorAll('.thumb').forEach(function (t) { t.classList.remove('active'); });
  thumb.classList.add('active');
});
