import React from "react";
import './Home.css'
import Layout from '../../components/shared/Layout/Layout'
import Carousels from "../../components/Carousel/Carousel"

function Home(props) {
  return (
    <Layout className="home-layout">
    <div>
      <Carousels />
      </div>
      </Layout>
  );
}

export default Home;
