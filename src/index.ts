import { Hono } from "hono";
import { prisma } from "./libs/prisma";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Plants API",
    plants: "/plants",
  });
});

app.get("/plants", async (c) => {
  const plants = await prisma.plant.findMany();
  return c.json(plants);
});

app.get("/plants/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    c.status(404);
    return c.json({ message: "Plant ID not found" });
  }

  const plant = await prisma.plant.findUnique({
    where: { id },
  });

  if (!plant) {
    c.status(404);
    return c.json({ message: "No plant data found" });
  }

  return c.json(plant);
});

app.delete("/plants", async (c) => {
  await prisma.plant.deleteMany();

  return c.json({
    message: "All plants has been deleted",
  });
});

app.delete("/plants/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) return c.json({ message: "Plant ID not found" });

  const deletedPlant = await prisma.plant.delete({
    where: { id },
  });

  return c.json({
    message: "Plant with ID $(id) has been deleted",
    deletedPlant,
  });
});

app.post("/plants", async (c) => {
  const body = await c.req.json();

  const newPlant = await prisma.plant.create({
    data: {
      name: body.name ? String(body.name) : "",
      latinName: body.latinName ? String(body.latinName) : "",
      family: body.family ? String(body.family) : "",
    },
  });

  return c.json(newPlant);
});

app.put("/plants/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id)
    return c.json({
      message: "Plant ID not found",
    });

  const body = await c.req.json();

  const newPlant = await prisma.plant.update({
    where: { id },
    data: {
      name: body.name ? String(body.name) : undefined,
    },
  });

  return c.json(newPlant);
});

export default app;
