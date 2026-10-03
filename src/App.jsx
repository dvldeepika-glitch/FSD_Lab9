import Counter from "./components/Counter";
import Posts from "./components/Posts";
import UserProfile from "./components/UserProfile";
import LiftedCounter from "./components/LiftedCounter";
import ThemeSection from "./components/ThemeSection";

function App() {
  return (
    <div className="app-content">
      <header className="header">
        <h1>React Hooks & Data Sharing</h1>

        <p>
          FSD Lab 9 – Hooks, Props, Lifting State and Context API
        </p>
      </header>

      <section className="section">
        <h2>Part A – Importance of Hooks</h2>

        <Counter />

        <Posts />
      </section>

      <section className="section">
        <h2>Part B – Sharing Data Between Components</h2>

        <UserProfile />

        <LiftedCounter />

        <ThemeSection />
      </section>

      <section className="section">
        <h2>Hooks Comparison</h2>

        <div className="comparison">
          <div>
            <h3>With Hooks</h3>
            <p>
              Functional components can manage state, side effects,
              reusable logic and shared data using simple hooks.
            </p>
          </div>

          <div>
            <h3>Without Hooks</h3>
            <p>
              Older class-based components require lifecycle methods,
              this.state and this.setState.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;