import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import NewestScam from "../components/newestscam/newestscam";
import Promotion from "../components/promotion/promotion";
import ScamGallery from "../components/scamgallery/scamgallery";
import Search from "../components/search/search";
import Services from "../components/services/services";
import TopScam from "../components/topscam/topscam";

const HomePage = () => {
  const [scamssortedbydate, setscamssortedbydate] = useState([]);
  const [scamssortedbylikes, setscamssortedbylikes] = useState([]);
  const [loading, setloading] = useState(false);
  const getScamsByDate = async () => {
    try {
      setloading(true);
      const response = await axios.get(`https://cs-alert-api.herokuapp.com/api/scams?limit=6`);
      const scams = response.data;
      setscamssortedbydate(scams);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getScamsByLikes = async () => {
    try {
      setloading(true);
      const response = await axios.get(`https://cs-alert-api.herokuapp.com/api/scams?limit=6`);
      const scams = response.data;
      setscamssortedbylikes(scams);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getScamsByDate();
    getScamsByLikes();
  }, []);
  return (
    <>
      <Hero />
      <Search />
      <Services />
      <Promotion />
      <NewestScam scams={scamssortedbydate} loading={loading} />
      <TopScam scams={scamssortedbylikes} loading={loading} />
      <ScamGallery />
      <Footer />
    </>
  );
};

export default HomePage;
