## User Management + Analytics Dashboard

Mini admin dashboard built with **React + TypeScript + Vite**.

It includes:

- Users list with filters, sorting and pagination
- User details with editable profile information
- Analytics overview with simple charts
- Light / dark theme toggle

---

## How to run the project

### Prerequisites

- Node.js 18+ and npm installed

### Local setup

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Run type-check + production build
npm run build

# Preview production build
npm run preview
```

---

## Main libraries used

- **React 19 + TypeScript** – UI and type safety
- **Vite** – build tool and dev server
- **React Router DOM** – routing between `/users`, `/users/:id`, `/analytics`
- **Zustand** – global state management for user filters, user list, and theme
- **Recharts** – charts on the Analytics page
- **ESLint** – linting via the default Vite React + TS setup

---

## Architecture overview

### High-level structure

- `src/main.tsx` – React entry point, wraps the app with `BrowserRouter`.
- `src/App.tsx` – defines routes and nests everything under the shared `AppLayout`.
- `src/components/` – reusable UI primitives and layout:
  - `components/layout/AppLayout.tsx` – top navigation, theme toggle, shared shell.
  - `components/ui/*` – small building blocks: `Button`, `Card`, `Table`, `Pagination`, `Input`, `Select`, `Badge`, `Modal`.
- `src/routes/` – feature-level pages:
  - `UsersPage.tsx` – table of users with search, status filter, sorting and pagination.
  - `UserDetailsPage.tsx` – profile card, activity summary, last actions, and edit modal.
  - `AnalyticsPage.tsx` – signup trend line chart and active vs inactive donut chart.
- `src/data/users.ts` – static JSON-like array of user objects (no external API).
- `src/store/` – global state:
  - `usersStore.ts` – holds users list and filters (search, status, sort, pagination) + `updateUser` for local edits.
  - `uiStore.ts` – UI-level state such as `darkMode`.

### State management choices

- **Zustand** is used instead of Redux/Context because it keeps the store small and ergonomic:
  - Users list and filters are global so they are shared between list and details pages.
  - Updating a user in the details modal immediately reflects in the list.
  - Theme state is global so the layout can toggle light/dark mode from anywhere.

### UI & theming

- Light and dark themes are implemented with **CSS custom properties**:
  - `.app` defines the light palette (backgrounds, borders, text, primary color).
  - `.app.app-dark` overrides those variables for the dark palette.
  - UI components consume only these tokens (`--color-bg`, `--color-elevated`, `--color-border`, etc.), so they automatically adapt to the current theme.
- Layout is responsive with fluid widths and scroll-friendly cards/tables.

