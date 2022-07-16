import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ItemCount = ({ prodId, stock, initial, onAdd }) => {

    const [qtyCount, setQtyCount] = useState(initial)

    const addToCounter = () => {
        if (qtyCount < stock) {
            setQtyCount(qtyCount + 1);
        } else {
            console.log("Se alcanzó el limite de unidades de compra de " + prodId);
        }
    }

    const substractToCounter = () => {
        if (qtyCount > initial) {
            setQtyCount(qtyCount - 1);
        } else {
            console.log("QtyCount es cero para " + prodId);
        }
    }

    const addToCart = () => {
        onAdd(qtyCount);
    }

    return (
        <>
            <ButtonGroup aria-label="ButtonGroupCard" className="align-items-center">
                <Button onClick={substractToCounter} id={"removeButton-" + prodId} size="sm" variant="outline-dark" className="rounded-circle border-0 m-2" disabled={qtyCount === 0}>
                    <i className="bi bi-dash h4"></i>
                </Button>
                <span as={ButtonGroup} className="m-2 px-3 fs-6"> {qtyCount} Kg </span>
                <Button onClick={addToCounter} id={"addButton-" + prodId} size="sm" variant="outline-dark" className="rounded-circle border-0 m-2" disabled={qtyCount === stock}>
                    <i className="bi bi-plus h4"></i>
                </Button>
            </ButtonGroup>
            <div className="d-grid gap-2">
                <Button onClick={addToCart} id={"addToCart-" + prodId} variant="outline-dark" size="sm" className="border-0 m-2" disabled={qtyCount === 0 || qtyCount > stock}>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )

}

export default ItemCount
