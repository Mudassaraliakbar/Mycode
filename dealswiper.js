document.addEventListener("DOMContentLoaded", function () {
    const dealSwiper = new Swiper(".deal-swiper ", {
      // Responsive slides per view
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 12,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 12,
        },
        1200: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 12,
        },
      },
    });
  });


//   deals section

  function getTotalRemainingHours(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());

    if (total <= 0) return 0;

    const totalHours = Math.floor(total / (1000 * 60 * 60));
    return totalHours;
  }

  const secureDeal = document.getElementById("secure-deal");
  deal
    .filter((item) => item.deal_status == "Secure").slice(0, 5)
    .forEach((item) => {
      const timeRemaining = getTotalRemainingHours(item.end_time);

      secureDeal.innerHTML += `
  <div class="swiper-slide">
    <div class="card rounded-4 border-0 position-relative " >
      <div class="position-relative h-100">
        <span class="badge position-absolute top-0 start-0 rounded-pill fw-normal">
          ${item.deal_type}
        </span>
        <img
          loading="lazy"
          src="${item.image}"
          class="card-img-top rounded-4 h-100 w-100 object-fit-cover"
          alt="${item.product_name}"
        />
      </div>
      <div class="card-body w-100 text-white px-2 px-xl-3 position-absolute bottom-0 py-0" style="background: linear-gradient(7.1deg, rgba(0, 0, 0, 0) 53.52%, rgba(0, 0, 0, 0.24) 88.93%);">
        <div class="d-flex py-3 card-details gap-3">
          <div class="card-pricing">
            <h5 class="card-title fw-bold d-flex align-items-center gap-1">
              CHF <span class="text-truncate">${item.deal_price}</span>
            </h5>
            <p class="card-text fw-semibold text-truncate">
              ${item.product_name}
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-end gap-1 card-time-secure">
            <div class="card-timer fw-normal p-1 d-flex flex-column align-items-center h-100">
              <span class="fw-bold">${timeRemaining}</span>Hours
            </div>
            <a href="dealdetail.html?id=${item.id}" class="btn h-100 text-white fw-normal">
              Secure now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
    });
  const upcomingDeal = document.getElementById("upcoming-deal");
  deal
    .filter((item) => item.deal_status == "Upcoming").slice(0, 5)
    .forEach((item) => {
      const timeRemaining = getTotalRemainingHours(item.end_time);

      upcomingDeal.innerHTML += `
    <div class="swiper-slide">
    <div class="card rounded-4 border-0 position-relative">
      <div class="position-relative h-100">
        <span class="badge position-absolute top-0 start-0 rounded-pill fw-normal">
          ${item.deal_type}
        </span>
        <img
          loading="lazy"
          src="${item.image}"
          class="card-img-top rounded-4 h-100 w-100 object-fit-cover"
          alt="${item.product_name}"
        />
      </div>
      <div class="card-body w-100 text-white px-2 px-xl-3 position-absolute bottom-0 py-0" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42.69%, rgba(0, 0, 0, 0.3) 81.83%);">
        <div class="d-flex py-3 card-details gap-3">
          <div class="card-pricing">
            <h5 class="card-title fw-bold d-flex align-items-center gap-1">
              CHF <span class="text-truncate">${item.deal_price}</span>
            </h5>
            <p class="card-text fw-semibold text-truncate" >
              ${item.product_name}
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-end gap-1 card-time-secure">
            <div class="card-timer fw-normal p-1 d-flex flex-column align-items-center h-100">
              <span class="fw-bold">${timeRemaining}</span>Hours
            </div>
            <a href="dealdetail.html?id=${item.id}" class="btn h-100 text-white fw-normal">
              Upcoming
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
    });