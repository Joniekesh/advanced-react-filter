import "./App.css";
import { useState } from "react";
import { productsData } from "../src/data";

const App = () => {
	const [selected, setSelected] = useState(1);
	const [search, setSearch] = useState("");

	const [products, setProducts] = useState(productsData);

	// category array
	const categories = productsData.map((product) => product.category);

	const filteredCats = [
		"All",
		...categories.filter((item, index) => {
			return categories.indexOf(item) === index;
		}),
	];

	const priceArray = productsData.map((product) => product.price);

	const minPrice = Math.min(...priceArray);
	const maxPrice = Math.max(...priceArray);
	const pValue = Math.max(...priceArray);

	const [priceValue, setPriceValue] = useState(pValue);

	const handleInput = (e) => {
		setPriceValue(e.target.value);
		setProducts(
			productsData.filter((product) => product.price <= e.target.value)
		);
	};

	const handleClick = (category, index) => {
		setSelected(index);

		if (filteredCats[index] === "All") {
			setProducts(productsData);
		} else {
			setProducts(
				productsData.filter((product) =>
					product.category.toLowerCase().includes(category.toLowerCase())
				)
			);
		}
	};

	const handleKeyUp = () => {
		setProducts(
			productsData.filter((product) =>
				product.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	};

	return (
		<div className="app">
			<div className="navbar">
				<div className="navbarContainer">
					<h3>jonieDev</h3>
					<h2>ADVANCED FILTERING</h2>
				</div>
			</div>
			<div className="container">
				<div className="sidebar">
					<input
						className="searchInput"
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyUp={handleKeyUp}
					/>
					<h2>Categories</h2>
					<div className="categories">
						{filteredCats.map((category, index) => (
							<span
								className={selected === index ? "category active" : "category"}
								key={index}
								onClick={() => handleClick(category, index)}
							>
								{category}
							</span>
						))}
					</div>
					<div className="range">
						<input
							type="range"
							min={minPrice}
							max={maxPrice}
							value={priceValue}
							onInput={(e) => handleInput(e)}
						/>
						<span>{priceValue}</span>
					</div>
				</div>
				<div className="content">
					{products.map((product) => (
						<div className="product" key={product.id}>
							<img src={product.img} alt="" />
							<span>{product.name}</span>
							<span className="price">$ {product.price}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
