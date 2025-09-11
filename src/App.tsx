import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Loading } from "./components/loading";
import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/fallback";


const Home = lazy(() => import("./pages/home").then(m => ({ default: m.Home })));
const AddWorkout = lazy(() => import('./pages/add-workout').then(m => ({ default: m.AddWorkout })));
const WorkoutDetails = lazy(() => import('./pages/workout-details').then(m => ({ default: m.WorkoutDetails })));
const NotFound = lazy(() => import('./pages/not-found').then(m => ({ default: m.NotFound })));


function BuggyComponent(){
  const [crash, setCrash] = useState(false)

  if(crash){
    throw new Error("erro simulado do componente")
  }

  return (
    <button onClick={() => setCrash(true)}>Clique aqui para dar erro</button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<AddWorkout />} />
              <Route path="/workout/:id" element={<WorkoutDetails />} />
              <Route path="/bug" element={<BuggyComponent />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary> 
    </BrowserRouter>
  );
}

export default App;
