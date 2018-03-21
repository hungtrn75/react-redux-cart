let initialState = [
    {
        id: 1,
        name: 'Iphone 8 Plus',
        image: 'https://static.chotot.com.vn/wm_images/33/3331423542.jpg',
        description: 'APPLE sản xuất',
        price: 500,
        inventory: 10,
        rating:5
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'http://images.samsung.com/is/image/samsung/p5/vn/smartphones/galaxy-s8/images/gallery/galaxy-s8-plus_gallery_right_side_coralblue_s4.png',
        description: 'SAMSUNG sản xuất',
        price: 450,
        inventory: 10,
        rating:4
    },
    {
        id: 3,
        name: 'OPPO F1s',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71t02iwgwqL._SL1440_.jpg',
        description: 'OPPO sản xuất',
        price: 400,
        inventory: 10,
        rating:4
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];    
    }
}

export default products;