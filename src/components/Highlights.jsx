import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "./../utils/index";
import VideoCarosuel from "./VideoCarosuel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration:1,
      stagger:"0.25"
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-2 w-full  md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="Wtach" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
         <VideoCarosuel/>
      </div>
    </section>
  );
};

export default Highlights;
