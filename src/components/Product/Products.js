import React from 'react'

const Product = ( {id, name, description, stock}) => {
    return (
        <div>
            <h1>Producto</h1>
            <p><strong>ID</strong> {id}</p>
            <p><strong>Nombre</strong> {name}</p>
            <p><strong>Descripcion</strong> {description}</p>
            <p><strong>Stock</strong> {stock}</p>
            <button> Boton {name}</button>
        </div>
    )
}

export default Product
