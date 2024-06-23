import { Hono } from "hono";
import { dataPlants } from "./data/plants";

const app = new Hono();

let plants = dataPlants;

app.get("/", (c) => {
  return c.json({
    message: "Plants API",
    plants: "/plants",
  });
});

app.get("/plants", (c) => {
  return c.json(plants);
});

app.get("/plants/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "plant ID not found" });
  }

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return c.json({ message: "No plant data found" });
  }

  return c.json(plant);
});

export default app;
