# Web Application (Next.js)

This directory contains the Next.js frontend application for the Sanity Test Project.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    Create a `.env.local` file in this directory (`web/`) with your Sanity project details:

    ```
    NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_PROJECT_ID"
    NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
    ```

    Replace `YOUR_PROJECT_ID` and `YOUR_DATASET` with your actual Sanity project ID and dataset name.

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Features

-   **Post Listing:** Displays a list of posts fetched from the Sanity Studio on the homepage.
-   **Post Detail Pages:** Clicking on a post navigates to a dedicated page (`/posts/[slug]`) showing more details.
-   **UTM Tracking:** Captures `utm_source` and `utm_medium` parameters from the URL, persists them in `localStorage`, and displays them in the footer across all pages.

## Styling

-   Uses Tailwind CSS for utility-first styling.
-   The application has a light theme.

## Project Structure

-   `src/app/`: Next.js App Router pages and layout.
-   `lib/`: Sanity client configuration.