import React from "react";

function City() {
  const cities = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Ha Noi"),
    React.createElement("li", null, "Da Nang"),
    React.createElement("li", null, "Hai Phong"),
    React.createElement("li", null, "Ho Chi Minh"),
    React.createElement("li", null, "Can Tho"),
  );
  return cities;
}

export default City;
