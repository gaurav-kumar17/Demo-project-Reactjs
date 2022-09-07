import React from "react";

const TopItem = (props) => {
  // props are used to pass data from one components to another.

  const { btnHeading, title, desc } = props;
  return (
    <div classname="top_item">
      <button classname="btn-outline mb-20">{btnHeading}</button>
      <h3 classname="mb-20 h3-heading">{title}</h3>
      <p classname="paragraph text-center mb-20">{desc}</p>
    </div>
  );
};
export default TopItem;
