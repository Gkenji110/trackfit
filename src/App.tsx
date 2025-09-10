import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { AddWorkout } from "./pages/add-workout";
import { WorkoutDetails } from "./pages/workout-details";
import { NotFound } from "./pages/not-found";
import { Loading } from "./components/loading";
import { lazy, Suspense } from "react";


const Home = lazy(() => 
  import("./pages/home").then(m => ({ default: m.Home })));



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddWorkout />} />
          <Route path="/workout/:id" element={<WorkoutDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
