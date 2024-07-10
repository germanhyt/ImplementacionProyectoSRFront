const Login = () => {
  return (
    <div className="">
      {/* Formulario de Login */}
      <div className="flex justify-center items-center h-screen w-screen ">
        <div className="flex flex-col gap-4 shadow-lg p-20 rounded-md">
          <h1 className="text-4xl  text-center">Iniciar Sesión</h1>
          <input
            type="text"
            placeholder="Correo Electrónico"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <button
            className="
                bg-primary-dark
                text-primary-light
                font-bold
                py-2
                px-4
                rounded-md"
            type="button"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
