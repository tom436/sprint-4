import {Link} from "react-router-dom";
export function ShopPreview({ shop, imgUrl }) {//gets an image based on the search
    return (!shop) ? Loading :
        <div className="shop-preview">
            <Link to={`/shop/${shop.id}`}>
            <img src={imgUrl} />
            <p>{shop.name}</p>
            <p>{shop.title}</p>
            </Link>
        </div>
}