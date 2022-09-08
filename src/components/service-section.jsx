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
          <ServiceCard
            title="Refreshing Design"
            desc="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna."
            icon="fa-pills"
          />

          <ServiceCard
            title="Web Development"
            desc="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna."
            icon="fa-pills"
          />

          <ServiceCard
            title="Android Development"
            desc="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna."
            icon="fa-pills"
          />

          <ServiceCard
            title="Machine Learning"
            desc="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna."
            icon="fa-pills"
          />

          <ServiceCard
            title="Data Science"
            desc="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna."
            icon="fa-pills"
          />

          <ServiceCard
            title="Blockchain Development"
            desc="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna."
            icon="fa-pills"
          />
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
