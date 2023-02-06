import './App.scss';
import ToggleView from "../components/ToggleView";
import {useState} from "react";
import ShoppingCard from "../components/ShoppingCard";
import ShoppingListItem from "../components/ShoppingListItem";

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function App() {
    const [displayList, changeDisplayIcon] = useState(true)

  return (
    <div className="App">
     <ToggleView state={{displayList}} handler={changeDisplayIcon}/>
        <div className="s-cards" data-list={displayList}>
            {displayList && products.map(
                (item, i) => <ShoppingListItem item={item} delay={i * 0.1} key={item.img}/>
            )}
            {!displayList && products.map(
                (item, i) => <ShoppingCard item={item} delay={i * 0.1} key={item.img} />
            )}
        </div>
    </div>
  );
}

export default App;
