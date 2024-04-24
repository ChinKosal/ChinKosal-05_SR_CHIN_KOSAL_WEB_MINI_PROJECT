"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const loginPage = () => {
  const router = useRouter();
  // const { handleSubmit, reset, register } = useForm();

  const onSubmit = async (data) => {
    const loginInfo = {
      email: data.get("email"),
      password: data.get("password"),
    };
    // calling sign in function that provide by NextAuth
    const res = await signIn("credentials", {
      redirect: false,
      ...loginInfo,
      callbackUrl: "/login",
    });
    // After login success we may want to go somewhere
    if (res.ok) {
      router.push("/todo-list");
    }
  };
  return (
    <main>
      <div className="h-full bg-gray-400 dark:bg-gray-900">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url(${"https://source.unsplash.com/Mv9hjnEUHR4/600x800"})`,
                }}
              ></div>

              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Welcome!
                </h3>
                <form
                  action={onSubmit}
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                >
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full mb-4 md:flex md:justify-between">
                    <div className="w-full mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                      />
                      <p className="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Login Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  {/* <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div> */}
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="./index.html"
                    >
                      if you don't have an account? please register!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default loginPage;
