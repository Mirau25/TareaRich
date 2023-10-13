import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { signup, isAuthenticathed, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticathed) navigate("/tasks");
  }, [isAuthenticathed, navigate]);

  const onSubmited = handleSubmit(async (values) =>{
    signup(values); //console.log(values);
  })
  return (
    <div className="bg-pink-800 max-w-md p-10 rounded-md">
      {RegisterErrors.map((error, i) => (
        <div className="bg-red-500 text-white p-2" key={i}>
          { error }
        </div>
      ))}
      <form
        onSubmit={onSubmited}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="username"
          className="w-full bg-purple-200 text-black px-4 py-4 rounded-md my-2"
        />
        {errors.username && (
          <p className="text-red-700">Username is Required</p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
          className="w-full bg-purple-200 text-black px-4 py-4 rounded-md my-2"
        />
        {errors.email && <p className="text-red-700">Email is Required</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
          className="w-full bg-purple-200 text-black px-4 py-4 rounded-md my-2"
        />
        {errors.password && (
          <p className="text-red-700">Password is Required</p>
        )}

        <button
          type="submit"
          className="bg-pink-500 hover:bg-green-500  text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
