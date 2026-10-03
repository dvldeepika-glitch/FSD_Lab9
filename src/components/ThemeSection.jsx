import { useTheme } from "../context/ThemeContext";

function ThemeSection() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="demo-card">
      <h3>Context API</h3>

      <p>
        The theme is shared globally using Context API without
        prop drilling.
      </p>

      <p className="theme-text">
        Current Theme: <strong>{theme}</strong>
      </p>

      <button onClick={toggleTheme}>
        {theme === "light"
          ? "🌙 Toggle Dark Theme"
          : "☀️ Toggle Light Theme"}
      </button>
    </div>
  );
}

export default ThemeSection;
