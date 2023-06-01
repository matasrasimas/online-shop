import {Product} from './Product';

export const mockProducts: Product[] = [
    {
        id : 1,
        title : 'Logitech G413 Mechanical Keyboard',
        brand: 'Logitech',
        description: 'Brand - Logitech \n Wireless - no \n Weight - 1105g \n Width - 445mm \n Height - 132mm \n Switches - Cherry MX Blue',
        category: 'Keyboard',
        price: 64.99,
        img_url: '../assets/product-images/logitech-g413.png'
    },

    {
        id : 2,
        title : 'Razer Ornata V2 Chroma Keyboard',
        brand: 'Razer',
        description: 'Brand - Razer \n Wireless - no \n Weight - 826g \n Width - 76mm \n Height - 200mm',
        category: 'Keyboard',
        price: 57.99,
        img_url: '/assets/product_images/razer_ornata_v2.jpg'
    },

    {
        id : 3,
        title : 'Corsair K63 Mechanical Keyboard',
        brand: 'Corsair',
        description: 'Brand - Corsair \n Wireless - no \n Weight - 645g \n Width - 200mm \n Height - 53mm \n Switches - Cherry MX Red',
        category: 'Keyboard',
        price: 84.05,
        img_url: '/assets/product_images/corsair_k63.jpg'
    },

    {
        id : 4,
        title : 'Ducky One 2 Mini Mechanical Keyboard',
        brand: 'Ducky',
        description: 'Brand - Ducky \n Wireless - yes \n Weight - 590g \n Width - 150mm \n Height - 23mm \n Switches - Cherry MX Black',
        category: 'Keyboard',
        price: 104.80,
        img_url: '/assets/product_images/ducky_one_2_mini.jpg'
    }
]

