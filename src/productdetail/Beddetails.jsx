import "./details.css"

const Beddetails = () => {

    return (
        <div>
            <div className="space"></div>
        <div className="product-detail">
            <div className="product-image">
                <img src="https://p.rmjo.in/productSquare/wlonv8xg-500x500.webp" alt="Product Image" />
            </div>
            <div className="product-info">
                <h1 className="product-title"><b>Godrej King Size Bed</b></h1>
                <p className="product-description">
                    <h5>Features</h5>
                <ul>
                    <li>Material: High-quality solid wood frame with a rich walnut finish</li>
                    <li>Dimensions: 60" W x 80" L x 40" H king Size</li>
                    <li>Design: Clean lines with a modern silhouette, perfect for any bedroom aesthetic.</li>
                    <li>Assembly: Easy-to-follow instructions for quick assembly.</li>
                </ul>
                  
                </p>
                <p className="product-price">Rent: Rs.1000/month</p>
                <button className="add-to-cart-btn">Rent</button>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
        <div className="space"></div>
        </div>
    );
}

export default Beddetails;