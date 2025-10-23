import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export function Layout() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white mb-6 shadow">
        <div className="flex justify-between items-center px-2">
          <div className="flex flex-1 justify-center items-center p-4 gap-5">
            <Link to="/" className="text-blue-600 hover:underline font-bold">
              Home
            </Link>
            <Link to="/add" className="text-blue-600 hover:underline font-bold">
              Novo treino
            </Link>
          </div>

          <button
            className="bg-red-500 text-white font-semibold hover:cursor-pointer rounded p-2"
            onClick={() => logout}
          >
            Sair
          </button>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center px-4 w-full">
        <Outlet />
      </main>
    </div>
  );
}