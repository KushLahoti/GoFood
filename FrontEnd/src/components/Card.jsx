import React from 'react'

const Card = (props) => {

    let options = props.options
    let priceOptions = Object.keys(options)

    return (
        <div className="card h-100 shadow-sm">
            <img
                src={props.imgSrc}
                className="card-img-top"
                alt="Card"
                style={{ height: '160px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{props.foodName}</h5>
                </div>
                <div className="mt-3">
                    <select className="form-select w-auto d-inline me-2 bg-success text-white">
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select className="form-select w-auto d-inline me-2 bg-success text-white">
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                    <span className="fs-5">Total Price</span>
                </div>
            </div>
        </div>
    )
}

export default Card
