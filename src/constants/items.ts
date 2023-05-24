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

const metalPipe = {
  name: 'metal pipe',
  image: '/item_images/metal_pipe.png',
};

export interface Item {
  name: string;
  image: string;
}

export interface ItemWithIngredients extends Item {
  ingredients: { data: Item | ItemWithIngredients; quantity: number }[];
  perCraft: number;
}

const gunPowder: ItemWithIngredients = {
  name: 'gun powder',
  image: '/item_images/gun_powder.png',
  ingredients: [
    {
      data: sulfur,
      quantity: 20,
    },
    {
      data: charcoal,
      quantity: 30,
    },
  ],
  perCraft: 10,
};

const explosives: ItemWithIngredients = {
  name: 'explosives',
  image: '/item_images/explosives.png',
  ingredients: [
    {
      data: lowGradeFuel,
      quantity: 3,
    },
    {
      data: metalFragments,
      quantity: 10,
    },
    { data: sulfur, quantity: 10 },
    {
      data: gunPowder,
      quantity: 50,
    },
  ],
  perCraft: 1,
};

export interface ItemToCraft extends Item {
  ingredients: { data: ItemWithIngredients | Item; quantity: number }[];
  perCraft: number;
}

const rocket: ItemToCraft = {
  name: 'rocket',
  image: '/item_images/rocket.png',
  ingredients: [
    {
      data: explosives,
      quantity: 10,
    },
    {
      data: gunPowder,
      quantity: 150,
    },
    {
      data: metalPipe,
      quantity: 2,
    },
  ],
  perCraft: 1,
};

const explosiveAmmo: ItemToCraft = {
  name: 'explosive ammo',
  image: '/item_images/explosive_ammo.png',
  ingredients: [
    {
      data: sulfur,
      quantity: 10,
    },
    {
      data: metalFragments,
      quantity: 10,
    },
    {
      data: gunPowder,
      quantity: 20,
    },
  ],
  perCraft: 2,
};

export const itemsToCraft = [rocket, explosiveAmmo];
