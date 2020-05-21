import { Link } from "react-router-dom";
export class ItemPreview extends React.Component {

    state = {
        amount: 1 //({ target }) => amount = target.value
    }
    render() {
        return (!item) ? <p>Loading</p> :
            <div className="item-preview">
                <img src={item.img} />
                <p>{item.title}</p>
                <Link to={`/shop/${item.shop.id}`}>{item.shop.name}<span>*{item.shop.rate}</span></Link>
                <p>Price:{item.price}/ {item.unit}</p>
                <input type="number" name="amount" placeHolder="1" onChange={this.onHandleChang} />
                <button onClick={() => addToCart(item._id)}>Add to Cart</button>
                <button onClick={() => addToFavorites(item._id, amount)}>Like!</button>
            </div>
    }
}




// export function ItemPreview({ item, addToCart, addToFavorites }) {
//     var amount = 1;
//     return (!item) ? Loading :
//         <div className="item-preview">
//             <img src={item.img} />
//             <p>{item.title}</p>
//             <Link to={`/shop/${item.shop.id}`}>{item.shop.name}<span>*{item.shop.rate}</span></Link>
//             <p>Price:{item.price}/ {item.unit}</p>
//             <input type="number" name="amount" placeHolder="1" onChange={({ target }) => amount = target.value} />
//             <button onClick={() => addToCart(item._id)}>Add to Cart</button>
//             <button onClick={() => addToFavorites(item._id, amount)}>Like!</button>
//         </div>
// }