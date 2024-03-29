import Layout from "@components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session || !session.user) {
    return (
      <Layout>
        <div>
          Loading...
          <Layout />
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="text-orange-900 flex justify-between">
        <h2>
          Hello,<b>{session.user.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-2xl overflow-hidden max">
          <img src={session.user.image} alt="user image" className="w-8 h-8" />
          <span className="py-1 px-2 font-bold">{session.user.name}</span>
        </div>
      </div>
    </Layout>
  );
}
