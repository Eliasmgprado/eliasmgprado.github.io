// Personal web site showing my research papers, softwares, and 3d art.
// Home Page contains the main content of the application, including the header, the main content, and the footer.

import React from "react";
import "../../styles/Home.css";

const Home: React.FC = () => {
  return (
    <main className="home">
      <h1>Welcome to My Geology Website</h1>
      <p>
        Explore my research papers, software projects, and 3D art related to
        geology.
      </p>
    </main>
  );
};

export default Home;
