import { ProductResponse } from "../products/ProductResponse";


export interface Basket {

    products:Array<BasketItem>;
    price: number
}
export interface BasketItem {
    product: ProductResponse;
    count: number;
}