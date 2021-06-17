import React, { useEffect, useState } from 'react';
import * as utils from '../../../utils/utils';
import style from './productDetail.module.scss';
import Spinner from '../../shared/spinner';

const ProductDetail = (props) => {
    const id = props.match.params.id;
    const [productInfo, setProductInfo] = useState({});
    const [loading, setLoading] = useState('');

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/api/items/${id}`)
        .then(res => res.json())
            .then( res => {
                if(res.error) {
                    console.error()
                    setLoading(false)
                } else {
                    setLoading(false);
                    setProductInfo(res.item);
                }
            })
        .catch(Error => {
            console.error(Error);
        })
    }, [id]);

    return (
        <div className={style.container}>
            {
                loading ? 
                    <Spinner  /> 
                : <>
                    <div className={style.details}>
                            <div className={style.imgContainer}>
                                <img src={productInfo.picture} alt={productInfo.title} />
                            </div>
                            <div className={style.dataContainer}>
                                <p>
                                    {`${productInfo.condition === 'new' ? 'Nuevo' : 'Usado'} - ${productInfo.sold_quantity} vendidos`}
                                </p>
                                <h2>{productInfo.title}</h2>
                                <h3>
                                    {utils.formatPrice(productInfo.price)}
                                    {productInfo.price?.decimals ? 
                                        <span>{productInfo.price.decimals}</span> : null
                                    }
                                </h3>
                                <button>Comprar Ahora</button>
                            </div>
                    </div>
                    <div className={style.descriptionContainer}>
                        <p> Descripcion del Producto</p>
                        <p className={style.textDescription}> {productInfo.description}</p>
                    </div>
                </>
            }
        </div>
    );
};

export default ProductDetail;