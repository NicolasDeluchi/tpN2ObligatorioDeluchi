import { useEffect } from "react";
import { useState } from "react";
import "./Main.css"

const Main = () => {
    const [productos, setProductos] = useState([])

    const fetchingProductos = async () => {
        const respuesta = await fetch("https://fakestoreapi.com/products?limit=5")
        const resultados = await respuesta.json()
        setProductos(resultados)
    }

    useEffect(() => {
        fetchingProductos()
    },[])

    return(
        <main>
            <section className="banner">
                <h1>Bienvenidos a la tienda</h1>
                <h2>Los mejores precios de la ciudad</h2>
            </section>
            <section className="productList">
                {
                    productos.length === 0 && <p>No hay productos.</p>
                }
                {
                    productos.map((producto) => {
                        return(
                            <div className="product" key={producto.id}>
                                <h2>{producto.title}</h2>
                                <p>{producto.price}</p>
                                <p>{producto.description}</p>
                                <button>Comprar</button>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Main