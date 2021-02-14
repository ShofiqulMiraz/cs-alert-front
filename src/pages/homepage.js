import { Helmet } from "react-helmet";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import NewestScam from "../components/newestscam/newestscam";
import Promotion from "../components/promotion/promotion";
import ScamGallery from "../components/scamgallery/scamgallery";
import Search from "../components/search/search";
import Services from "../components/services/services";
import TopScam from "../components/topscam/topscam";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Devconnector | Homepage</title>
      </Helmet>
      <Hero />
      <Search />
      <Services />
      <Promotion />
      <NewestScam />
      <TopScam />
      <ScamGallery />
      <Footer />
    </>
  );
};

export default HomePage;
