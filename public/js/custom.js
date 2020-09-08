let card = ``;

// const spices = [
//   "BlackPepper",
//   "Cardimum",
//   "Cinnamon",
//   "Garlic",
//   "Geloy",
//   "Ginger",
//   "Honey",
//   "Jaggery",
//   "Neem",
//   "Pepper",
//   "Turmeric",
// ];

const spices = [
  {
    id: 0,
    name: "BlackPepper",
    points: [
      "Prevents Any Sort of Cancer",
      "Good for Digestion",
      "Treats Depression",
      "Vitamin B2, B6, C",
    ],
  },
  {
    id: 1,
    name: "Cardamom",
    points: [
      "Antioxidant and Diuretic Properties May Lower Blood Pressure",
      "May Contain Cancer-Fighting Compounds",
      "Vitamin B6, Vitamin C, Thiamin, Riboflavin",
      "May Treat Bad Breath and Prevent Cavities",
    ],
  },
  {
    id: 2,
    name: "Cinnamon",
    points: [
      "Antioxidant and Diuretic Properties May Lower Blood Pressure",
      "May Contain Cancer-Fighting Compounds",
      "Vitamin B6, Vitamin C, Thiamin, Riboflavin",
      "May Treat Bad Breath and Prevent Cavities",
    ],
  },
  {
    id: 3,
    name: "Garlic",
    points: [
      "Antioxidant and Diuretic Properties May Lower Blood Pressure",
      "May Contain Cancer-Fighting Compounds",
      "Vitamin B6, Vitamin C, Thiamin, Riboflavin",
      "May Treat Bad Breath and Prevent Cavities",
    ],
  },
  {
    id: 4,
    name: "Giloy",
    points: [
      "Boosts Immunity",
      "Treats Chronic Fever",
      "Improves Digestion",
      "Treats Diabetes",
      "Vitamins c, d and zinc",
    ],
  },
  {
    id: 5,
    name: "Ginger",
    points: [
      "Reduces Cold and Flu",
      "Good for Your Heart",
      "Treats Inflammation",
      "Prevents Cancer",
      "Vitamin B3, B6, C, Iron, Magnesium",
    ],
  },
  {
    id: 6,
    name: "Honey",
    points: [
      "Useful in weight Management",
      "Strengthens Immune system",
      "Nourishes your skin and face",
      "Vitamin B, Vitamin C",
      "Natural home remedy for Dandruff",
    ],
  },
  {
    id: 7,
    name: "Jaggery",
    points: [
      "Improves Digestive Health",
      "Acts as a Cleansing Agent",
      "Rich in Minerals",
      "Vitamin B6 ",
      "Prevents Anaemia",
    ],
  },
  {
    id: 8,
    name: "Neem",
    points: [
      "Antibacterial Potential",
      "Removes Head Lice",
      "Detoxifies the Body",
      "Vitamin E",
      "Fights Skin & Fungal Diseases",
    ],
  },
  {
    id: 9,
    name: "Pepper",
    points: [
      "Prevents Any Sort of Cancer",
      "Good for Digestion",
      "Prevents Constipation",
      "Treats Skin Problems",
      "Treats Depression",
      "Vitamin B2, B6, C, Copper, Iron",
    ],
  },
  {
    id: 10,
    name: "Turmeric",
    points: [
      "Antioxidant and Diuretic Properties May Lower Blood Pressure",
      "May Contain Cancer-Fighting Compounds",
      "Vitamin B6, Vitamin C, Thiamin, Riboflavin",
      "May Treat Bad Breath and Prevent Cavities",
    ],
  },
  {
    id: 11,
    name: "Exercise",
    points: [
      "Increases the production WBCs (White Blood Cells)",
      "Brief rise in body temperature during and right after exercise may prevent bacteria from growing",
      "Boosts Adrenaline",
      "Slows down the release of stress hormones",
    ],
  },
];

spices.forEach((spice) => {
  card += `
  <div class="col-lg-4 d-flex">
              <div class="blog-entry align-self-stretch">
                <p
                  class="block-20"
                  style="background-image: url('images/covid/${
                    "text" + spice.name + "Wall"
                  }.jpg');background-position: center;
                  background-size: contain;"
                >
                </p>
                <div class="text py-4 d-flex">
                  <div class="meta text-center">
                    <span class="day">${spice.id + 1}</span>
                    <span class="mos">COVID</span>
                    <span class="yr">19</span>
                  </div>
                  <div class="desc">
                    <h3 class="heading mt-2">
                      <p href="#">${spice.name}</p>
                    </h3>
                    <p>
                      <ul>
                        ${spice.points
                          .map((point) => `<li>${point}</li>`)
                          .join("")}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
  `;
});

// for (var i = 0; i < spices.length; i++) {
//   card += `
//   <div class="col-lg-4 d-flex">
//               <div class="blog-entry align-self-stretch">
//                 <a
//                   href="blog-single.html"
//                   class="block-20"
//                   style="background-image: url('images/covid/${
//                     "text" + spices[i] + "Wall"
//                   }.jpg');background-position: center;
//                   background-size: contain;"
//                 >
//                 </a>
//                 <div class="text py-4 d-flex">
//                   <div class="meta text-center">
//                     <span class="day">${i + 1}</span>
//                     <span class="mos">January</span>
//                     <span class="yr">2019</span>
//                   </div>
//                   <div class="desc">
//                     <h3 class="heading mt-2">
//                       <a href="#">Crossfit Harder Workout</a>
//                     </h3>
//                     <p>
//                       A small river named Duden flows by their place and supplies
//                       it with the necessary regelialia.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//   `;
// }

$(".healthy-grid").html(card);

// $(\".healthy-grid\").html(\"workssssssssssss!!!!!!!!!!!!!!\");
