import Category from "@components/Category";
import Featured from "@components/Featured";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <Featured />
      <section className="w-full flex-center flex-col bg-white rounded-xl ">
        <Category />
      </section>
      <Feed />
    </>
  );
};

export default Home;
