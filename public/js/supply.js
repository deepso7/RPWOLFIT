console.log("works");

let supplies = ``;

const supplyData = [
  {
    id: 0,
    imgURI: `supply/prod1`,
    name: "",
  },
  {
    id: 1,
    imgURI: `supply/prod2`,
    name: "",
  },
  {
    id: 2,
    imgURI: `supply/prod1`,
    name: "",
  },
];

supplyData.forEach((sup) => {
  supplies += `
    <div class="col-md-4">
      <div
        class="pricing-wrap img"
        style="background-image: url(images/products/${sup.imgURI}.png)"
      >
        <div class="title p-4">
          <h3>Weight Lifting</h3>
          <span>Behind the word mountains</span>
        </div>
        <div class="text p-4 d-flex align-items-end">
          <a href="#" class="btn-custom px-4 py-2">
            Enroll Now
          </a>
          <div>
            <span class="price">$240.00</span>
            <h3>
              <a href="#">Weight Lifting</a>
            </h3>
            <p>Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </div>
      </div>
    </div>;
    `;
});

console.log(supplies);

// $(".supply-container").html(supplies);
