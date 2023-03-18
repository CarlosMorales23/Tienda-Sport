// import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ConsumiendoApis from "./components/ConsumiendoApis/ConsumiendoApis";
// import FooterPres from "./components/Footer/FooterPres";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Loguin from "./components/Loguin/Loguin";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarPres />
                <Routes>
                    
                    <Route path="/" element={<ItemListContainer />} />

                
                    <Route path="*" element={<NotFound />} />

                    
                    <Route path="/cart" element={<Cart />} />

                    
                    <Route path="/loguin" element={<Loguin />} />


                    <Route
                        path="/ItemDetail/:id"
                        element={<ItemDetailContainer />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
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
