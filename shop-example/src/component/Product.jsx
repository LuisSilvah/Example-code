import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';


function Product({match}) {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)

            setProduct(await response.json())
            setLoading(false)
        }

        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading ...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} srcset="" height={450} width={450}/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star ms-1"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2">
                        Add to cart
                    </button>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3">
                        Go to cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                  {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product