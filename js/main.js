$(document).ready(function() {
  // Accordions
  var accordion_items_bodies = $(".accordion-item__body");
  $(accordion_items_bodies).hide();

  var accordion_items = $(".accordion-item__header");
  $(accordion_items).click(function() {
    $(this)
      .siblings(".accordion-item__body")
      .slideToggle();
    $(this).toggleClass("accodion-item__header--active");
  });

  // Smooth scrolling
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
  });
});
