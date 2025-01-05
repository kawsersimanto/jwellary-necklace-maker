"use client";

import Necklace from "@/app/components/necklace/Necklace";
import { ChangeEvent } from "react";
import useNecklaceStore from "../zustand/necklace/necklaceStore";

const Home = () => {
  const { updateNecklaceSize } = useNecklaceStore();

  const handleNecklaceSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const necklaceSize = parseInt(e.target.value, 10);
    updateNecklaceSize(necklaceSize);
  };

  return (
    <>
      <Necklace />
      <input
        type="number"
        placeholder="Size of necklace"
        onChange={handleNecklaceSizeChange}
        className="border"
      />
    </>
  );
};

export default Home;
