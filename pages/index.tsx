import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaGift } from "react-icons/fa";
import PrimaryButton from "../components/Button";
import JoinRoomDialogue from "../components/joinroomDialogue";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-10 bg-gradient-to-br from-green-500 via-purple-500 to-black-500 min-h-screen text-white justify-center items-center" style={{
      backgroundImage: `url("matrix.jpg")`, 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Head>
        <title>wecode</title>
        <meta
          name="description"
          content="wecode is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, "
        />
        <link rel="icon" href="/logo-white.png" />
      </Head>
      <Navbar />
      <div className="flex justify-center items-center mx-5 space-x-8">
        <div className=" flex flex-col justify-center items-center space-y-4 ">
          <h1 className="font-extrabold text-7xl md:text-8xl text-center">
            Code Here.{" "} 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-700 to-green-800">
              Code Now.
            </span>
          </h1>
          <div>
            <JoinRoomDialogue />
          </div>
        </div>
      </div>

      <footer className="fixed bottom-2">
        Designed by{""}
        <a
          className="text-primary ml-2 font-bold text-green-400 hover:text-red-500"
          href="https://github.com/g0dlesx/codeonline"
        >
          {""}
          Sarthak
        </a>
      </footer>
    </div>
  );
};

export default Home;
