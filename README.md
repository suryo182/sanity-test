# Sanity Test Project

This project is a monorepo containing a Next.js web application and a Sanity Studio for content management.

## Project Structure

- `web/`: Contains the Next.js frontend application.
- `sanity/`: Contains the Sanity Studio for managing content.

## Getting Started

### 1. Sanity Studio Setup

Navigate to the `sanity` directory and follow the instructions to set up your Sanity Studio.

```bash
cd sanity
npm install
npm run dev
```

### 2. Web Application Setup

Navigate to the `web` directory and follow the instructions to set up your Next.js application.

```bash
cd web
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file in the `web/` directory with your Sanity project details:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
```

Replace `YOUR_PROJECT_ID` and `YOUR_DATASET` with your actual Sanity project ID and dataset name.

## Functionality

- **Posts Display:** The homepage (`/`) fetches and displays posts from your Sanity Studio.
- **Post Details:** Clicking on a post navigates to a dynamic route (`/posts/[slug]`) displaying the individual post details.
- **UTM Tracking:** UTM parameters (`utm_source`, `utm_medium`) are captured from the URL, persisted in `localStorage`, and displayed in the footer on every page.

## Styling

- The project uses Tailwind CSS for styling.
- The theme is set to light mode.
