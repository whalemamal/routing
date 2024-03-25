import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

export default function app() {
    return <Routes>
        <Route path="" element={<Shop />}  />
        <Route path="/product" element={<Product />}  />
    </Routes>
}
