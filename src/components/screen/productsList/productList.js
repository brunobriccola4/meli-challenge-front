import React from 'react';
import Products from './products';
import style from './productsList.module.scss';
import Breadcrumb from '../../shared/breadcrumb';

const ProductsList = (props) => {
    return (
        <div className={style.container}>
            <Breadcrumb categories={props.categories}/>
            {props.items.slice(0,4).map((item, idx) => 
                <Products key={idx} info={item} categories={props.categories} />)}
        </div>
    );
}

export default ProductsList;