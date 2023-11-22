import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (prods) => {
    const { title, images, description, price, rating } = prods.prod
    const [favrt, setFavrt] = useState(false)
    const [stars, setStars] = useState([])

    useEffect(() => {
        let arr = []
        for (let i = 1; i < rating; i++) {
            arr.push(i)
        }
        setStars(arr)
        console.log("arr", arr)
    }, [])

    const handleFavrtClick = () => {
        setFavrt(!favrt)
    }
    return (
        <div className="flex flex-col bg-white relative h-96 max-h-fit w-60 border rounded-lg mt-4" >
            <div
                onClick={handleFavrtClick}
                className="absolute flex justify-center items-center right-0 h-7 w-7  m-2 bg-gray-300 bg-opacity-70" >
                <FontAwesomeIcon icon={favrt ? solidHeart : faHeart} />
            </div>
            <img
                className="object-cover h-48 w-full rounded-t-lg"
                src={images[0]}
                alt={`${title} image`}
            />
            <div className="pl-4 pt-4 " >
                <p className="text-lg text-black" >{title}</p>
                <p className="text-sm text-gray-600 " >{`${description.slice(0, 65)}...`}</p>
                <div className="absolute bottom-0 text-base " >
                    <p className="pt-2 " >${price}</p>
                    {stars.length > 0 && stars.map((ele, i) => {
                        return (
                            <FontAwesomeIcon key={i} size="xs" icon={solidStar} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductCard