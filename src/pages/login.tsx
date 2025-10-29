import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { loginSchema, type LoginFormData } from "../schemas/login-schema";
import { WorkoutsContext } from "../context/workout-context";

export function Login() {
  const { login } = useContext(AuthContext);
  const{ fetchWorkouts } = useContext(WorkoutsContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit({ username }: LoginFormData) {
    await login(username);
    navigate("/");
    await fetchWorkouts();
  }

  return (
    <>
      <div className="w-2/7 min-h-screen p-4 flex justify-self-center justify-center bg-white shadow rounded">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <form 
            className="flex flex-col gap-3" 
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="">Digite seu nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="border rounded p-2"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}