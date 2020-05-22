import ItemPreview from '../cmps/ItemPreview.jsx'
 
export function ItemList({ items }) {
    return (!items) ? Loading :
        <div className="item-list">
            {items.map(item=><ItemPreview item={item}/>)}
        </div>
}