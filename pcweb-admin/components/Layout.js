import Nav from "@components/Nav";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);
  if (!session) {
    return (
      <div className="bg-orange-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-orange-900 min-h-screen">
      <button
        onClick={() => setShowNav(true)}
        className="text-white p-2 transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <div className="flex">
        <Nav show={showNav} />
        <div className="bg-white h-full border-4 shadow-2xl border-stone-950 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
