import React from "react"
import Item from "./Item"

const List = ({ items }) => {
    console.log(items);
    
    return (
        <ul>
            <Item
                item={items[0]}
            />
            <Item
                item={items[1]}
            />
            <Item
                item={items[2]}
            />
        </ul>
    )
}

export default List