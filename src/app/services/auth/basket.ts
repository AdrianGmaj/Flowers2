import { ProductResponse } from "../products/ProductResponse";


export interface Basket {

    products:Array<ProductResponse>;
    price: number
}
