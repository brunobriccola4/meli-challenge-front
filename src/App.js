import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
//components
import SearchBar from '../src/components/shared/searchBar';
import Spinner from '../src/components/shared/spinner';
import ProductsList from './components/screen/productsList/productList';
import ProductDetail from './components/screen/productDetail';

const App = () => {
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState({});

    const getProducts = (query) => {
        setLoading(true);
        fetch(`http://localhost:8080/api/items?q=${query}`)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    setLoading(false);
                    setProducts({error: res})
                } else {
                    setLoading(false);
                    setProducts(res);
                    history.push(`/items?search=${query}`)
                }
            })
        .catch(error => {
            setLoading(false);
            // setProducts({error: 'Error de conexion'})
        });
    }

    return (
        <div className='App'>
            <SearchBar onSubmit={(query) => getProducts(query)}/>
            { loading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', width: '100vw', height: '100vh'}}>
                    <Spinner />
                </div> :
                <Switch>
                    <Route exact path='/items'>
                        {
                            products.error ?
                                'Hubo un problema buscando ese producto. Probá nuevamente más tarde.'
                            : products.items ? products.items.length ?
                                <ProductsList categories={products.categories} items={products.items}/>
                            : 
                                'No encontramos resultados ingresados. Probá buscandolo con otras palabras!'
                            : <Redirect to={"/"}/>
                        }
                    </Route>
                    <Route exact path='/items/:id' component={ProductDetail}></Route>
                </Switch> 
            }
        </div>
    );
}

export default App;
