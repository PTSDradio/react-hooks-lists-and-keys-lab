import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const eachLink = links.map((linkObj) => {
    return <a href={`#${linkObj}`} key={linkObj}>{linkObj}</a>
  })
  console.log(eachLink)

  return (<nav>{eachLink}</nav>)
}

export default NavBar;
