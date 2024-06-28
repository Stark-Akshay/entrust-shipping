import React from "react";

import Footer from "./Footer";
import { links } from "@/lib/data";
import Navbar from "./Navbar";
import Navbartwo from "./NavBartwo";

const FullLayout = ({ children }) => {
  return (
    <>
      <Navbartwo links={links} />
      {children}
      <Footer />
    </>
  );
};

export default FullLayout;
