export type Item = {
  name: string;
  image: string;
  ingredients?: Ingredient[];
  perCraft?: number;
  gunPowderPerCraft?: number;
  sulfurPerCraft?: number;
};

export type Ingredient = {
  data: Item;
  amount: number;
};

const techTrash = {
  name: 'tech trash',
  image: '/item_images/tech_trash.webp',
};

const rope = {
  name: 'rope',
  image: '/item_images/rope.webp',
};

const animalFat = {
  name: 'animal fat',
  image: '/item_images/animal_fat.webp',
};

const cloth = {
  name: 'cloth',
  image: '/item_images/cloth.webp',
};

const sulfur = {
  name: 'sulfur',
  image: '/item_images/sulfur.webp',
};

const charcoal = {
  name: 'charcoal',
  image: '/item_images/charcoal.webp',
};

const metalFragments = {
  name: 'metal fragments',
  image: '/item_images/metal_fragments.webp',
};

const highQualityMetal = {
  name: 'high quality metal',
  image: '/item_images/high_quality_metal.webp',
};

const scrap = {
  name: 'scrap',
  image: '/item_images/scrap.webp',
};

const stash: Item = {
  name: 'small stash',
  image: '/item_images/small_stash.webp',
  ingredients: [
    {
      data: cloth,
      amount: 10,
    },
  ],
  perCraft: 1,
};

const lowGradeFuel: Item = {
  name: 'low grade fuel',
  image: '/item_images/low_grade_fuel.webp',
  ingredients: [
    {
      data: cloth,
      amount: 1,
    },
    {
      data: animalFat,
      amount: 3,
    },
  ],
  perCraft: 4,
};

const gunPowder: Item = {
  name: 'gun powder',
  image: '/item_images/gun_powder.webp',
  ingredients: [
    {
      data: sulfur,
      amount: 20,
    },
    {
      data: charcoal,
      amount: 30,
    },
  ],
  perCraft: 10,
};

const beancanGrenade: Item = {
  name: 'beancan grenade',
  image: '/item_images/beancan_grenade.webp',
  ingredients: [
    {
      data: metalFragments,
      amount: 20,
    },
    {
      data: gunPowder,
      amount: 60,
    },
  ],
  perCraft: 1,
};

const explosives: Item = {
  name: 'explosives',
  image: '/item_images/explosives.webp',
  ingredients: [
    {
      data: lowGradeFuel,
      amount: 3,
    },
    {
      data: metalFragments,
      amount: 10,
    },
    { data: sulfur, amount: 10 },
    {
      data: gunPowder,
      amount: 50,
    },
  ],
  perCraft: 1,
};

const metalPipe: Item = {
  name: 'metal pipe',
  image: '/item_images/metal_pipe.webp',
  ingredients: [
    {
      data: scrap,
      amount: 20,
    },
    {
      data: highQualityMetal,
      amount: 2,
    },
  ],
  perCraft: 1,
};

const molotovCocktail: Item = {
  name: 'molotov cocktail',
  image: '/item_images/molotov_cocktail.webp',
  ingredients: [
    {
      data: lowGradeFuel,
      amount: 50,
    },
    {
      data: cloth,
      amount: 10,
    },
  ],
  perCraft: 1,
};

const satchelCharge: Item = {
  name: 'satchel charge',
  image: '/item_images/satchel_charge.webp',
  ingredients: [
    {
      data: beancanGrenade,
      amount: 4,
    },
    {
      data: stash,
      amount: 1,
    },
    {
      data: rope,
      amount: 1,
    },
  ],
  perCraft: 1,
  gunPowderPerCraft: 240,
  sulfurPerCraft: 0,
};

const timedExplosiveCharge: Item = {
  name: 'timed explosive charge',
  image: '/item_images/timed_explosive_charge.webp',
  ingredients: [
    {
      data: explosives,
      amount: 20,
    },
    {
      data: cloth,
      amount: 5,
    },
    {
      data: techTrash,
      amount: 2,
    },
  ],
  perCraft: 1,
  gunPowderPerCraft: 1000,
  sulfurPerCraft: 200,
};

const incendiaryRocket: Item = {
  name: 'incendiary rocket',
  image: '/item_images/incendiary_rocket.webp',
  ingredients: [
    {
      data: explosives,
      amount: 1,
    },
    {
      data: metalPipe,
      amount: 2,
    },
    {
      data: lowGradeFuel,
      amount: 250,
    },
    {
      data: gunPowder,
      amount: 250,
    },
  ],
  perCraft: 1,
  gunPowderPerCraft: 300,
  sulfurPerCraft: 10,
};

const highVelocityRocket: Item = {
  name: 'high velocity rocket',
  image: '/item_images/high_velocity_rocket.webp',
  ingredients: [
    {
      data: metalPipe,
      amount: 1,
    },
    {
      data: gunPowder,
      amount: 100,
    },
  ],
  perCraft: 1,
};

const rocket: Item = {
  name: 'rocket',
  image: '/item_images/rocket.webp',
  ingredients: [
    {
      data: explosives,
      amount: 10,
    },
    {
      data: gunPowder,
      amount: 150,
    },
    {
      data: metalPipe,
      amount: 2,
    },
  ],
  perCraft: 1,
  gunPowderPerCraft: 650,
  sulfurPerCraft: 100,
};

const explosiveAmmo: Item = {
  name: 'explosive ammo',
  image: '/item_images/explosive_ammo.webp',
  ingredients: [
    {
      data: sulfur,
      amount: 10,
    },
    {
      data: metalFragments,
      amount: 10,
    },
    {
      data: gunPowder,
      amount: 20,
    },
  ],
  perCraft: 2,
  gunPowderPerCraft: 20,
  sulfurPerCraft: 10,
};

export const itemsToCraft = [
  rocket,
  highVelocityRocket,
  incendiaryRocket,
  timedExplosiveCharge,
  explosiveAmmo,
  satchelCharge,
  molotovCocktail,
  beancanGrenade,
];
