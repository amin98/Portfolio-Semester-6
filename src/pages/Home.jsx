import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-6">
            Showcasing my projects, study cases, and work
          </p>
          <Link to="/projects" className="text-blue-500 hover:underline">
            Explore My Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
