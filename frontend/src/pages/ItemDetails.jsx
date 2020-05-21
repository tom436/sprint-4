import ShopPreview from '../cmps/ShopPreview.jsx'
 
export function ItemPreview({ item, addToCart, addToFavorites }) {

    return (!item) ? Loading :
        <div className="item-details">tomatooooooo1#</div>

    // return (!item) ? Loading :
    //     <div className="item-details">
    //         <img src={item.img} />
    //         <p>{item.title}</p>
    //         <Link to={`/shop/${item.shop.id}`}>{item.shop.name}<span>*{item.shop.rate}</span></Link>
    //         <p>Price:{item.price}/ {item.unit}</p>
    //         <input type="number" name="amount" placeHolder="1" onChange={({ target }) => amount = target.value} />
    //         <button onClick={() => addToCart(item._id)}>Add to Cart</button>
    //         <button onClick={() => addToFavorites(item._id, amount)}>Like!</button>
    //     </div>
}