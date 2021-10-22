import { useEffect, useState } from 'react'
import promises from '../../helpers/promises';
import Product from '../Product/Products';
import './Promises.css'

const Promises = ({ products }) => {
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [currentProduct, setCurrentProduct] = useState([])
    
    useEffect(() => {
        if (products){
            promises(products, setMessage, setIsSuccess, setIsLoading, setIsFinished, setCurrentProduct)
        }
    }, [products])

    return (
        <div>
            <h1>Promises</h1>
            <h3 className={isSuccess ? 'successMessage' : 'errorMessage'}>
                {message}
            </h3>
            {isLoading && <h3>Loading...</h3>}
            {isFinished && <h2>Request Finished</h2>}
            {currentProduct.map((products) => (
                <Product key={products.id} {...products} />
            ))}
        </div>
    )
}

export default Promises
