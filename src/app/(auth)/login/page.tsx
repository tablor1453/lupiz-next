"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {};

  return (
    <div className="flex justify-center w-screen items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center ">
        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
          LOGIN
        </h1>
        <form onSubmit={handleLogin}></form>
        <div className="w-3/4 mb-6">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="User Name"
          />
        </div>
        <div className="w-3/4 mb-6">
          <input
            type="password"
            name="password"
            id="password"
            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
            placeholder="Password"
          />
        </div>
        <div className="w-3/4 flex flex-row justify-between">
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              name="remember"
              id=""
              className=" w-4 h-4  "
            />
            <label htmlFor="" className="text-sm text-slate-400">
              Remember me
            </label>
          </div>
          <div>
            <a href="#" className="text-sm text-slate-400 hover:text-blue-500">
              Forgot?
            </a>
          </div>
        </div>

        <div className="w-3/4 mt-4">
          <button
            onClick={() => router.push("/")}
            className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
          >
            {" "}
            LOGIN
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
