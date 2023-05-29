export interface Ingredient {
  name: string;
  image: string;
  ingredients?: {
    data: Ingredient;
    amount: number;
  }[];
  perCraft?: number;
}

const sulfur = {
  name: 'sulfur',
  image: '/item_images/sulfur.png',
};

const charcoal = {
  name: 'charcoal',
  image: '/item_images/charcoal.png',
};

const lowGradeFuel = {
  name: 'low grade fuel',
  image: '/item_images/low_grade_fuel.png',
};

const metalFragments = {
  name: 'metal fragments',
  image: '/item_images/metal_fragments.png',
};

const highQualityMetal = {
  name: 'high quality metal',
  image: '/item_images/high_quality_metal.webp',
};

const scrap = {
  name: 'scrap',
  image: '/item_images/scrap.webp',
};

const gunPowder: Ingredient = {
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

const explosives: Ingredient = {
  name: 'explosives',
  image: '/item_images/explosives.png',
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

const metalPipe: Ingredient = {
  name: 'metal pipe',
  image: '/item_images/metal_pipe.png',
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

export interface ItemToCraft extends Ingredient {
  gunPowderPerCraft: number;
  sulfurPerCraft: number;
}

const rocket: ItemToCraft = {
  name: 'rocket',
  image: '/item_images/rocket.png',
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

const explosiveAmmo: ItemToCraft = {
  name: 'explosive ammo',
  image: '/item_images/explosive_ammo.png',
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

export const itemsToCraft = [rocket, explosiveAmmo];
