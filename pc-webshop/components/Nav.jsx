"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { CartContext } from "./CartContext";
import { Button } from "./ui/button";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  const { cartProducts } = useContext(CartContext);
  return (
    <nav className="flex justify-around p-3">
      <div className="flex items-center hover:text-orange-300 transition-all">
        <Link href="/" className="flex flex-center">
          <h2 className="font-semibold sm:hidden md:block">PC Auctions</h2>
        </Link>
      </div>
      <div className="sm:flex sm:flex-none" hidden>
        {session?.user ? (
          <div className="flex gap-4 items-center">
            <Link href="auctions" className="link">
              Aukció
            </Link>
            <Link href="products" className="link">
              Összes termék
            </Link>
            <Link href="/cart" className="link">
              Kosár ({cartProducts.length})
            </Link>
            <Button type="button" onClick={signOut} variant="destructive">
              Kijelentkezés
            </Button>
            <Link href="Profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="proflie"
              />
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="" className="link">
              Aukció
            </Link>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  variant="outline"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="ml-2"
                >
                  Bejelentkezés
                </Button>
              ))}
          </div>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="Profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Profilom
                </Link>
                <Link
                  href="cart"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Kosár
                </Link>
                <Link
                  href="products"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Ősszes termék
                </Link>
                <Link
                  href="auctions"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Aukció
                </Link>
                <Button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Kijelentkezés
                </Button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Bejelentkezés
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
