import ShopPreview from '../cmps/ShopPreview.jsx'
 
export function ItemDetails({ item, addToCart, addToFavorites }) {
    return (!item) ? Loading :
        <div className="item-details">
            <button onClick={}>Back</button>
            <img src={item.img} />
            <p>{item.title}</p>
            <Link to={`/shop/${item.shop._id}`}>
                <p>{item.shop.logo}</p>
                <p>This prudoct is sold by {item.shop.name}</p>
                <p>{item.shop.title}</p>
                <p>*{item.shop.rate}</p>
                <p>Check it out!</p>
            </Link>
            <p>Price:{item.price}/ {item.unit}</p>
            <input type="number" name="amount" placeHolder="1" onChange={({ target }) => amount = target.value} />
            <button onClick={() => addToCart(item._id)}>Add to Cart</button>
            <button onClick={() => addToFavorites(item._id, amount)}>Like!</button>
        </div>
}