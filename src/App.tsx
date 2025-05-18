import '@styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home.page';

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <HomePage />,
          },
        ])}
      />
    </>
  );
}

export default App;
