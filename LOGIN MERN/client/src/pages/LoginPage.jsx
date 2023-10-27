import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmited = handleSubmit(async (data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-pink-800 max-w-md p-10 rounded-md">
      {signinErrors.map((error, i) => (
        <div className="bg-red-500 text-white p-2 my-2" key={i}>
          { error }
        </div>
      ))}
      <form onSubmit={onSubmited}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
          className="w-full bg-purple-200 text-black px-2 py-4 rounded-md my-2"
        />
        {errors.email && <p className="text-red-900">Email is Required</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
          className="w-full bg-purple-200 text-black px-2 py-4 rounded-md my-2"
        />
        {errors.password && (
          <p className="text-red-900">Password is Required</p>
        )}

        <button
          type="submit"
          className="bg-pink-500 hover:bg-green-500  text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
