export default function ShoppingListItem({item, delay}) {
    return (
        <div className="s-cards__item" style={{animationDelay: delay + 's'}}>
            <div className="s-cards__item__title">{item.name}</div>
            <div className="s-cards__item__color">{item.color}</div>
            <img src={item.img} alt={item.title} className="s-cards__item__img"/>
            <span className="s-cards__item__price">${item.price}</span>
            <button className="s-cards__item__btn">add to cart</button>
        </div>

    )
}
