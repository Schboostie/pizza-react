import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div>
<h1>Hello React</h1>
 < Pizza />
  < Pizza />
   < Pizza />

  </div>

 ;

/*

a deaclarative approach is use
to tell the ui what to look like

This is something taht we can then tink
about whaat to thappen

*/
function Pizza() {
  return <h2>Pizza</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.strictMode>
    <App />
  </React.strictMode>
);
