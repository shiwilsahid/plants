import { Hono } from "hono";
import { dataFruits } from "./data/fruits";
import { dataVegetables } from "./data/vegetables";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "FAV API",
    fruits: "/fruits",
    vegetables: "/vegetables",
  });
});

app.get("/fruits", (c) => {
  return c.json(dataFruits);
});

app.get("/vegetables", (c) => {
  return c.json(dataVegetables);
});

app.get("/fruits/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "ID not found" });
  }

  const fruit = dataFruits.find((fruit) => fruit.id === id);

  if (!fruit) {
    return c.json({ message: "No fruit data found" });
  }

  return c.json(fruit);
});

app.get("/vegetables/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "ID not found" });
  }

  const vegetable = dataVegetables.find((vegetable) => vegetable.id === id);

  if (!vegetable) {
    return c.json({ message: "No vegetable data found" });
  }

  return c.json(vegetable);
});

export default app;
