import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Cen Nguyen',
            email: 'an@gmail.com',
            password: bcrypt.hashSync('123', 8),
            isAdmin: true,
        },
        {
            name: 'Khiet Bang',
            email: 'bang@gmail.com',
            password: bcrypt.hashSync('123', 8),
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Dress Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 79, countInStock: 30,
            brand: 'Lacoste',
            rating: 4,
            numReviews: 20,
            description: 'Still high quality product',
        },
        {

            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 189, countInStock: 20,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 40,
            description: 'Medium quality product',
        },
        {

            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 89, countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 20,
            description: 'high quality product',
        },
        {

            name: 'D&G Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 70, countInStock: 15,
            brand: 'D&G',
            rating: 4,
            numReviews: 8,
            description: 'Still high quality product',
        },
        {

            name: 'Lacoste Slim Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 60, countInStock: 5,
            brand: 'Lacoste',
            rating: 4.5,
            numReviews: 20,
            description: 'high quality product',
        },
        {

            name: 'Adidas NMD City Shock 2',
            category: 'Shoes',
            image: '/images/p7.jpg',
            price: 82, countInStock: 200,
            brand: 'Adidas',
            rating: 5,
            numReviews: 50,
            description: 'high quality product',
        },
        {

            name: 'Adidas NMD Human Race',
            category: 'Shoes',
            image: '/images/p8.jpg',
            price: 300, countInStock: 10,
            brand: 'Adidas',
            rating: 5,
            numReviews: 50,
            description: 'high quality product',
        },
    ],
};
export default data;