export type Plant = {
  id: number;
  name: string;
  specification: specific[];
};

export type specific = {
  plantId: number;
  latinName: string;
  family: string;
  type: string;
};

export const dataPlants: Plant[] = [
  {
    id: 1,
    name: "Tomato",
    specification: [
      {
        plantId: 1,
        latinName: "Solanum lycopersicum",
        family: "Solanaceae",
        type: "vegetable",
      },
    ],
  },
];
