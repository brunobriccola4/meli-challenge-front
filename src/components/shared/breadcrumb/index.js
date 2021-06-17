import React from 'react';
import style from './breadcrumb.module.scss';

const Breadcrumb = (props) => {
    return (
        <ul className={style.containerBreadcrumb}>
            {props.categories ? props.categories.map((category, idx) => 
                <li key={idx}> 
                    {category}
                    {idx !== props.categories.length - 1 ? <i/> : null}
                </li>
            ): ''}
        </ul>
    );
}

export default Breadcrumb;