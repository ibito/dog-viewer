# Dog Viewer

Small app that displays random dog images using the [dog API](https://dog.ceo).

This is a coding exercies focused on clean architecture, state management and component design.

## Tech Stack
- React 
- TypeScript
- Vite
- Vitest + Testing Library
- CSS Modules

## Features
- Display random dog image as a main image
- Show 10 random thumbnails
- Able to select dog from thumbnails
- Favorites list and management
- Hover animation on thumbnails
- Error handling for API calls
- Basic unit test

## Design decisions
- Single custom hook (`useDogs`) manages the main state of the app
- Favorites are stored in local state
- API responses are transformed into a `Dog`type using utility functions
- Components are kept presentational and receive data via props

## Future improvements
- Persist favorites in localStorage
- Imrpove layout
- Add better error UI

## How to run
- Install dependencies:
```
npm install
```

Run dev server:
```
npm run dev
```

Run tests:
```
npm run test
```

