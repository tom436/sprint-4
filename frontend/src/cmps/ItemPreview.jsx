import { Link } from "react-router-dom";
import {addToCart} from '../store/actions/userActions'
//add a msg :added to cart!
export class ItemPreview extends React.Component {

    state = {
        amount: 1 
    }

    onHandleChange=({target})=>{
        this.setState({amount:target.value})
    }

    render() {
        const {item} = this.props
        return (!item) ? <p>Loading</p> :
            <div className="item-preview">
                <img src={item.img} />
                <p>{item.title}</p>
                <Link to={`/shop/${item.shop.id}`}>{item.shop.name}<span>*{item.shop.rate}</span></Link>
                <p>Price:{item.price}/ {item.unit}</p>
                <input type="number" name="amount" placeHolder="1" onChange={this.onHandleChang} />
                <button onClick={() => addToCart(item._id,this.state.amount)}>Add to Cart</button>
            </div>
    }
}


// const mapStateToProps = state => {
//     return {
//         item: state.item.currItem
//     };
// };

const mapDispatchToProps = {
    loadItem,
    addToCart,
    addToFavorites
};

// export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
export default connect( mapDispatchToProps)(ItemDetails);


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