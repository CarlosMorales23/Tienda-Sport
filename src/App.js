import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
// import FooterPres from "./components/Footer/FooterPres";
//Requiere arreglos de estilo para renderizarse bien en el ItemDetail
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Loguin from "./components/Loguin/Loguin";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
import NotFound from "./components/NotFound/NotFound";
import ProductsBack2 from "./components/ProductsBack2/ProductsBack2";
// import ProductsBack from "./components/ProductsBack2/ProductsBack2";

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

                    <Route path="/productsBack" element={ <ProductsBack2/> } />

                    <Route
                        path="/Item/:id"
                        element={<ItemDetailContainer />}
                    />
                </Routes>

                {/* <FooterPres/> */}  
                {/* //Arreglar en la vista Detail, seguro es falta de contenido*/}
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
