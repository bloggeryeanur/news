import { RouterProvider } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { routess } from "./Route/Route";


function App() {
  return (
    <div>
      <RouterProvider router={routess}></RouterProvider>
      </div>
  )
}

export default App;
