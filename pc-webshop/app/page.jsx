import Category from "@components/Category";
import Featured from "@components/Featured";
import Feed from "@components/Feed";
import NewProduct from "@components/NewProduct";

const Home = () => {
  return (
    <>
      <Featured />
      <section className="w-full flex-center flex-col bg-white rounded-xl ">
        <NewProduct />
        <Category />
      </section>
      <Feed />
    </>
  );
};

export default Home;
