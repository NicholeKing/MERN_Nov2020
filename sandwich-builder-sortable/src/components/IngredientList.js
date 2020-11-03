import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import Ingredient from './Ingredient.js';

const SortableItem = SortableElement(({value}) => 
    <li className="list-group-item w-75" style={{maxWidth: "200px"}}>
      <Ingredient source={value.location} index={value.key}/>
    </li>
);

const IngredientList = SortableContainer(({items}) => {
return (
    <ul className="list-group">
    {items.map((value, index) => (
        // <SortableItem key={`item-${value}`} index={index} value={value} />
        <SortableItem key={index} index={index} value={value} />
    ))}
    </ul>
);
});

export default IngredientList;