import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Loguin from "./components/Loguin/Loguin";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
import NotFound from "./components/NotFound/NotFound";
import CartContextProvaider from "./Contex/CartContext";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvaider >
                <NavbarPres />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />

                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />

                    <Route path="*" element={<NotFound />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/loguin" element={<Loguin />} />

                    <Route path="/formulario" element={<Form />} />

                    <Route path="/Item/:id" element={<ItemDetailContainer />} />
                </Routes>

                {/* <FooterPres/> */}
                {/* //Arreglar en la vista Detail, seguro es falta de contenido*/}
            </CartContextProvaider>
        </BrowserRouter>
    );
}

export default App;

