# Mini Dashboard UI – Frontend Coding Challenge

**Task Requirements:**
- Top navigation bar with search input and profile avatar
- Collapsible sidebar with menu items and proper routing
- Responsive grid of user cards
- "View" button on each card that opens a modal/drawer with static user details
- Clean, modern, responsive UI with focus on layout, styling, and component structure

**Tech Stack:** React + TypeScript + Vite + Tailwind CSS + React Router + Zustand + Lucide Icons

Live Demo: https://uibysuyog.netlify.app

---

## Key Features Implemented

- Fully responsive layout (mobile-first, desktop-optimized)
- Collapsible sidebar (desktop) → overlay drawer (mobile) with smooth animations
- Client-side routing with React Router (`/`, `/users`, `/analytics`, etc.)
- Global search with context-aware placeholder and live filtering
- Async user data loading with skeleton UI
- Reusable, accessible, and beautifully styled components
- Proper Netlify SPA routing (`_redirects` configured)

---

## Project Structure

```bash
src/
├── api/                # Mock API
│   └── users.ts        # getUsers() returning static user data
│
├── components/
│   ├── layout/         # Layout structure
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── SidebarContent.tsx
│   │
│   ├── ui/             # Reusable primitive components
│   │   ├── avatar.tsx, button.tsx, card.tsx, input.tsx, modal.tsx
│   │
│   └── user/           # Domain-specific components
│       ├── UserCard.tsx
│       ├── UserGrid.tsx
│       └── UserDetailsModal.tsx
│
├── hooks/              # Custom hooks
│   └── useSidebar.ts   # Zustand store for sidebar state
│
├── stores/             # Global state
│   └── useSearchStore.ts  # Global search query (Zustand)
│
├── pages/              # Route-level pages
│   ├── Dashboard.tsx   # Main page with UserGrid
│   ├── Users.tsx       # Same grid + live search filtering
│   └── Analytics.tsx, Settings.tsx, Profile.tsx (placeholder pages)
│
├── types/              # TypeScript types
└── App.tsx             # Router setup
```
## Data Flow
```mermaid
flowchart TD
    A[getUsers()] --> B[UserGrid]
    B --> C[UserCard]
    C --> D[UserDetailsModal]

    E[Search Input] --> F[useSearchStore]
    F --> G[UserGrid]
    G --> H[Filtered Cards]
```
-   User data is fetched asynchronously from api/users.ts (mock API with delay)
-   UserGrid loads users → renders UserCard components
-   Clicking "View Details" opens a modal with full user info
-   Global search (via Zustand) instantly filters the grid on the /users and dashboard pages
-   Search placeholder changes based on current route
