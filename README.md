# FAV

FAV stands for Fruits and Vegetables.
FAV API to list various Fruits and Vegetables.

## REST API Specification

- Production: `https://fav.mnursahid.com`
- Local: `http://localhost:3000`

Fruits:

| Endpoint      | HTTP     | Description        |
| ------------- | -------- | ------------------ |
| `/fruits`     | `GET`    | Get all fruits     |
| `/fruits/:id` | `GET`    | Get fruit by id    |
| `/fruits`     | `POST`   | Add new fruit      |
| `/fruits`     | `DELETE` | Delete all fruits  |
| `/fruits/:id` | `DELETE` | Delete fruit by id |
| `/fruit/:id`  | `PUT`    | Update fruit by id |

Vegetables:

| Endpoint          | HTTP     | Description            |
| ----------------- | -------- | ---------------------- |
| `/vegetables`     | `GET`    | Get all vegetables     |
| `/vegetables/:id` | `GET`    | Get vegetable by id    |
| `/vegetables`     | `POST`   | Add new vegetable      |
| `/vegetables`     | `DELETE` | Delete all vegetables  |
| `/vegetables/:id` | `DELETE` | Delete vegetable by id |
| `/vegetables/:id` | `PUT`    | Update vegetable by id |

## Tech Stack

- Hono
- Bun

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
or
bun dev
```

open <http://localhost:3000>
