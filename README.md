# JS Dynamic Emails Exploration

Exploring the feasibility of replicating Salesforce Marketing Cloud-like email dynamics using JavaScript.

## Project Overview
This project aims to see if we can create a dynamic approach for rendering emails with JavaScript, specifically using templates and "data extensions" (set of pre-defined data).

## Directory Structure
```bash
|-- dataExtensions/     # Data and configurations for each email template
|   |-- template1.ts
|   ...
|
|-- templates/          # EJS templates for the emails
|   |-- template1.ejs
|   ...
|
|-- logics/             # Files containing additional logic for modifying variables
|   |-- template1.ts
|   ...
|
|-- utils/              # Utility functions for parsing and processing of the logic
|   |-- parsers.ts
|
|-- index.ts            # Main server file
```

## Usage

1. Install dependencies
``` bun install ```

2. Run the development server
``` bun dev ```

3. Use the /preview-email endpoint with query parameters targetEmail and templateName to preview a dynamically generated email based on the provided template and data extension.
```http://localhost:8080/preview-email?targetEmail=jane@example.com&templateName=template1```
