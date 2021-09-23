# Endangered Animals Project With PostgreSQL, Express, and React

End-to-end React app backed by an Express API server, persisting data to
PostgreSQL database. The project has a very simple interface that fetches data
from a multiple tables in the database, allows you to add rows to the tables, 
filter and sort data in the table.

[See the app in action][live].


## Prerequisites

### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew][] on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website][docker-www]

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

### Node

You'll need to install Node v14 or above. [`nvm`][nvm] is highly recommended.

## Set Up the Development Environment

### Install NPM Packages

```sh
npm install
```

### Set Up `postgres` User Password and Database Name

We need to set up couple pieces of information in order to start a new
PostgreSQL server instance, as well as to connect to it later from the Express
server.

1. Copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more
information][dh-postgres].

### Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

## Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm run db:stop` to stop and destroy the PostgreSQL Docker container. Don't
   worry, your data is safe.

## Need to Start a `psql` Session?

```sh
npm run psql
```

## Want More Details?

- [Read about the application stack](docs/application-stack.md).
- [Read about the Express server](server/README.md).
- [Read about the React app](app/README.md).

## Deployment

[Read about setting up and deploying to Heroku](docs/deployment.md).

[deploy-workflow]: https://github.com/gsong/express-react-project-example/actions/workflows/deploy.yaml
[dh-postgres]: https://hub.docker.com/_/postgres
[docker-www]: https://docs.docker.com/get-docker/
[homebrew]: https://brew.sh
[live]: http://mighty-scrubland-34886.herokuapp.com/
[nvm]: https://github.com/nvm-sh/nvm
[reset-badge]: https://github.com/gsong/express-react-project-example/actions/workflows/reset-db.yml/badge.svg
[reset-workflow]: https://github.com/gsong/express-react-project-example/actions/workflows/reset-db.yml

## Contributors ✨


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/malikasen">Main contributor: Malika Kassen-Lao</a></td>
    <td align="center"><a href="https://github.com/aedward8">Starter code: Abigail Edwards</a></td>
    <td align="center"><a href="http://blog.ndpsoftware.com/">Starter code: Andrew Peterson</a></td>
    <td align="center"><a href="https://github.com/carbonsoda">Starter code: Avery</a></td>
    <td align="center"><a href="https://github.com/sunnybrie">Starter code: Brie Klassen</a></td>
    <td align="center"><a href="https://github.com/gsong">Starter code: George Song</a></td>
    <td align="center"><a href="https://github.com/m3ia">Starter code: Meia</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. 
