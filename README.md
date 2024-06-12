# FAV

FAV stands for Fruits and Vegetables.
FAV API to list various Fruits and Vegetables.

## REST API Specification

- Production: `https://fav.mnursahid.com`
- Local: `http://localhost:3000`

| Endpoint          | HTTP     | Description            |
| ----------------- | -------- | ---------------------- |
| `/fruits`         | `GET`    | Get all fruits         |
| `/vegetables`     | `GET`    | Get all vegetables     |
| `/fruits/:id`     | `GET`    | Get fruit by id        |
| `/vegetables/:id` | `GET`    | Get vegetable by id    |
| `/`               | `POST`   | Add new item           |
| `/fruits`         | `DELETE` | Delete all fruits      |
| `/vegetables`     | `DELETE` | Delete all vegetables  |
| `/fruits/:id`     | `DELETE` | Delete fruit by id     |
| `/vegetables/:id` | `DELETE` | Delete vegetable by id |
| `/fruit/:id`      | `PUT`    | Update fruit by id     |
| `/vegetables/:id` | `PUT`    | Update vegetable by id |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

```sh
bun dev
```

open http://localhost:3000
