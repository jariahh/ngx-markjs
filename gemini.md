# ngx-markjs Project

This project is an Angular wrapper for the `mark.js` library. It provides a directive that can be used to highlight text in a web page.

## Session Start

At the beginning of each session, read the following files to get the full project context:

*   `gemini.md`
*   `planning.md`
*   `tasks.md`

## Project Structure

The project is divided into two main parts:

*   **`@jariahdev/ngx-markjs`**: This is the Angular library that contains the `MarkjsHighlightDirective`.
*   **`ngx-markjs-demo`**: This is a demo application that shows how to use the library.

## How to build and run the project

To build the library, run the following command:

```
npm run build:lib
```

To run the demo application, run the following command:

```
npm run start
```

## Key Files

*   **`projects/ngx-markjs/src/lib/markjs-highlight.directive.ts`**: This is the main file for the library. It contains the `MarkjsHighlightDirective`, which is responsible for highlighting the text.
*   **`projects/ngx-markjs/src/lib/ngx-markjs.module.ts`**: This file defines the `NgxMarkjsModule`, which exports the `MarkjsHighlightDirective`.
*   **`src/app/app.component.ts`**: This is the main component for the demo application. It shows how to use the `MarkjsHighlightDirective`.
