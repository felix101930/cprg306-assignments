"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600"
          >
            Logout
          </button>
          <br />
          <Link
            href="/week-9/shopping-list"
            className="text-blue-400 hover:underline mt-4 inline-block"
          >
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login with GitHub
        </button>
      )}
    </main>
  );
}