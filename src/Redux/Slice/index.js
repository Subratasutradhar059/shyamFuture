import ProductReducer from "./ProductsSlice"
import AuthReducer from "./AuthSlice"



const rootReducer = {
    auth : AuthReducer,
    products: ProductReducer,


}

export default rootReducer;