import React from "react";

function Fooder() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Fooder;
