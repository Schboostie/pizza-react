import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return <h1 style={style}>Fast React Pizza Co.</h1>;
}
/*




a deaclarative approach is use
to tell the ui what to look like

This is something taht we can then tink
about whaat to thappen

*/
function Pizza() {
  return <h2>Pizza</h2>;
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
