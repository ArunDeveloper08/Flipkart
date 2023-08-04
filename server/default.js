
import { products } from "./constant/data.js"
import Product from "./model/product-schema.js"

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("data successfully insertrd in databse")
    } catch (error) {
        console.log(error.message)
    }

}
export default DefaultData;