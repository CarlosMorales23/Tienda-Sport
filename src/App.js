// import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Loguin from "./components/Loguin/Loguin";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        
            <BrowserRouter>
                <NavbarPres />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />

                    <Route path="/category/:categoryId" element={<ItemListContainer />} />

                    <Route path="*" element={<NotFound />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/loguin" element={<Loguin />} />

                    <Route
                        path="/Item/:id"
                        element={<ItemDetailContainer />}
                    />
                </Routes>
            </BrowserRouter>
    
    );
}

export default App;

// const onAdd = (cantidad) =>{
//     alert(`Se agrego al carrito ${cantidad} elementos`);
// }

// <NavbarPres />
// <ItemListContainer saludo="Pepito Romero" />
// <ConsumiendoApis/>
// <FooterPres/>
