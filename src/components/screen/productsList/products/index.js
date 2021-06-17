import React from 'react';
import { Link } from 'react-router-dom';
import style from './product.module.scss';
import * as utils from '../../../../utils/utils';

const Products = ({info, categories}) => {
    return (
        <div className={style.container}>
            <div className={style.imgContainer} id={info.id}>
                <Link to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
                    <img src={info.picture} alt={info.title}/>
                </Link>
            </div>
            <div className={style.infoContainer}>
                <div className={style.info}>
                    <p>{utils.formatPrice(info.price)}{info.price.decimals ? <span>{info.price.decimals}</span> : null}</p>
                    {info.free_shipping ? <i  className={style.free_shipping}/> : null}
                </div>
                <div >
                    <Link className={style.link} to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
                        <p>{info.title}</p>
                    </Link>
                </div>
            </div>
            <div className={style.condition}>
                <p>{info.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
            </div>
        </div>
    );
}

export default Products;