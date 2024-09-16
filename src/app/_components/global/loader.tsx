"use client";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <div className="container h-[calc(100dvh-65px)] flex items-center justify-center pb-16">
      <PuffLoader size={36} />
    </div>
  );
};

export default Loader;