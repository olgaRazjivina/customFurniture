// Карусель слайдера с дизайнерами
const owlDesiners = $("#owl-one");

owlDesiners.owlCarousel({
  items: 1,
  loop: true,
});

$(".designers-slide__btn--next").click(function () {
  owlDesiners.trigger("next.owl.carousel");
});

$(".designers-slide__btn--prev").click(function () {
  owlDesiners.trigger("prev.owl.carousel");
});

// Карусель слайдера с отзывами
const owlReviews = $("#owl-two");

owlReviews.owlCarousel({
  items: 1,
  loop: true,
});

$(".reviews__slider-control--next").click(function () {
  owlReviews.trigger("next.owl.carousel");
});

$(".reviews__slider-control--prev").click(function () {
  owlReviews.trigger("prev.owl.carousel");
});
