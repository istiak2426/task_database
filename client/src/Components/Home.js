import React, { useEffect } from 'react'
import { useState } from "react";
import List from "./List"

import { createProduct, getCategories, getProducts } from './apiCalls';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [term, setTerm] = useState(false);
    const [values, setValues] = useState({
        name: '',
        category: '',
    });



    useEffect(() => {

        getProducts()
            .then((response) => {
                setProducts(response.data);
            })

        getCategories()
            .then(response => {
                setCategories(response.data)
            })

    }, [values]);


    const {name,category} = values;

    const handleChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
     

        createProduct(values, term)
        setValues({name: '',category: ''})
        setTerm(!term)
    }


    const productForm = () => (
        <form className="mb-3"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label className="text-muted">Name:</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={name}
                    required
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Selectors:</label>
                <select name="category" value={category} onChange={handleChange} className="form-control" required>
                    <option value="">----Select one----</option>
                    {categories && categories.map(item => (
                        <option value={item._id} key={item._id}>{item.name}</option>
                    ))}
                </select>
                <br />

            </div>


            <label>
                <input type="checkbox"
                    value={term}
                    onChange={() => setTerm(!term)}
                    required
                />
                &nbsp;&nbsp; Agree to term
            </label>
            <br />
            <br />
            <button className="btn btn-outline-primary" type="submit" >Save</button>
        </form>
    );

    return (
        <div>
            <div className="row">
                <div className="col-6 ml-4">
                    <p>Please enter your name and pick the Sectors you are currently involved in.</p>

                    {productForm()}
                    <br />
                    {products.map((product) => (
                        <List
                            product={product}
                            key={product._id}
                        />
                    ))}
                </div>
                <div className="col-4 ">
                    {/* <UserLinks/> */}
                </div>
            </div>
        </div>
    );
};

export default Home;


