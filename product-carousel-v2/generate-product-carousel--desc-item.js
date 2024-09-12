// let products = [
//   {
//     lineage: "Maui Wowie Cross",
//     strain: "Tropic Thunder",
//     type: "Sativa Dominant",
//     description:
//       "Tropic Thunder is a sativa leaning strain bred from a Maui Wowie cross. It has bright green buds, accented by orange pistils and a frosty coating of trichomes. This strain delivers a flavour-packed experience, with intense aromas of tropical mango, pineapple, and a kick of citrus.",
//     potency: {
//       THC: "27-31%",
//       Terpenes: "2.5-3.5%",
//     },
//     profile: [
//       {
//         title: "Aromas",
//         description: "Mango, Pineapple, Citrus",
//       },
//       {
//         title: "Dominant Terpenes",
//         description: "Limonene, Myrcene, Caryophyllene, Humulene",
//       },
//     ],
//   },

//   {
//     lineage: "Triple OG X Cherry Frosting X Gelato",
//     strain: "CHERRY GAS",
//     type: "INDICA DOMINANT",
//     description:
//       "Cherry Gas is cross of Triple OG, Cherry Frosting and Gelato. This Indica leaning strain offers a unique aroma of ripe berries, stone fruit, and diesel. Cherry Gas has dense trichome covered buds, with a deep green hue accentuated with subtle touches of purple.",
//     potency: {
//       THC: "26-30%",
//       Terpenes: "2.0-3.0%",
//     },
//     profile: [
//       {
//         title: "Aromas",
//         description: "Berries, Fruit, Diesel",
//       },
//       {
//         title: "Dominant Terpenes",
//         description: "Limonene, Myrcene, Farnesene, Caryophyllene",
//       },
//     ],
//   },

//   {
//     lineage: "Super Silver Haze X Northern Lights",
//     strain: "STÓ:LŌ HAZE",
//     type: "Sativa Dominant",
//     description:
//       "Stó:lō Haze comes from the Shxwhá:y First Nation Village and honors “Stó:lō”, which is the Halq’emeylem word for “river”.  Stó:lō Haze is a sativa that combines both energizing and relaxing genetics.  Explore the refreshing and boosting terpenes from Super Silver Haze crossed with the cozy body high of Northern Lights.  These buds are light green in colour with a frosty coating of trichomes, giving off aromas of earth, citrus and spice.",
//     potency: {
//       THC: "25-31%",
//       Terpenes: "2.5-3.5%",
//     },
//     profile: [
//       {
//         title: "Aromas",
//         description: "Earth, Citrus, Spice",
//       },
//       {
//         title: "Dominant Terpenes",
//         description: "Myrcene, Caryophyllene, Limonene, Humulene",
//       },
//     ],
//   },
//   {
//     lineage: "GMO X Purple Punch",
//     strain: "Modified Grapes",
//     type: "Indica Dominant",
//     description:
//       "Modified Grapes is a cross between the award-winning genetics GMO and Purple Punch. This strain has a deep purple colouration, a frosty coating of trichomes, and aromas of fruit, berries, and diesel.",
//     potency: {
//       THC: "25-31%",
//       Terpenes: "2.0-3.5%",
//     },
//     profile: [
//       {
//         title: "Aromas",
//         description: "Fruit, Berries, Diesel",
//       },
//       {
//         title: "Dominant Terpenes",
//         description: "Limonene, Caryophyllene, Pinene, Humulene",
//       },
//     ],
//   },
//   {
//     lineage: "Miracle Alien Cookies X Grandaddy Purple",
//     strain: "Mac Daddy",
//     type: "Indica Dominant",
//     description: "Mac Daddy is an indica leaning strain with a distinct deep purple colouration and aromas of citrus, pepper, and pine.",
//     potency: {
//       THC: "25-32%",
//       Terpenes: "2.5-3.5%",
//     },
//     profile: [
//       {
//         title: "Aromas",
//         description: "Citrus, Pepper, Pine",
//       },
//       {
//         title: "Dominant Terpenes",
//         description: "Myrcene, Limonene, Humulene, Farnesene",
//       },
//     ],
//   },

//   {
//     lineage: "Super Lemon Haze x Wedding Cake",
//     strain: "Lemon Tartz",
//     type: "Indica Dominant",
//     description:
//       "Lemon Tartz is a cross between Super Lemon Haze and Wedding Cake. This aromatic Sativa strain has a distinct citrus and gas nose. The light green buds are dense and covered by a frosty coating of trichomes.",
//     potency: {
//       THC: "25-31%",
//       Terpenes: "2.5-4.0%",
//     },
//     profile: [
//       {
//         title: "Aromas",
//         description: "Citrus, Gas, Fruit",
//       },
//       {
//         title: "Dominant Terpenes",
//         description: "Nerolidol, Limonene, Linalool, Caryophyllene",
//       },
//     ],
//   },
// ];

// lemon_tartz: {
//   title: ,
//   description: ,
//   lineage: {
//   },
// },

