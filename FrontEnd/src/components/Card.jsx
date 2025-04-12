import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

const Card = (props) => {

    let data = useCart();
    let dispatch = useDispatchCart();
    const priceRef = useRef();
    let options = props.options
    let priceOptions = Object.keys(options)
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleAddToCart = async () => {
        let food = null;
        for (const item of data) {
            if (item.id === props.foodItem._id && item.size === size) {
                food = item;
                break;
            }
        }

        if (food) {
            await dispatch({
                type: "UPDATE",
                id: props.foodItem._id,
                price: finalPrice,
                qty: qty,
                size: size
            });
        } else {
            await dispatch({
                type: "ADD",
                id: props.foodItem._id,
                name: props.foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size,
                img: props.foodItem.img
            });
        }
    }

    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div className="card h-100 shadow-sm">
            <img
                src={props.foodItem.img}
                className="card-img-top"
                alt="Card"
                style={{ height: '160px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{props.foodItem.name}</h5>
                </div>
                <div className="mt-3">
                    <select className="form-select w-auto d-inline me-2 bg-success text-white" onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select className="form-select w-auto d-inline me-2 bg-success text-white" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                    <span className="d-inline h-100 fs-5">
                        ₹{finalPrice}/-
                    </span>
                </div>
                <hr />
                <button className='btn btn-success justify-center ms-2 w-1/2' onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Card
