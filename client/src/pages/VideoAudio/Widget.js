import React from "react";

const Widget = ({ widgetData }) => {
  return <div dangerouslySetInnerHTML={{ __html: widgetData }} />;
};

export default Widget;
