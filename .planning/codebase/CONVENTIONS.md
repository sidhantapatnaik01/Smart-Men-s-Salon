# Conventions
- Framework: Functional React components using hooks (`useState`, `useEffect`).
- Styling: Utility-first CSS classes directly in JSX via Tailwind.
- File Size: Currently utilizing a single, large `app.jsx` file instead of multiple split component files for ease of static serving.
- Image Loading: Lazy loading (`loading="lazy"`) enabled on most images, with eager loading strictly reserved for the hero section to optimize First Contentful Paint.
