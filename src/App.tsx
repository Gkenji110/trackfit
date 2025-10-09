import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fallback } from "./components/fallback";
import { Layout } from "./components/layout";
import { Loading } from "./components/loading";



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


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="/add" element={<AddWorkout />} />
              <Route path="/workout/:id" element={<WorkoutDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary> 
    </BrowserRouter>
  );
}

export default App;
