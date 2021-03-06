import React, {FC} from "react";
import Product from "./Product/Product";
import {productApi} from "../../services/ProductService";
import {useParams} from "react-router-dom";
import AppSpinner from "../../components/AppSpinner/AppSpinner";



const ProductPage:FC = ()=>{

    let params = useParams();

    const {data:product} = productApi.useFetchProductByIdQuery(params.productId)
    return <Product product={product}/>
}
export default ProductPage