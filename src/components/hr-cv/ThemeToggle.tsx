"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Flips <html data-theme> and remembers the choice.
 *
 * Deliberately stateless: React never renders the current theme, so there
 * is nothing for the server and the client to disagree about. Both icons
 * are always in the markup and CSS hides the wrong one — a `useState`
 * holding the theme would either hydrate wrong or need a mounted-flag
 * dance, and this page has been bitten by hydration mismatches before.
 *
 * The initial value is applied by the inline script in the layout, before
 * first paint, so there is no flash of the other theme.
 */
export const ThemeToggle = () => {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("cv-theme", next);
    } catch {
      // Private mode / storage disabled: the toggle still works for this
      // page view, it just will not be remembered. Not worth surfacing.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between the dark and light theme"
      title="Switch theme"
      className="no-print surface-solid fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full shadow-premium transition-colors hover:border-[color:var(--accent)] md:right-8 md:top-8"
    >
      <Sun size={17} className="theme-icon-dark t-accent" />
      <Moon size={17} className="theme-icon-light t-accent" />
    </button>
  );
};
