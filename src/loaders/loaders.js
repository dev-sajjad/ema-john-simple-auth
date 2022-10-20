import { getSavedCart } from "../utilities/fakedb"

export const handleProductAndCartData = async () => {
    // get products
    const productsData = await fetch('products.json')
    const products = await productsData.json()


    // get stored cart 
    const savedCart = getSavedCart();
    const initialCart = []

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id]
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }


    return { products, initialCart };
}