import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount() {

    const [stockRemera, setStockRemera] = useState(15)
    const [compraRemeras, setcompraRemeras] = useState(0)

    const sumarRemera = () =>{
        if (stockRemera > 0){
            setStockRemera(stockRemera - 1)
            setcompraRemeras(compraRemeras + 1)
        }
    }
    const restarRemera = () =>{
        if (compraRemeras > 0){
            setStockRemera(stockRemera + 1)
            setcompraRemeras(compraRemeras - 1)
        }
    }

    return (
        <div className="number-container">
            <h5 className="item-title">Remera Blanca</h5>
            <div className="handle-number">
                <i onClick={restarRemera} className="minus-number"> - </i>
                <span className="show-number">{compraRemeras}</span>
                <i onClick={sumarRemera} className="plus-number"> + </i>
            </div>
            <p>Quedan en Stock {stockRemera} remeras</p>
            <button className="button-add">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
