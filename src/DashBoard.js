import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCartPlus } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import ProductCard from "./ProductCard"
import Footer from "./Footer"

const DashBoard = () => {
    const [products, setProducts] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        window.fetch("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%")
            .then(result => result.json())
            .then(result => {
                console.log("We have the result", result);
            })
            .catch(err => {
                console.log("An error occured. Please check your code", err);
            });
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsResponse, categoriesResponse] = await Promise.all([
                    axios.get("https://dummyjson.com/products"),
                    axios.get("https://dummyjson.com/products/categories"),
                ]);

                setProducts(productsResponse.data.products);
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?q=${searchItem}`).then((res) => {
            setProducts(res.data.products)
        })
    }, [searchItem])

    const handleSearch = (e) => {
        // setSearchItem(e.target.value)
        setTimeout(()=>{
            setSearchItem(e.target.value)
        },500)
    }

    const handleSelectCategory = (e) => {
        setSelectedCategory(e.target.value)
        const cate = e.target.value
        axios.get(`https://dummyjson.com/products/category/${cate}`).then((res) => {
            setProducts(res.data.products)
        })
    }


    return (
        <div className="w-full bg-gray-100" >
            <div className="mx-36 pt-2" >
                {/* Header */}
                <div className="flex flex-row  " >
                    <p className="font-bold text-lg" ><span className="text-purple-500" >M</span>oBoo<span className="text-purple-500" >M</span></p>
                    <div className="border-2 w-[850px] flex justify-between p-1 ml-40 items-center rounded " >
                        <input className="focus:outline-none  bg-gray-100" type="text" placeholder="What do you want to buy today?" onChange={handleSearch} />
                        <FontAwesomeIcon onClick={handleSearch} icon={faMagnifyingGlass} />
                    </div>
                    <div className="flex w-full flex-row  justify-evenly " >
                        <p>Store</p>
                        <p>Account</p>
                        <p>Wish List</p>
                        <span className="flex flex-row"><p>Basket</p><FontAwesomeIcon className="pl-2 pt-2" icon={faCartPlus} /></span>

                    </div>
                </div>
                {/* Header */}

                <div className="py-6 mt-6 mb-4 pl-4 w-full bg-gradient-to-r from-gray-800 via-brown-700 to-red-900 rounded-lg text-white" >
                    <p>Lorem Ipsum</p>
                    <p><span className="text-gray-400" >Slash Sales begins in June. Get up to 80% Discount on all products</span> Read More</p>
                </div>

                {/* Category */}
                <select name="Category"
                    onChange={handleSelectCategory}
                    className="bg-white border border-gray-300 mt-2 w-40 rounded-md shadow-lg" >
                    <option value="Select category" disabled
                    >Select category
                    </option>
                    {categories.map((category, i) => {
                        return (
                            <option key={i} value={category} >{category}</option>
                        )
                    })}
                </select>
                {/* Category */}

                {/* DashBoard */}
                <div className="flex flex-wrap justify-start  gap-20 pt-5 pb-20" >
                    {products.length > 0 && products.map((prod) => {
                        return (
                            <ProductCard key={prod.id} prod={prod} />
                        )
                    })}
                </div>
                {/* DashBoard */}


            </div>
            {/* Footer */}
            <div className="bg-gray-200 pt-6 pb-16" >
                <Footer />
            </div>
            {/* Footer */}
        </div>
    )
}

export default DashBoard