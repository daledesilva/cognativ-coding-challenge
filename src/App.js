import { useState, useEffect } from "react";
import "./App.scss";

import {ProductListError, ProductListPlaceholder, ProductList} from "./products-list"



export default function App() {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
  	const [items, setItems] = useState([]);



	useEffect(() => {
	fetch("https://coding-challenge-cognativ.appspot.com/products")
		.then(res => res.json())
		.then(

			(result) => {
				setIsLoaded(true);
				setItems(result.results);
			},
			
			(error) => {
				setIsLoaded(true);
				setError(error);
			}

		)
	}, [])






	if (!isLoaded)			return <ProductListPlaceholder/>
	else if (error)			return <ProductListError error = {error} />
	else					return <ProductList items = {items} />





}

