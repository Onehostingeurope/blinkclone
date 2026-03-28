# AI Rules for Blink-TS App

## Tech Stack

- **React 19.2.4** - Modern React with latest features for building UI components
- **TypeScript 5.9** - Type-safe development with strict typing for all code
- **Vite 8.0** - Fast build tool and development server for optimal DX
- **React Router 6.30** - Client-side routing with declarative navigation
- **Custom CSS Architecture** - CSS variables-based theming with custom utility classes in `src/index.css`
- **Geist Font Family** - Primary typography using Geist and Geist Mono from Google Fonts
- **ESLint** - Code linting and quality enforcement
- **Lucide React** - Icon library for consistent iconography (available but install if needed)

## Library Usage Rules

### UI & Styling
- **NO Tailwind CSS** - This project uses custom CSS with CSS variables. Use inline styles or CSS classes defined in `src/index.css`
- **NO shadcn/ui** - This project does not use shadcn components. Build custom components as needed
- **Styling Approach**: Use CSS variables from `src/index.css` for theming (e.g., `var(--bg)`, `var(--text)`, `var(--teal)`)
- **Inline Styles**: Acceptable for component-specific styling, especially for dynamic values
- **CSS Variables**: Reference existing variables before creating new ones

### Routing
- **React Router** only for routing - no other routing libraries
- Keep all route definitions in `src/App.tsx`
- Use `<Route>` components with `path` and `element` props
- Handle 404s with a wildcard route (`path="*"`) that redirects appropriately

### State Management
- Use React's built-in hooks (`useState`, `useContext`, `useReducer`, etc.)
- No external state management libraries (Redux, Zustand, etc.) unless explicitly requested

### Forms & Validation
- Use controlled components with React state
- No external form libraries (React Hook Form, Formik, etc.) unless explicitly requested

### Data Fetching
- Use native `fetch` API or browser `fetch`
- No data fetching libraries (Axios, React Query, etc.) unless explicitly requested

### Icons
- Use `lucide-react` for icons (install with `dyad-add-dependency` if not present)
- Import icons individually for tree-shaking

## Code Organization

### File Structure
- **Pages**: All page components in `src/pages/`
- **Components**: Reusable components in `src/components/`
- **Types**: TypeScript types and interfaces in `src/types/index.ts`
- **Styles**: Global styles and CSS variables in `src/index.css`
- **Assets**: Images, SVGs in `src/assets/` and `public/`

### Component Rules
- Create a new file for every new component or hook
- Do not add multiple components to a single file
- Aim for components under 100 lines - refactor larger ones
- Use TypeScript interfaces for all props

### Page Rules
- Main landing page is `src/pages/Landing.tsx`
- Route-specific pages like Dashboard, Admin, etc., in `src/pages/`
- Update `src/App.tsx` when adding new pages with routes

## Development Guidelines

- **Type Safety**: All files must be TypeScript (`.tsx` or `.ts`)
- **Functional Components**: Use functional components with hooks only
- **Error Handling**: Let errors bubble up - don't catch unless specifically requested
- **Responsive Design**: Always make components responsive using CSS
- **Simplicity**: Keep implementations simple and elegant - avoid over-engineering
- **No Placeholders**: Implement complete, functional features - no TODOs or partial code

## Installation & Dependencies

- When adding new packages, use `dyad-add-dependency`
- Always check `package.json` before assuming a package exists
- Install third-party packages if they're not listed in dependencies