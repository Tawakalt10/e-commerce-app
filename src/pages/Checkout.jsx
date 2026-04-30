import { useCart } from "../components/context/CartContext"

export default function Checkout() {
    const {getCartItemsWithProducts} = useCart ();
    const cartItems = getCartItemsWithProducts
    return ( 
    <div className="page">
        <div className="container">
            <h1 className="page-title">Checkout</h1>
             <div className="checkout-container">
                <div className="checkout-items">
                  <h2 className="checkout-section-title"> Order Summary</h2>
                {cartItems.map((item) => (
                    <div className="checkout-item">dff</div>
                ))}
                
                </div>

             </div>
        </div>
    </div>

    );
}