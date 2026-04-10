# Adaptive Sidebar Navigation

A modern, responsive admin dashboard built with React, featuring an adaptive collapsible sidebar navigation. This project demonstrates a clean UI pattern for SaaS applications and admin panels with multiple page routes and a professional component structure.

---

## Preview

The dashboard includes a dark sidebar that collapses to an icon-only rail on desktop and toggles as a full-width overlay on mobile, keeping the layout clean at any screen size.

---

## Features

- **Adaptive Sidebar** — Expands/collapses with a smooth transition; auto-closes on mobile after navigation
- **9 Page Routes** — Dashboard, Profile, Analytics, Messages, Notifications, Projects, Add New, Settings, Logout
- **Responsive Layout** — Mobile-first design using Tailwind CSS breakpoints (`sm`, `lg`)
- **Active Link Highlighting** — `NavLink` from React Router tracks the current route
- **Form Handling** — Controlled inputs with `useState` in Settings and Add New pages
- **Mock Data** — Realistic placeholder content across all pages (no backend required)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI library |
| React Router DOM | 7.x | Client-side routing |
| Tailwind CSS | 4.x | Utility-first styling |
| React Icons | 5.x | Icon library (Font Awesome) |
| Vite | 8.x | Build tool & dev server |

---

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Collapsible sidebar with nav links
│   └── SidebarLayout.jsx    # Layout wrapper (sidebar + page outlet)
├── pages/
│   ├── Home.jsx             # Dashboard with stats and activity table
│   ├── Profile.jsx          # User profile with skills and stats
│   ├── Analytics.jsx        # Traffic sources and performance metrics
│   ├── Messages.jsx         # Chat interface with message bubbles
│   ├── Notifications.jsx    # Notification list (info/success/warning/error)
│   ├── Projects.jsx         # Project cards with progress bars
│   ├── Settings.jsx         # Settings form with toggles
│   ├── AddNew.jsx           # Add new project form
│   └── Logout.jsx           # Clears token and redirects home
├── App.jsx                  # Route definitions
├── main.jsx                 # React DOM entry point
└── index.css                # Tailwind CSS import
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Stat cards (Users, Revenue, Orders, Growth) + activity table |
| `/profile` | Profile | Avatar, user info, skills badges, project/commit stats |
| `/analytics` | Analytics | Visitors, bounce rate, traffic sources, SEO score |
| `/messages` | Messages | Chat list + message thread with sent/received bubbles |
| `/notifications` | Notifications | Timestamped notification items by type |
| `/projects` | Projects | Cards with status badges and progress bars |
| `/add-new` | Add New | Form to create a project (name, description, team, status) |
| `/settings` | Settings | Username/email inputs + notification and dark mode toggles |
| `/logout` | Logout | Clears `localStorage` token, redirects to home after 1.5s |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Aghakarim-23/adaptive-sidebar-navigation.git

# Navigate into the project
cd adaptive-sidebar-navigation

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Sidebar Behavior

| State | Mobile | Desktop (sm+) |
|---|---|---|
| **Expanded** | Full-width fixed overlay | 256px (`w-64`) static panel |
| **Collapsed** | Hidden | 80px (`w-20`) icon-only rail |
| **Auto-close** | Closes on any nav link click | Stays in current state |

The toggle button is a small circular button positioned at the right edge of the sidebar. Clicking it switches between expanded and collapsed modes.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## License

MIT
