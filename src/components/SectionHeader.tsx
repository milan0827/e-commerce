import React from "react";
import AppTitle from "./AppTitle";
import { Link } from "react-router-dom";

const SectionHeader = ({ link, title }: { link: string; title: string }) => {
  return (
    <div className="flex justify-between">
      <AppTitle title={title} variant={"secondary"} />
      <Link
        to={link}
        className="text-zinc-500 hover:text-green-500  hover:border-b-2 hover:border-green-500 transition-all duration-100"
      >
        See More
      </Link>
    </div>
  );
};

export default SectionHeader;
