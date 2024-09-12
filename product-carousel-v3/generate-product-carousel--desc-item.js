const prefix = "https://allnationscanna.ca/wp-content/uploads/2023-refresh";
// const prefix = "https://staging10.allnationscanna.ca/wp-content/uploads/2023-refresh";

const imgs = {
  cherry_gas: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Cherry-Gas_1920.webp" alt="" srcset="${prefix}/Cherry-Gas_320.webp 320w, ${prefix}/Cherry-Gas_640.webp 640w, ${prefix}/Cherry-Gas_960.webp 960w, ${prefix}/Cherry-Gas_1280.webp 1280w, ${prefix}/Cherry-Gas_1600.webp 1600w, ${prefix}/Cherry-Gas_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  lemon_tartz: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Lemon-Tartz_1920.webp" alt="" srcset="${prefix}/Lemon-Tartz_320.webp 320w, ${prefix}/Lemon-Tartz_640.webp 640w, ${prefix}/Lemon-Tartz_960.webp 960w, ${prefix}/Lemon-Tartz_1280.webp 1280w, ${prefix}/Lemon-Tartz_1600.webp 1600w, ${prefix}/Lemon-Tartz_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  mac_doughnut: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Mac-Doughnut_1920.webp" alt="" srcset="${prefix}/Mac-Doughnut_320.webp 320w, ${prefix}/Mac-Doughnut_640.webp 640w, ${prefix}/Mac-Doughnut_960.webp 960w, ${prefix}/Mac-Doughnut_1280.webp 1280w, ${prefix}/Mac-Doughnut_1600.webp 1600w, ${prefix}/Mac-Doughnut_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  mac_daddy: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Mac-Daddy_1920.webp" alt="" srcset="${prefix}/Mac-Daddy_320.webp 320w, ${prefix}/Mac-Daddy_640.webp 640w, ${prefix}/Mac-Daddy_960.webp 960w, ${prefix}/Mac-Daddy_1280.webp 1280w, ${prefix}/Mac-Daddy_1600.webp 1600w, ${prefix}/Mac-Daddy_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  modified_grapes: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Modified-Grapes_1920.webp" alt="" srcset="${prefix}/Modified-Grapes_320.webp 320w, ${prefix}/Modified-Grapes_640.webp 640w, ${prefix}/Modified-Grapes_960.webp 960w, ${prefix}/Modified-Grapes_1280.webp 1280w, ${prefix}/Modified-Grapes_1600.webp 1600w, ${prefix}/Modified-Grapes_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  stolo_haze: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Stolo-Haze_1920.webp" alt="" srcset="${prefix}/Stolo-Haze_320.webp 320w, ${prefix}/Stolo-Haze_640.webp 640w, ${prefix}/Stolo-Haze_960.webp 960w, ${prefix}/Stolo-Haze_1280.webp 1280w, ${prefix}/Stolo-Haze_1600.webp 1600w, ${prefix}/Stolo-Haze_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  tropic_thunder: `
  <img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Tropic-Thunder_1920.webp" alt="" srcset="${prefix}/Tropic-Thunder_320.webp 320w, ${prefix}/Tropic-Thunder_640.webp 640w, ${prefix}/Tropic-Thunder_960.webp 960w, ${prefix}/Tropic-Thunder_1280.webp 1280w, ${prefix}/Tropic-Thunder_1600.webp 1600w, ${prefix}/Tropic-Thunder_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
  `,
  blackberry_pie: `
<img class="product-carousel--grapic-img" height="1381" width="1920" src="${prefix}/Blackberry-Pie_1920.webp" alt="" srcset="${prefix}/Blackberry-Pie_320.webp 320w, ${prefix}/Blackberry-Pie_640.webp 640w, ${prefix}/Blackberry-Pie_960.webp 960w, ${prefix}/Blackberry-Pie_1280.webp 1280w, ${prefix}/Blackberry-Pie_1600.webp 1600w, ${prefix}/Blackberry-Pie_1920.webp 1920w" sizes="(max-width: 1920px) 100vw, 1920px">
`,
};

const regions = ["canada", "israel", "europe", "australia"];
const strains = [
  "tropic_thunder",
  "cherry_gas",
  "mac_doughnut",
  "stolo_haze",
  "blackberry_pie",
  "modified_grapes",
  "mac_daddy",
  "lemon_tartz",
];

