export function Login() {
  return (
    <>
      <div className="max-w-sm mx-auto p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <form className="flex flex-col gap-3">
          <label htmlFor="">Digite seu nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="border rounded p-2"
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}