import React from "react";
import Product from "../components/produto";
import Newsletter from "../components/newsletter";

const HomePage = () => {

  return (
    <div>
      <section>
        <Product />
      </section>
      <section>
        <Newsletter />
      </section>
    </div>

  );
};

export default HomePage;