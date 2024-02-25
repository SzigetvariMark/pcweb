import { useSession } from "next-auth/react";
import { FaPenAlt } from "react-icons/fa";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex gap-60 md:flex-row flex-col p-6 text-white border rounded-lg">
      <div>
        <h3 className=" bg-white/20 text-center rounded-md p-2 mb-4 font-semibold text-2xl">
          Alapvető információ
        </h3>
        <div className="flex gap-12">
          <p>Bejelentkezési e-mail cím:</p>
          <input
            type="text"
            placeholder={session?.user.email}
            readOnly={"readonly"}
            className="px-2 rounded-md"
          />
        </div>
        <div className="flex gap-12 mt-4">
          <p>E-mail elérhetőség:</p>
          <input
            type="text"
            placeholder={session?.user.email}
            readOnly={"readonly"}
            className="px-2 rounded-md"
          />
          <FaPenAlt fontSize={16} className="cursor-pointer" />
        </div>
        <div className="flex gap-12 mt-4">
          <p>Telefonszám:</p>
          <input
            type="text"
            placeholder={session?.user.phone}
            readOnly={"readonly"}
            className="px-2 rounded-md"
          />
          <FaPenAlt fontSize={16} className="cursor-pointer" />
        </div>
      </div>
      <div>
        <div>
          <h1>{session?.user.name}</h1>
        </div>
        <img
          src={session?.user.image}
          alt="profile picture"
          className="rounded-xl size-20"
        />
      </div>
    </div>
  );
};

export default Profile;
