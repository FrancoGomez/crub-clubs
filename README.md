# Crud clubs

This proyect was made as homework for class 17 of [r/Argentina Programa](https://argentinaprograma.com/).

The idea behind it was to make a server-side rendering app, using handlebars to generate the html that will be serve in the front. A front that allows you to:

    C - Create
    R - Retrive
    U - Update
    D - Delete

With every football club avaible, using the [Football Data](https://www.football-data.org/) format in the database.

## API Reference

#### Get all clubs

```http
  GET /
```

#### Get club

```http
  GET /view/items/${id}
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Club TLA |

#### Create club

```http
  POST /create/
```

Then pass, as the body, a `FormData` object that contains:

| Parameter    | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `name`       | `string` | **Required**. Club name                 |
| `area`       | `string` | **Required**. Club country              |
| `shortName`  | `string` | **Required**. How is usually called     |
| `tla`        | `string` | **Required**. Three letter abbreviation |
| `address`    | `string` | **Required**. Where it resides          |
| `venue`      | `string` | Venue of the club                       |
| `clubColors` | `string` | **Required**. Club colors               |
| `founded`    | `string` | **Required**. When was it founded       |
| `website`    | `string` | Club website                            |
| `phone`      | `string` | Club phone number                       |
| `email`      | `string` | **Required**. Club email                |
| `crest`      | `image`  | Club crest                              |

#### Update club

```http
  POST /update/${id}
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Club TLA |

Then pass, as the body, a `FormData` object that contains:

| Parameter    | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `name`       | `string` | **Required**. Club name                 |
| `area`       | `string` | **Required**. Club country              |
| `shortName`  | `string` | **Required**. How is usually called     |
| `tla`        | `string` | **Required**. Three letter abbreviation |
| `address`    | `string` | **Required**. Where it resides          |
| `venue`      | `string` | Venue of the club                       |
| `clubColors` | `string` | **Required**. Club colors               |
| `founded`    | `string` | **Required**. When was it founded       |
| `website`    | `string` | Club website                            |
| `phone`      | `string` | Club phone number                       |
| `email`      | `string` | **Required**. Club email                |
| `crest`      | `image`  | Club crest                              |

#### Delete club

```http
  DELETE /${id}
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Club TLA |

## Tech Stack

**Client:** Handlebars (HTML), CSS, JS

**Server:** Node, Express

## Run Locally

Clone the project

```bash
  git clone https://github.com/FrancoGomez/crud-clubs.git
```

Go to the project directory

```bash
  cd crud-clubs
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```