let products = processProducts([{
    strain: "Tropic Thunder",
    lineage: "Maui Wowie Cross",
    type: "Sativa Dominant",
    key: "tropic_thunder",
    description: "Tropic Thunder is a sativa leaning strain bred from a Maui Wowie cross. It has bright green buds, accented by orange pistils and a frosty coating of trichomes. This strain delivers a flavour-packed experience, with intense aromas of tropical mango, pineapple, and a kick of citrus.",
    potency: {
      THC: "27-31%",
      Terpenes: "2.5-3.5%",
    },
    profile: [{
        title: "Aromas",
        description: "Mango, Pineapple, Citrus",
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Myrcene, Caryophyllene, Humulene",
      },
    ],
    hide: {
      israel: true,
      europe: true,
      australia: true,
    },
  },

  {
    strain: "CHERRY GAS",
    lineage: "Triple OG X Cherry Frosting X Gelato",
    type: "INDICA DOMINANT",
    key: "cherry_gas",
    description: "Cherry Gas is cross of Triple OG, Cherry Frosting and Gelato. This Indica leaning strain offers a unique aroma of ripe berries, stone fruit, and diesel. Cherry Gas has dense trichome covered buds, with a deep green hue accentuated with subtle touches of purple.",
    potency: {
      THC: "26-30%",
      Terpenes: "2.0-3.0%",
    },
    profile: [{
        title: "Aromas",
        description: "Berries, Fruit, Diesel",
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Myrcene, Farnesene, Caryophyllene",
      },
    ],
    hide: {
      israel: true,
      europe: true,
    },
  },

  {
    strain: "Mac Doughnut",
    lineage: "Mac 1 x Powdered Donuts",
    type: "INDICA DOMINANT",
    key: "mac_doughnut",
    description: "Mac Doughnut is cross of Mac 1 and Powdered Donuts. This Indica leaning strain offers a unique aroma of ripe citrus fruit and diesel. Mac Doughnut has dense trichome covered buds, with a deep green hue accentuated with subtle touches of purple.",
    potency: {
      THC: "26-30%",
      Terpenes: "2.0-3.0%",
    },
    profile: [{
        title: "Aromas",
        description: "Sweet, Citrus, Diesel",
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Myrcene, Farnesene, Caryophyllene",
      },
    ],

    hide: {
      canada: true,
      australia: true,
    },
  },

  {
    strain: "STÓ:LŌ HAZE",
    lineage: "Super Silver Haze X Northern Lights",
    type: "Sativa Dominant",
    key: "stolo_haze",
    description: "Stó:lō Haze comes from the Shxwhá:y First Nation Village and honors “Stó:lō”, which is the Halq’emeylem word for “river”.  Stó:lō Haze is a sativa that combines both energizing and relaxing genetics.  Explore the refreshing and boosting terpenes from Super Silver Haze crossed with the cozy body high of Northern Lights.  These buds are light green in colour with a frosty coating of trichomes, giving off aromas of earth, citrus and spice.",
    potency: {
      THC: "25-31%",
      Terpenes: "2.5-3.5%",
    },
    profile: [{
        title: "Aromas",
        description: "Earth, Citrus, Spice",
      },
      {
        title: "Dominant Terpenes",
        description: "Myrcene, Caryophyllene, Limonene, Humulene",
      },
    ],
  },

  {
    strain: "Modified Grapes",
    lineage: "GMO X Purple Punch",
    type: "Indica Dominant",
    key: "modified_grapes",
    description: "Modified Grapes is a cross between the award-winning genetics GMO and Purple Punch. This strain has a deep purple colouration, a frosty coating of trichomes, and aromas of fruit, berries, and diesel.",
    potency: {
      THC: "25-31%",
      Terpenes: "2.0-3.5%",
    },
    profile: [{
        title: "Aromas",
        description: "Fruit, Berries, Diesel",
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Caryophyllene, Pinene, Humulene",
      },
    ],

    hide: {
      israel: true,
      europe: true,
      australia: true,
    },
  },

  {
    strain: "Mac Daddy",
    lineage: "Miracle Alien Cookies X Grandaddy Purple",
    type: "Indica Dominant",
    key: "mac_daddy",
    description: "Mac Daddy is an indica leaning strain with a distinct deep purple colouration and aromas of citrus, pepper, and pine.",
    potency: {
      THC: "25-32%",
      Terpenes: "2.5-3.5%",
    },
    profile: [{
        title: "Aromas",
        description: "Citrus, Pepper, Pine",
      },
      {
        title: "Dominant Terpenes",
        description: "Myrcene, Limonene, Humulene, Farnesene",
      },
    ],

    hide: {
      europe: true,
    },
  },

  {
    strain: "Lemon Tartz",
    lineage: "Super Lemon Haze x Wedding Cake",
    type: "Indica Dominant",
    key: "lemon_tartz",
    description: "Lemon Tartz is a cross between Super Lemon Haze and Wedding Cake. This aromatic Sativa strain has a distinct citrus and gas nose. The light green buds are dense and covered by a frosty coating of trichomes.",
    potency: {
      THC: "25-31%",
      Terpenes: "2.5-4.0%",
    },
    profile: [{
        title: "Aromas",
        description: "Citrus, Gas, Fruit",
      },
      {
        title: "Dominant Terpenes",
        description: "Nerolidol, Limonene, Linalool, Caryophyllene",
      },
    ],
  },

  {
    strain: "Blackberry Pie",
    lineage: "Blackberry Widow X Crystal Locomotive",
    type: "Indica Dominant",
    key: "blackberry_pie",
    description: "Blackberry Pie is cross between Blackberry Widow and Crystal Locomotive. This Indica leaning hybrid offers a unique aroma of berries, fruit, and spice. Produced on Stó:lō traditional territory, weaving Indigenous practices with craft cultivation methods.",
    potency: {
      THC: "25-31%",
      Terpenes: "2.0-4.0%",
    },
    profile: [{
        title: "Aromas",
        description: "Berries, Fruit, Spice",
      },
      {
        title: "Dominant Terpenes",
        description: "Nerolidol, Limonene, Linalool, Caryophyllene",
      },
    ],
    hide: {
      israel: true,
      europe: true,
      australia: true,
    },
  },
  
]);







