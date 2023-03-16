// import ItemCount from "./components/ItemCount/ItemCount";
import ConsumiendoApis from "./components/ConsumiendoApis/ConsumiendoApis";
import FooterPres from "./components/Footer/FooterPres";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";

function App() {
    return (
        <div className="App">
            <NavbarPres />
            <ItemListContainer saludo="Pepito Romero" />
            <ConsumiendoApis/>
            <FooterPres/>
            {/* <ItemCount stock={5} initial= {1} onAdd={onAdd}/> */}
        </div>
    )
}

export default App;

    // const onAdd = (cantidad) =>{
    //     alert(`Se agrego al carrito ${cantidad} elementos`);
    // }
