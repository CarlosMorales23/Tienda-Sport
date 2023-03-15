import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
// import ProductCard from "./components/ProductCard.jsx/ProductCard";

function App() {

    const onAdd = (cantidad) =>{
        alert(`Se agrego al carrito ${cantidad} elementos`);
    }

    return (
        <div className="App">
            <NavbarPres />
            <ItemListContainer saludo="Pepito Romero" />
            {/* <ProductCard title="Prodcuto #1" price="100$" descripcion="Este es el mejor producto" stock={true} loguin={loguin}/>
            <ProductCard title="Prodcuto #1" price="100$" descripcion="Este es el mejor producto" stock={false} />
            <ProductCard title="Prodcuto #1"  descripcion="Este es el mejor producto" stock={true} />
            <ProductCard title="Prodcuto #1" price="100$" descripcion="Este es el mejor producto" stock={true} /> */}
            <ItemCount stock={5} initial= {1} onAdd={onAdd}/>
        </div>
    )
}

export default App;
