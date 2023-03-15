// import ItemCount from "./components/ItemCount/ItemCount";
import FooterPres from "./components/Footer/FooterPres";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
// import ProductCard from "./components/ProductCard.jsx/ProductCard";

function App() {

    // const onAdd = (cantidad) =>{
    //     alert(`Se agrego al carrito ${cantidad} elementos`);
    // }

    return (
        <div className="App">
            <NavbarPres />
            <ItemListContainer saludo="Pepito Romero" />
            <FooterPres/>
            {/* <ItemCount stock={5} initial= {1} onAdd={onAdd}/> */}
        </div>
    )
}

export default App;
