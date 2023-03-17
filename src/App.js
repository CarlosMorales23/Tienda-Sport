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
                    {/* Ruta raiz */}
                    <Route path="/" element={<ItemListContainer />} />

                    {/* Ruta defecto */}
                    <Route path="*" element={<NotFound />} />

                    {/* Ruta carrito */}
                    <Route path="/cart" element={<Cart />} />

                    {/* Ruta Loguin */}
                    <Route path="/loguin" element={<Loguin />} />



                    {/* Ruta Dinamica */}

                    {/* DONDE CONSUMIRE RUTA DINAMICA???
                    Ruta ItemDetail */}

                    {/* Debo ir a ItemDetail e importar el hook "useParams", para poder rescatar el id */}
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