let products = [
  {
    lineage: "Maui Wowie Cross",
    strain: "Tropic Thunder",
    type: "Sativa Dominant",
    description:
      "Tropic Thunder is a sativa leaning strain bred from a Maui Wowie cross. It has bright green buds, accented by orange pistils and a frosty coating of trichomes. This strain delivers a flavour-packed experience, with intense aromas of tropical mango, pineapple, and a kick of citrus.",
    potency: {
      THC: "27-31%",
      Terpenes: "2.5-3.5%",
    },
    profile: [
      {
        title: "Aromas",
        description: "Mango, Pineapple, Citrus",
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Myrcene, Caryophyllene, Humulene",
      },
    ],
  },

  {
    lineage: {
      default: "Triple OG X Cherry Frosting X Gelato",
      israel: "Mac 1 x Powdered Donuts",
      europe: "Mac 1 x Powdered Donuts",
    },
    strain: {
      default: "CHERRY GAS",
      israel: "Mac Doughnut",
      europe: "Mac Doughnut",
    },
    type: "INDICA DOMINANT",
    description: {
      default:
        "Cherry Gas is cross of Triple OG, Cherry Frosting and Gelato. This Indica leaning strain offers a unique aroma of ripe berries, stone fruit, and diesel. Cherry Gas has dense trichome covered buds, with a deep green hue accentuated with subtle touches of purple.",
      israel:
        "Mac Doughnut is cross of Mac 1 and Powdered Donuts. This Indica leaning strain offers a unique aroma of ripe citrus fruit and diesel. Mac Doughnut has dense trichome covered buds, with a deep green hue accentuated with subtle touches of purple.",
      europe:
        "Mac Doughnut is cross of Mac 1 and Powdered Donuts. This Indica leaning strain offers a unique aroma of ripe citrus fruit and diesel. Mac Doughnut has dense trichome covered buds, with a deep green hue accentuated with subtle touches of purple.",
    },
    potency: {
      THC: "26-30%",
      Terpenes: "2.0-3.0%",
    },
    profile: [
      {
        title: "Aromas",
        description: {
          default: "Berries, Fruit, Diesel",
          israel: "Sweet, Citrus, Diesel",
          europe: "Sweet, Citrus, Diesel",
        },
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Myrcene, Farnesene, Caryophyllene",
      },
    ],
  },

  {
    lineage: "Super Silver Haze X Northern Lights",
    strain: "STÓ:LŌ HAZE",
    type: "Sativa Dominant",
    description:
      "Stó:lō Haze comes from the Shxwhá:y First Nation Village and honors “Stó:lō”, which is the Halq’emeylem word for “river”.  Stó:lō Haze is a sativa that combines both energizing and relaxing genetics.  Explore the refreshing and boosting terpenes from Super Silver Haze crossed with the cozy body high of Northern Lights.  These buds are light green in colour with a frosty coating of trichomes, giving off aromas of earth, citrus and spice.",
    potency: {
      THC: "25-31%",
      Terpenes: "2.5-3.5%",
    },
    profile: [
      {
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
    lineage: "GMO X Purple Punch",
    strain: "Modified Grapes",
    type: "Indica Dominant",
    description:
      "Modified Grapes is a cross between the award-winning genetics GMO and Purple Punch. This strain has a deep purple colouration, a frosty coating of trichomes, and aromas of fruit, berries, and diesel.",
    potency: {
      THC: "25-31%",
      Terpenes: "2.0-3.5%",
    },
    profile: [
      {
        title: "Aromas",
        description: "Fruit, Berries, Diesel",
      },
      {
        title: "Dominant Terpenes",
        description: "Limonene, Caryophyllene, Pinene, Humulene",
      },
    ],
  },
  {
    lineage: "Miracle Alien Cookies X Grandaddy Purple",
    strain: "Mac Daddy",
    type: "Indica Dominant",
    description: "Mac Daddy is an indica leaning strain with a distinct deep purple colouration and aromas of citrus, pepper, and pine.",
    potency: {
      THC: "25-32%",
      Terpenes: "2.5-3.5%",
    },
    profile: [
      {
        title: "Aromas",
        description: "Citrus, Pepper, Pine",
      },
      {
        title: "Dominant Terpenes",
        description: "Myrcene, Limonene, Humulene, Farnesene",
      },
    ],
  },

  {
    lineage: {
      default: "Super Lemon Haze x Wedding Cake",
      europe: "Trainwreck x Hawaiian",
    },
    strain: {
      default: "Lemon Tartz",
      europe: "Pineapple Express",
    },
    type: "Indica Dominant",
    description: {
      default:
        "Lemon Tartz is a cross between Super Lemon Haze and Wedding Cake. This aromatic Sativa strain has a distinct citrus and gas nose. The light green buds are dense and covered by a frosty coating of trichomes.",
      europe:
        "Pineapple Express is a cross between Trainwreck and Hawaiian. This aromatic Sativa strain has a distinct citrus and pineapple nose. The light green buds are dense and covered by a frosty coating of trichomes.",
    },
    potency: {
      THC: "25-31%",
      Terpenes: "2.5-4.0%",
    },
    profile: [
      {
        title: "Aromas",
        description: {
          default: "Citrus, Gas, Fruit",
          europe: "Citrus, Pineapple, Pine.",
        },
      },
      {
        title: "Dominant Terpenes",
        description: "Nerolidol, Limonene, Linalool, Caryophyllene",
      },
    ],
  },
];





for (let i = 0; i < products.length; i++) {
  let product = products[i];

  let productHTML = `
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

  console.log(productHTML);
}
