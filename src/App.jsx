import { routes } from './Config/Routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './Components/AppRouter/AppRouter';
import AppProvider from './Components/AppProvider/AppProvider';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {
            routes.map(route => {
              return <Route
                key={route.path}
                path={route.path}
                element={<AppRouter
                  component={route.component}
                  isPrivate={route.isPrivate}
                />}
              />
            })
          }
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
