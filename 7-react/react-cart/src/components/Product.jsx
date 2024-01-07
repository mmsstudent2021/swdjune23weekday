import React, { useContext, useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { DataContext } from "../context/DataContext";
import AnimatedImage from "./AnimatedImage";

const Product = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate, count },
    description,
    category,
  },
}) => {
  const { addCart } = useContext(DataContext);

  const [added, setAdded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleAddToCart = () => {
    if (!added) {
      const newCart = {
        product_id: id,
        price,
        image,
        title,
        quantity: 1,
        cost: price,
      };
      addCart(newCart);
      setAdded(true);
      setAnimate(true)
    }
    // need to show "already added"
  };

  const [info,setInfo] = useState({});

  const imgRef = useRef();

  useEffect(() => {

     setInfo(imgRef.current.getBoundingClientRect())
    
  },[])

  return (
    <div className="product-card group">
      <img
        className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
        src={image}
        ref={imgRef}
      />
      {animate && <AnimatedImage src={image} info={info} setAnimate={setAnimate} />}
      <div className="product-card-body border border-neutral-600 p-5">
        <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            <StarRating rate={rate} />
          </div>
          <p className="rating-text">
            ({rate} / {count})
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button
          disabled={added}
          onClick={handleAddToCart}
          className={`${
            added && "bg-neutral-600 text-white"
          } duration-100 active:scale-90 border disabled:pointer-events-none select-none border-neutral-600 block w-full h-12 font-heading`}
        >
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
