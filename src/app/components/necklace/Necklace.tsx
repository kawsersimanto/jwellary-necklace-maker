"use client";

import useNecklaceStore from "@/app/zustand/necklace/necklaceStore";

const Necklace = () => {
  const { necklaceSize } = useNecklaceStore();
  return (
    <div className="p-5">
      <div
        className={`w-${necklaceSize} h-${necklaceSize} rounded-full border border-slate-400`}
      ></div>
    </div>
  );
};

export default Necklace;
