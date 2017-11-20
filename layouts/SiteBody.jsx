import React from "react";

import { Footer, GitterChat, Navigation } from "@survivejs/components";
import { Search } from "../components";

import "../styles/custom.scss";
import "../styles/prism.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";

const navigationPages = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Read the blog",
    url: "/blog/",
  },
  {
    title: "Maintenance book",
    url: "/maintenance/",
  },
  {
    title: "React book",
    url: "/react/",
  },
  {
    title: "Webpack book",
    url: "/webpack/",
  },
  {
    title: "Get training",
    url: "/training/",
  },
  {
    title: "@survivejs",
    url: "https://twitter.com/survivejs",
  },
];

const SiteBody = ({ children, section, location: { pathname } }) => (
  <div>
    {children}

    <Navigation pages={navigationPages} pathname={pathname} />

    <Footer section={section} />

    <GitterChat sectionName={section.name} />

    {pathname !== "/" && <Search sectionName={section.name} />}
  </div>
);

export default SiteBody;
