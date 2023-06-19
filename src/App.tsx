import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
