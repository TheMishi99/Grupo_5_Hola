import React from "react";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import CategoriesInDb from "./CategoriesInDb";
import LastUserInDb from "./LastUserInDb";
import ContentRowProducts from "./ContentRowProducts";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import ProductsInDb from "./ProductsInDb"
import { ProductsByCategory } from "./ProductsByCategory";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<ContentWrapper />} />
          <Route path="/CategoriesInDb" element={<CategoriesInDb />} />
          <Route path="/LastUserInDb" element={<LastUserInDb />} />
          <Route path="/ProductsInDb" element={<ProductsInDb />} />

          <Route path="/ProductsByCategory" element={<ProductsByCategory />} />

          <Route
            path="/ContentRowProducts"
            element={
              <div className="container-fluid">
                <ContentRowProducts />
              </div>
            }
          />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
