import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = {
    firstName: "Kanan",
  };

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
      </div>
    </section>
  );
};

export default Home;
