import { lazy, Suspense, useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Fallback } from "./components/fallback";
import { Layout } from "./components/layout";
import { Loading } from "./components/loading";
import { AuthContext, AuthProvider } from "./context/auth-context";
import { WorkoutsProvider } from "./context/workout-context";
import { Login } from "./pages/login";

const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);

const NotFound = lazy(() =>
  import("./pages/not-found").then((m) => ({ default: m.NotFound }))
);

const AddWorkout = lazy(() =>
  import("./pages/add-workout").then((m) => ({ default: m.AddWorkout }))
);

const WorkoutDetails = lazy(() =>
  import("./pages/workout-details").then((m) => ({ default: m.WorkoutDetails }))
);

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useContext(AuthContext);

  console.log(user);

  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <WorkoutsProvider>
      <AuthProvider>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                  <Route
                    index
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/add"
                    element={
                      <PrivateRoute>
                        <AddWorkout />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/workout/:id" element={<WorkoutDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </AuthProvider>
    </WorkoutsProvider>
  );
}

export default App;
