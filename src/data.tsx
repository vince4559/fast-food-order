export interface Cartpops {
    id: number,
    name: string,
    price: number,
    image: string,
    inStock: boolean,
    fastDelivery: boolean,
    qty:number
}

export interface productsProp {
    id: number,
    name: string,
    price: number,
    image: string,
    inStock: boolean,
    fastDelivery: boolean,
}

export const products = [
    {
     id: 1,
     name: "Korean bibimbap with egg and vegetables",
     price: 180,
     image: '/products/product-1.jpg',
     inStock: true,
     fastDelivery: true,
    },
    {
     id: 2,
     name: "italian pizza with cherry tomatoes",
     price: 150,
     image: '/products/product-2.jpg',
     inStock: true,
     fastDelivery: true,
    }, 
    {
     id: 3,
     name: "Chicken breast steak with vegetables",
     price: 200,
     image: "products/product-3.jpg",
     inStock: true,
     fastDelivery: true,
    }, 
    {
     id: 4,
     name: "Autumn pumpkin soup with beef",
     price: 75,
     image: "products/product-4.jpg",
     inStock: true,
     fastDelivery: true,
    }, 
    {
     id: 5,
     name: "Paleo beef steak with vegetables",
     price: 109,
     image: "products/product-5.jpg",
     inStock: true,
     fastDelivery: true,
    },
    {
     id: 6,
     name: "Healthy baguette with egg and vegetables",
     price: 190,
     image: "products/product-6.jpg",
     inStock: true,
     fastDelivery: true,
    },  
    {
     id: 7,
     name: "Burger with cheddar and bacon",
     price: 202,
     image: "products/product-7.jpg",
     inStock: true,
     fastDelivery: true,
    }, 
    {
     id: 8,
     name: "Granola with cherries and strawberries",
     price: 100,
     image: "products/product-8.jpg",
     inStock: true,
     fastDelivery: true,
    }, 
    ];