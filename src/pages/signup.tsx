import Image from "next/image";
import { Inter } from "next/font/google";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className=" w-3/5 p-5">
            {" "}
            {/*sign-in section */}
            <div className=" text-left font-bold">
              <span className=" text-indigo-400"> SMS </span> Marketing Agency
            </div>
            <div className=" py-10">
              <h2 className=" text-3xl font-bold text-indigo-400 mb-2">
                Sign up
              </h2>
              <div className=" border-2 w-10 border-indigo-400  inline-block mb-2"></div>
              <div className=" flex justify-center my-2">
                {/* social login section */}
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className=" text-sm " />
                </a>
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className=" text-sm " />
                </a>
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className=" text-sm " />
                </a>
              </div>
              <p className=" text-gray-400 my-3">or use your email account</p>
              <div className=" flex flex-col items-center">
                <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                  <MdOutlineDriveFileRenameOutline className=" text-gray-400 m-2" />
                  <input
                    type="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className=" bg-slate-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                  <MdOutlineDriveFileRenameOutline className=" text-gray-400 m-2" />
                  <input
                    type="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className=" bg-slate-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                  <FaRegEnvelope className=" text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" bg-slate-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className=" text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className=" bg-slate-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" flex  justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className=" border-2 border-indigo-400 text-indigo-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-indigo-400 hover:text-white "
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>{" "}
          <div className=" w-2/5 bg-indigo-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {" "}
            {/*sign-up  section */}
            <h2 className=" text-3xl font-bold mb-2">Welcome !</h2>
            <div className=" border-2 w-10 border-white inline-block mb-2"></div>
            <p className=" mb-10">
              Fill up your personal information and start you journey with us.
            </p>
            <Link
              href="/"
              className=" border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-indigo-400"
            >
              Sign in
            </Link>
          </div>{" "}
        </div>
      </main>
    </div>
  );
}
