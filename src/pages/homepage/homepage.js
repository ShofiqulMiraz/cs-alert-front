import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import NewestScam from "../../components/newestscam/newestscam";
import Promotion from "../../components/promotion/promotion";
import ScamGallery from "../../components/scamgallery/scamgallery";
import Search from "../../components/search/search";
import Services from "../../components/services/services";
import TopScam from "../../components/topscam/topscam";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const [scamssortedbydate, setscamssortedbydate] = useState([]);
  const [scamssortedbylikes, setscamssortedbylikes] = useState([]);
  const [newestscamloading, setnewestscamloading] = useState(false);
  const [topscamloading, settopscamloading] = useState();
  const getScamsByDate = async () => {
    try {
      setnewestscamloading(true);
      const response = await axios.get(
        `https://cs-alert-api.herokuapp.com/api/scams?limit=6`
      );
      const scams = response.data;
      setscamssortedbydate(scams);
      setnewestscamloading(false);
    } catch (error) {
      console.log(error);
      setnewestscamloading(false);
    }
  };
  const getScamsByLikes = async () => {
    try {
      settopscamloading(true);
      const response = await axios.get(
        `https://cs-alert-api.herokuapp.com/api/scams?limit=6`
      );
      const scams = response.data;
      setscamssortedbylikes(scams);
      settopscamloading(false);
    } catch (error) {
      console.log(error);
      settopscamloading(false);
    }
  };
  useEffect(() => {
    getScamsByDate();
    getScamsByLikes();
  }, []);
  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Official Website</title>
      </Helmet>
      <Hero />
      <Search />
      <Services />
      <Promotion />
      <NewestScam scams={scamssortedbydate} loading={newestscamloading} />
      <TopScam scams={scamssortedbylikes} loading={topscamloading} />
      <ScamGallery />
      <Footer />
    </>
  );
};

export default HomePage;
