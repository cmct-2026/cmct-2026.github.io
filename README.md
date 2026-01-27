# CMCT 2026 Conference Website

This is the repository for the **43rd Workshop on Combinatorial Mathematics and Computation Theory (CMCT 2026)** website, held at National Yang Ming Chiao Tung University (NYCU).

## Prerequisites

- **Node.js**: Please ensure you have Node.js installed on your machine. (Recommended version: v16 or higher)
- **npm**: Comes bundled with Node.js.

## Getting Started

Follow these steps to run the website on your local machine:

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd website
    ```

2.  **Install Dependencies**:
    Run the following command to install all necessary libraries:
    ```bash
    npm install
    ```

3.  **Run Locally**:
    Start the local development server:
    ```bash
    npm run dev
    ```
    The terminal will show a local URL (usually `http://localhost:5173/`). Open this link in your browser to view the site.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The build artifacts will be generated in the `dist` directory.

## Deployment

This project is configured to deploy to **GitHub Pages**.

To deploy the latest version:

```bash
npm run deploy
```

This script builds the project and pushes the `dist` folder to the `gh-pages` branch.
