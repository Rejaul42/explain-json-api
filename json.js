const shop = {
    owner : 'Alia',
    address: {
        street: 'Kochukhet Bhooter Goli',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['Laptop', 'PC', 'Keyboard', 'Mouse', 'Monitor'],
    revenue: 50000,
    isOpen: true,
    isNew: false 

};

console.log(shop);
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);
const shopParse = JSON.parse(shopStringify);
console.log(shopParse)