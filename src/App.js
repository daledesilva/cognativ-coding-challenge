import { useState, useEffect } from "react";
import "./App.scss";


import {ProductListError, ProductListPlaceholder, ProductList, ProductListSummaries, ProductListPageButtons} from "./products-list"



export default function App() {

	const [pageDataUrl, setPageDataUrl] = useState("https://coding-challenge-cognativ.appspot.com/products");
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
  	const [listData, setListData] = useState({
		next: null,
		previous: null,
		results:[],
	});


	useEffect(() => {
	fetch(pageDataUrl)
		.then(res => res.json())
		.then(

			(result) => {
				setIsLoaded(true);
				setListData(result);
			},
			
			(error) => {
				setIsLoaded(true);
				setError(error);
			}

		)
	}, [pageDataUrl])




	
	return ( <>

		<header>
			{isLoaded && !error && (
				<ProductListSummaries
					items = {listData.results} 
				/>
			)}
		</header>



		<section>
			{!isLoaded	&& <ProductListPlaceholder/>}
			{error		&& <ProductListError error = {error} />}
			{isLoaded && !error && <ProductList items = {listData.results} />}
		</section>



		<footer>
			{isLoaded && !error && (
				<ProductListPageButtons
					onPreviousClick = { listData.previous ? () => setPageDataUrl(listData.previous) : null }
					onNextClick = { listData.next ? () => setPageDataUrl(listData.next) : null }
				/>
			)}
		</footer>

	</> )




	





}

