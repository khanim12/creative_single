import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import white from "../assets/white.png";

const data = [
  {
    title: "Brand naming & guidelines",
    imageTitle: "Lean Product Roadmap",
    date: "2019 Project",
    srcDesk: p1
  },
  {
    title: "Brand identity & merchandise",
    imageTitle: "New Majestic Hotel",
    date: "2018 Project",
    srcDesk: p2
  },
  {
    title: "Brand identity & web design",
    imageTitle: "Crypto Dashboard",
    date: "2016 Project",
    srcDesk: p3
  }
];

function Slide() {
  const [projectN, setProjectN] = React.useState(0);
  function moveForward() {
    if (projectN < 2) {
      setProjectN(projectN + 1);
    }
  }
  function moveBackward() {
    if (projectN > 0) {
      setProjectN(projectN - 1);
    }
  }
  return (
    <section className="projectsWrapper">
      <div className="titleWrapper">
        <img src={white} alt="" />
        <div className="titleGroup">
          <h2>{data[projectN].title}</h2>
          <div className="buttons">
            <button onClick={moveBackward}>{`<`}</button>
            <button onClick={moveForward}>{`>`}</button>
          </div>
        </div>
      </div>
      <div className="projectImage">
        <img src={data[projectN].srcDesk} alt=""
          className="deskImg" />
        <div className="darkPattern">
          <div className="imageData">
            <h3>{data[projectN].imageTitle}</h3>
            <h4>{ data[projectN].date}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide;
