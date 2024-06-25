"use client";
import AgregarAlCarrito from "../agregarAlCarrito/agregarAlCarrito";
import "./cardMenus.css";
import { getAllProductos } from "@/app/services/productoService";
import { useEffect, useState } from "react";
import { IProducto } from "@/app/model/product.model";

export const Menus = () => {
  const [productos, setProductos] = useState<IProducto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productos = await getAllProductos();
        setProductos(productos);
      } catch (error) {
        console.error("error al mostrar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <>
      <div className="productosContainer">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <img
              src="data:image/jpeg;base64,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" alt="Imagen de la Card"
              alt={`Imagen de ${producto.name}`}
              className="card-img"
            />
            <div className="card-content">
              <h2 className="cardTitulo">{producto.name}</h2>
              <p className="cardTexto">{producto.description}</p>

              <div className="cardBoton">
                <AgregarAlCarrito />
                {/*aca se agregar agregar al carrito*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
