import ItemPreview from '../cmps/ItemPreview.jsx'
 
export function ItemList({ items }) {
    return (!items) ? <p>Loading</p> :
        <div className="item-list">
            {items.map(item=><ItemPreview item={item}/>)}
        </div>
}