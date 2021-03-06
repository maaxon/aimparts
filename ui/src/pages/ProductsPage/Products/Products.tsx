import React, {FC} from "react";
import classes from "./Products.module.css";
import Options from "../Options/Options";
import {IProduct} from "../../../models/IProduct";
import ProductItem from "./ProductItem/ProductItem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SideBar from "../../../components/SideBar/SideBar";


interface IProductsProps {
    products:IProduct[] | undefined
    productsPerPage:number
}

const Products: FC<IProductsProps> = ({products,productsPerPage})=>{


    return(
        <>
            <div className={classes.title}><h3>Cars</h3></div>
            <div className={classes.mainWrap}>
                <SideBar>
                    <div className={classes.leftSide}>
                        <Options />
                    </div>
                </SideBar>
                <div className={classes.productsWrap}>
                    {!products && <Skeleton containerClassName={"w-100 d-flex justify-content-around flex-wrap mt-3"} className={classes.skeleton}  count={productsPerPage} />}
                    {products && products.map(product => <ProductItem id={product._id} key={product._id} img={product.img} title={product.title} desc={product.desc} price={product.price}/>)}
                </div>

            </div>

        </>
    )
}
export default Products