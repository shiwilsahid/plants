# PLANTS

PLANTS API to list various fruits and Vegetables.

## REST API Specification

- Production: `https://fav.mnursahid.com`
- Local: `http://localhost:3000`

Plants:

| Endpoint      | HTTP     | Description        |
| ------------- | -------- | ------------------ |
| `/Plants`     | `GET`    | Get all Plants     |
| `/Plants/:id` | `GET`    | Get plant by id    |
| `/Plants`     | `POST`   | Add new plant      |
| `/Plants`     | `DELETE` | Delete all Plants  |
| `/Plants/:id` | `DELETE` | Delete plant by id |
| `/plants/:id` | `PUT`    | Update plant by id |

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
