import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burgeringredients/BurgerIngredients';
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingkey => {
        return [...Array(props.ingredients[ingkey])].map((_, i) => {
        return    <BurgerIngredient key = {ingkey + i} type={ingkey} />;
        });
    }).reduce((arr, el)=> {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length===0) {
    transformedIngredients = <p>please start add ingredients</p>
     }
    
    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;