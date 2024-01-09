import { useRoutes } from "react-router-dom";
import routs from "./routs";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  const rout = useRoutes(routs);

  return (
    <>
      {rout}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
