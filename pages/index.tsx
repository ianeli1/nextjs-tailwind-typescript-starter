import "../styles/index.css";

import { NextPage } from "next";
import Head from "next/head";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Button from "../components/Button";
import React, { useState } from "react";
import Modal from "../components/Modal";

const exampleData = [
  {
    name: "Shoes",
    pic:
      "https://cdn.discordapp.com/attachments/616319929532022796/834647507275481098/A1390718.png",
    price: "$2.99",
    id: 0,
  },
  {
    name: "Shoes1",
    pic:
      "https://cdn.discordapp.com/attachments/616319929532022796/834647507275481098/A1390718.png",
    price: "$3.99",
    id: 1,
  },
  {
    name: "Shoes2",
    pic:
      "https://cdn.discordapp.com/attachments/616319929532022796/834647507275481098/A1390718.png",
    price: "$4.99",
    id: 2,
  },
  {
    name: "Shoes3",
    pic:
      "https://cdn.discordapp.com/attachments/616319929532022796/834647507275481098/A1390718.png",
    price: "$5.99",
    id: 3,
  },
  {
    name: "Shoes4",
    pic:
      "https://cdn.discordapp.com/attachments/616319929532022796/834647507275481098/A1390718.png",
    price: "$0.99",
    id: 4,
  },
];

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Storefront</title>
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="theme-color" content="#72B340" />
        <meta name="description" content="Cool shop" />
      </Head>
      <Modal show={modalOpen} onClose={() => setModalOpen(false)} title="Login">
        hello
      </Modal>
      <TopBar title="Storefront">
        <button className="mr-2" onClick={() => setModalOpen(true)}>
          login
        </button>
        <button>admin access</button>
      </TopBar>
      <div className="mt-12 p-2">
        <div className="p-4 shadow rounded bg-white">
          <h1 className="text-purple-700 text-3xl ">Storefront index!</h1>
          <p className="text-gray-800">made with Next and Tailwind!</p>
        </div>
      </div>
      <section className="grid grid-cols-3 m-2">
        {exampleData.map(({ name, price, pic, id }) => (
          <Card
            key={id}
            title={name}
            subtitle={price}
            photo={pic}
            right={<Button>Buy</Button>}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
