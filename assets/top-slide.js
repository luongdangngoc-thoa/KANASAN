$(document).ready(function () {
  $(".js_collection_link_list").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 10,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 6,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
