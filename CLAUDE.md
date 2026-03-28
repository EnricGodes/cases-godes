# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website with simple navigation between two pages. The project is minimal and contains no build system, dependencies, or complex tooling.

## Project Structure

- **index.html** — Main landing page with a red "Siguiente" button that navigates to page2.html. Uses the Inter font from Google Fonts.
- **page2.html** — Second page displaying "hello world".

## Local Development

To serve the site locally, use Python's built-in HTTP server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Git Workflow

This project uses GitHub (EnricGodes/next-pages) for version control. **As work is completed, commit changes to git with clean, descriptive commit messages and push to GitHub.** This ensures we never lose work and maintain a clear history of changes. Each commit message should explain what changed and why, making it easy to understand the project's evolution.

## Key Constraints

- Static HTML only — no build process or transpilation needed
- No package.json or npm dependencies
- Changes are immediately visible when the HTML files are modified
