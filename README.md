# Astro for Magic Containers

An Astro app with actions, API routes, and Bunny CDN header detection, ready to deploy on [Bunny Magic Containers](https://bunny.net/magic-containers/).

## What's included

- `src/pages/index.astro` - Home page with interactive components
- `src/actions/index.ts` - Astro actions for random rabbit breeds and location greeting
- `src/pages/api/rabbit.ts` - API route returning a random rabbit breed
- `src/components/RabbitButton.astro` - Component demonstrating actions and API routes
- `src/components/BunnyHeaders.astro` - Server component displaying Bunny CDN request headers
- `Dockerfile` - Multi-stage build using the official Node.js image
- `docker-compose.yml` - Local development setup
- `bunny.json` - Magic Containers app config
- `.github/workflows/deploy.yml` - GitHub Actions workflow to build, push to GitHub Container Registry, and deploy to Magic Containers

## Run locally

```bash
docker compose up
```

Visit [http://localhost:4321](http://localhost:4321) and try the buttons:

- **Get Breed (Action)** - calls an Astro action to get a random rabbit breed
- **Get Breed (API Route)** - calls `/api/rabbit` to get a random rabbit breed
- **Get Location Greeting** - calls an Astro action that reads the `cdn-requestcountrycode` header

## Deploy to Magic Containers

### 1. Fork and push

Fork this repository and push to the `main` branch. The GitHub Actions workflow will automatically build the Docker image and push it to `ghcr.io/<your-username>/mc-template-astro` tagged with both `latest` and the commit SHA.

### 2. Make the package public

Go to your GitHub profile > **Packages** > select the `mc-template-astro` package > **Package settings** > change visibility to **Public**.

### 3. Create an app on Magic Containers

1. Log in to the [bunny.net dashboard](https://dash.bunny.net) and navigate to **Magic Containers**.
2. Click **Create App**.
3. Add the **app** container:
   - **Registry**: GitHub Container Registry (`ghcr.io`)
   - **Image**: `ghcr.io/<your-username>/mc-template-astro:latest`
   - Add an **Endpoint** on port `4321`
4. Confirm and deploy.

### 4. Test it

Once deployed, you'll get a `*.bunny.run` URL:

```bash
curl https://mc-xxx.bunny.run
```

The Bunny CDN headers (`cdn-requestcountrycode`, `cdn-requestid`) will be detected automatically when running behind Bunny CDN.

## Continuous deployment

The workflow automatically deploys to Magic Containers on every push to `main`. Configure the following in your repository settings:

- **Variable** `APP_ID` - your Magic Containers app ID
- **Secret** `BUNNYNET_API_KEY` - your bunny.net API key
