import React, { Fragment } from "react";

import { GitterChat } from "@survivejs/components";
import { Search } from "../components";

import "../styles/custom.scss";
import "../styles/prism.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";

const SiteBody = ({ children, section, page, location: { pathname } }) => (
  <Fragment>
    {children}

    <GitterChat sectionName={section.name} />

    {pathname !== "/" && <Search sectionName={section.name} />}
  </Fragment>
);

export default SiteBody;
