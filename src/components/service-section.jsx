import ServiceCard from "./servicecard";
import TopItem from "./top-item";
import React from "react";

const ServiceSection = () => {
  return (
    <section
      id="service_section"
      className="container_fluid service_section section_bg_white"
    >
      <div className="container">
        <TopItem
          btnHeading="Services"
          title="Our Best Services"
          desc="There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered
                    alteration in some form."
        />

        <div className="bottom_item">
          <div className="service_card">
            <div className="service_card_icon mb-25">
              <i className="fa-solid fa-pills" />
            </div>
            <h4 className="mb-25">Refreshing Design</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          <div className="service_card">
            <div className="service_card_icon mb-25">
              <i className="fa-solid fa-pills" />
            </div>
            <h4 className="mb-25">Refreshing Design</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          <div className="service_card">
            <div className="service_card_icon mb-25">
              <i className="fa-solid fa-pills" />
            </div>
            <h4 className="mb-25">Refreshing Design</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          <div className="service_card">
            <div className="service_card_icon mb-25">
              <i className="fa-solid fa-pills" />
            </div>
            <h4 className="mb-25">Refreshing Design</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          <div className="service_card">
            <div className="service_card_icon mb-25">
              <i className="fa-solid fa-pills" />
            </div>
            <h4 className="mb-25">Refreshing Design</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          <div className="service_card">
            <div className="service_card_icon mb-25">
              <i className="fa-solid fa-pills" />
            </div>
            <h4 className="mb-25">Refreshing Design</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
