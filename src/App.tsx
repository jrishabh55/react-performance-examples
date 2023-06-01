import { Suspense, lazy } from 'react';
import './App.css';

const routes = {
  '/': {
    Comp: lazy(() => import('./pages/tests')),
    name: 'Home',
  },
  '/web-vital/lcp': {
    Comp: lazy(() => import('./pages/web-vital/lcp')),
    name: 'LCP',
  },
  '/web-vital/cls': {
    Comp: lazy(() => import('./pages/web-vital/cls')),
    name: 'CLS',
  },
  '/web-vital/fdi': {
    Comp: lazy(() => import('./pages/web-vital/inp')),
    name: 'INP',
  },
} as const;

type Routes = keyof typeof routes;

function App() {
  const location = window.location.pathname as Routes;

  const { Comp, name } = routes[location];

  if (Comp) {
    return (
      <div className="demo-wrapper">
        <header className="flex">
          <div className="center flex-center gap">
            <h1>React Performance Testing</h1>
            {name && <h3>:- {name}</h3>}
          </div>

          <div className="flex-center gap">
            {Object.entries(routes).map(([route, obj]) => (
              <a href={route} key={route}>
                {obj.name}
              </a>
            ))}
          </div>
        </header>
        <main className="demo-container">
          <Suspense fallback="Loading route...">
            <Comp />
          </Suspense>
        </main>
      </div>
    );
  }

  return <>No page found</>;
}

export default App;