function processProducts(products) {
  function getHideValue(existingHide) {
    const hideDefaults = regions.reduce((acc, region) => {
      if (!existingHide || !existingHide.hasOwnProperty(region)) {
        acc[region] = false;
      }
      return acc;
    }, {});
    return {
      ...hideDefaults,
      ...existingHide
    };
  }

  products.forEach((product) => {
    product.hide = getHideValue(product.hide);
    product.img = imgs[product.key];
    product.index = strains.indexOf(product.key);
  });

  products.sort((a, b) => a.index - b.index);

  return products;
}

function getDescCard(product) {
  return `
  <div class="product-carousel--desc-item">
  <h5 class="product-carousel--lineage">${product.lineage}</h5>
  <h3 class="product-carousel--strain">${product.strain}</h3>
  <div class="product-carousel--type-wrapper">
    <h6 class="product-carousel--type">${product.type}</h6>
  </div>
  <p class="product-carousel--description">${product.description}</p>

  <div class="product-carousel--stats-wrapper">
    <div class="product-carousel--potency">
      <p><span class="col-accent font-weight-600">THC:</span> <span class="col-dark font-weight-500">${product.potency.THC}</span></p>
      <p><span class="col-accent font-weight-600">Terpenes:</span> <span class="col-dark font-weight-500">${product.potency.Terpenes}</span></p>
    </div>
    <div class="product-carousel--profile product-carousel--profile__default">
      <div class="product-carousel--profile-item">
        <h6 class="product-carousel--profile-title">${product.profile[0].title}:</h6>
        <p class="product-carousel--profile-description">${product.profile[0].description}</p>
      </div>
      <div class="product-carousel--profile-item">
        <h6 class="product-carousel--profile-title">${product.profile[1].title}:</h6>
        <p class="product-carousel--profile-description">${product.profile[1].description}</p>
      </div>
    </div>
  </div>

  <div class="product-carousel--profile product-carousel--profile__mobile">
    <div class="product-carousel--profile-item">
    <h6 class="product-carousel--profile-title">${product.profile[0].title}:</h6>
    <p class="product-carousel--profile-description">${product.profile[0].description}</p>
</div>
    <div class="product-carousel--profile-item">
    <h6 class="product-carousel--profile-title">${product.profile[1].title}:</h6>
    <p class="product-carousel--profile-description">${product.profile[1].description}</p>
</div>
  </div>
</div>

`;
}

function getCarousel(region, products) {
  const carouselPrefix = `
  <div class="product-carousel--graphic">

  <div class="product-carousel--background-wrapper">
    <img
      height="1828"
      width="2020"
      class="product-carousel--background-img"
      src="https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_1920.webp"
      alt=""
      srcset="
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_320.webp   320w,
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_640.webp   640w,
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_960.webp   960w,
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_1280.webp 1280w,
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_1600.webp 1600w,
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_1920.webp 1920w,
        https://allnationscanna.ca/wp-content/uploads/2023-refresh/products-background-01_2020.webp 2020w
      "
      sizes="(max-width: 2020px) 100vw, 2020px" />
  </div>

  <div class="product-carousel--graphic-list">
    `;

  const carouselSuffix = `
    </div>
  </div>
  `;

  var index = 0;

  const carouselItems = products
    .map((product) => {
      if (!product.hide[region]) {
        const result = `
        <div class="product-carousel--graphic-wrapper active" data-img="${index}">${product.img}</div>
        `;
        index++;
        return result;
      }
    })
    .join("");

  return carouselPrefix + carouselItems + carouselSuffix;
}

for (var i = 0; i < regions.length; i++) {
  const region = regions[i];

  console.log(
    `-----------------------------START OF ${region}---------------------------------------------`
  );

  console.log(getCarousel(region, products));

  for (let j = 0; j < products.length; j++) {
    const product = products[j];
    let description = getDescCard(products[j]);

    if (!product.hide[region]) {
      console.log(description);
    }
  }

  console.log(
    `-----------------------------END OF ${region}---------------------------------------------`
  );
}