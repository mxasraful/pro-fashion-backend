const { response } = require('express');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3001
const { MongoClient } = require('mongodb');

// Heroku Mail: asrafuls027@gmail.com

require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())

// Connect to mongodb
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.yqdvo.mongodb.net/${process.env.USER_DB}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Default api
app.get('/', (req, res) => {
    res.send('Pro Fashion')
})

client.connect(err => {
    const productsCollection = client.db("pro-fashion").collection("products");
    const categoriesCollection = client.db("pro-fashion").collection("categories");
    const districtsCollection = client.db("pro-fashion").collection("districts");
    const addressCollection = client.db("pro-fashion").collection("address");

    const productsData = [
        {
            title: "Plum Erri Embroidered Silk Panjabi Pajama Set",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094682.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094682_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094682_2.jpg"
            ],
            price: 90,
            id: "FGKUJ34F387D357V9020394",
            categories: "panjabi",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Teal Printed and Erri Embroidered Silk Panjabi Pajama Set",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094654.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094654_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094654_2.jpg"
            ],
            price: 70,
            id: "3C4KYC3I4CYEUCYIE74CY843",
            categories: "panjabi",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Maroon Embroidered Silk Panjabi Pajama Set",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094562.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094562_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094562_2.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000094562_3.jpg"
            ],
            price: 85,
            id: "CI3MM4XYIEURYFMC486M45TUYF",
            categories: "panjabi",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Black Erri Embroidered Silk Panjabi Pajama Set",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000093557.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000093557_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000093557_2.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000093557_3.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0040000093555.jpg"
            ],
            price: 92,
            id: "V453ICIUHFUIYF876HURT75785",
            categories: "panjabi",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Parrot Green Tie-Dyed And Embroidered Silk Panjabi Pajama Set",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072286.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072286_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072286_2.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072286_3.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072284.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072284_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0010000072284_2.jpg"
            ],
            price: 60,
            id: "SDFJ9EUKERGTJG59486GV4FF598",
            categories: "panjabi",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "White Handloom Viscose-Cotton Coaty",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000092268.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000092268_1.jpg"
            ],
            price: 25,
            id: "RTYKFUJVH8745TIUGJFY87RGJY8",
            categories: "coaty",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Beige Printed Mixed Cotton Coaty",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000092225.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000092225_1.jpg"
            ],
            price: 40,
            id: "453FI8OD4578IYFR5KVHU54896",
            categories: "coaty",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Red Check Cotton Coaty",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000091963.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000091963_1.jpg"
            ],
            price: 30,
            id: "CVR45KV45YI45UVY5IURYC54VC",
            categories: "coaty",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Deep Blue Embroidery Cotton Coaty",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000091822.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0110000091822_1.jpg"
            ],
            price: 24,
            id: "4RFGIJJFLGJKH95FKJGH95YLKJFG",
            categories: "coaty",
            for: "men",
            sizes: [
                "40",
                "42",
                "44"
            ]
        },
        {
            title: "Light Pink Striped Mixed Cotton Executive Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0070000050734.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0070000050734_1.jpg"
            ],
            price: 40,
            id: "C3485DFHUG8475FI45FURIY564",
            categories: "shirts",
            for: "men",
            sizes: [
                "38",
                "40"
            ]
        },
        {
            title: "Beige Printed Endi-Cotton Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0060000132345.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0060000132345_1.jpg"
            ],
            price: 30,
            id: "45F4V5CV45BY5UTYUB57855BU5",
            categories: "shirts",
            for: "men",
            sizes: [
                "L",
                "M"
            ]
        },
        {
            title: "White Striped Printed Mixed Cotton Fitted Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0070000051178_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0070000051178_1_1.jpg"
            ],
            price: 34,
            id: "4VYRYH56BRFGVRYTBU5V4YU56YV",
            categories: "shirts",
            for: "men",
            sizes: [
                "L",
                "M"
            ]
        },
        {
            title: "White Mixed Cotton Fitted Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0060000134233.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/0/0060000134233_1.jpg"
            ],
            price: 45,
            id: "V6YV56UBTYV4567YB467V456VB46",
            categories: "shirts",
            for: "men",
            sizes: [
                "XL",
                "L",
                "M"
            ]
        },
        {
            title: "Sage Grey Printed Cotton T-Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000025943.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000025943_1.jpg"
            ],
            price: 20,
            id: "EV556B574CV7B8IN57BI89OLK89",
            categories: "t-shirt",
            for: "men",
            sizes: [
                "L",
                "M"
            ]
        },
        {
            title: "Blue Printed Cotton T-Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000025833.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000025833_1.jpg"
            ],
            price: 25,
            id: "F459VU58V74V6Y874CVY86484V56",
            categories: "t-shirt",
            for: "men",
            sizes: [
                "XL",
                "L",
                "M"
            ]
        },
        {
            title: "Bottle Green Printed Cotton T-Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000024593.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000024593_1.jpg"
            ],
            price: 19,
            id: "34ynd3845t75dt435dgyer76f5C543",
            categories: "t-shirt",
            for: "men",
            sizes: [
                "L",
                "M",
            ]
        },
        {
            title: "Sage Green Printed Cotton T-Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000026208.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000026208_1.jpg"
            ],
            price: 14,
            id: "3V45V6456VF46YG45F45FG457G645",
            categories: "t-shirt",
            for: "men",
            sizes: [
                "XL",
                "XXL",
                "L",
                "M"
            ]
        },
        {
            title: "Sage Green Printed Cotton T-Shirt",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000024483.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/1/0120000024483_1.jpg"
            ],
            price: 22,
            id: "V346Y3567B46VFY5HTGRYYYY67H865",
            categories: "t-shirt",
            for: "men",
            sizes: [
                "L",
                "M",
            ]
        },
        {
            title: "Multicolour Printed and Embroidered Silk Saree",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/5/0540000018227.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/5/0540000018227_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/5/0540000018227_2.jpg"
            ],
            price: 250,
            id: "V5B6Y7VBTYU547N576N46B7B467B4V7V",
            categories: "saree",
            for: "women",
            sizes: null
        },
        {
            title: "Peach Dyed and Embroidered Silk HERSTORY Saree",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/1/1/1140000000811.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/1/1/1140000000811_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/1/1/1140000000811_2.jpg"
            ],
            price: 330,
            id: "B356VTYUYTRH7656756HYTU5G76G6G6G",
            categories: "saree",
            for: "women",
            sizes: null
        },
        {
            title: "Midnight Blue Tangail Cotton Hand Buti Saree",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/5/0560000055699.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/5/0560000055699_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/0/5/0560000055699_2.jpg"
            ],
            price: 480,
            id: "C356RTRFG6453FFY345V356V457GG6F7",
            categories: "saree",
            for: "women",
            sizes: null
        },
        {
            title: "Olive Brush Painted and Embroidered Silk HERSTORY Saree",
            imgs: [
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/1/1/1140000000692.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/1/1/1140000000692_1.jpg",
                "https://www.aarong.com/media/catalog/product/cache/a0bf23eeb335cd65a0066fea1b86f97b/1/1/1140000000692_2.jpg"
            ],
            price: 520,
            id: "V57VC5C7456YV578V4DG567VU5678UGV",
            categories: "saree",
            for: "women",
            sizes: null
        },
        {
            title: "Comfit UNIQUE Sneaker For Women",
            imgs: [
                "https://cdn.shopify.com/s/files/1/2287/9679/products/1_40dccf46-a1f5-4208-84d8-3cba1c32f1be_1024x1024.jpg?v=1624184633",
                "https://cdn.shopify.com/s/files/1/2287/9679/products/2_7f413724-a20a-4dc9-bd72-6504e3f49d54_1024x1024.jpg?v=1624184634",
                "https://cdn.shopify.com/s/files/1/2287/9679/products/3_931237db-39cc-4e50-bfa8-845aac12e778_1024x1024.jpg?v=1624184633"
            ],
            price: 150,
            id: "EV5B67B457B467VVB6476UV578IUJ578I",
            categories: "shoes",
            for: "women",
            sizes: [
                "3",
                "4",
                "5"
            ]
        },
        {
            title: "Comfit UNIQUE Sneaker For Women Dark",
            imgs: [
                "https://cdn.shopify.com/s/files/1/2287/9679/products/1_f3a1b526-caae-47c7-8a6d-c1d5ad7f2b30_1024x1024.jpg?v=1624184526",
                "https://cdn.shopify.com/s/files/1/2287/9679/products/2_99b80d09-c28c-470c-9252-f5b7852b55cf_1024x1024.jpg?v=1624184526"
            ],
            price: 150,
            id: "7NYC345TCIUY7853TC48C5T45CT454VY4V",
            categories: "shoes",
            for: "women",
            sizes: [
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
    ]

    const categoriesData = [
        {
            for: "women",
            category: "saree",
            img: "https://www.aarong.com/media/catalog/product/cache/8868f685fc8e3f4130872f1fe4545e89/0/5/0540000016710_5.jpg"
        },
        {
            for: "men",
            category: "t-shirt",
            img: "https://m.media-amazon.com/images/I/814-ktCCz1L._UL1500_.jpg"
        },
        {
            for: "men",
            category: "coaty",
            img: "https://www.aarong.com/media/catalog/product/cache/bd40fef6595cf41052cffa2edb765d82/0/1/0110000091761_3.jpg"
        },
        {
            for: "men",
            category: "panjabi",
            img: "https://m.media-amazon.com/images/I/71TN3ZFmbkL._UL1500_.jpg"
        },
        {
            for: "women",
            category: "shoes",
            img: "https://m.media-amazon.com/images/I/71HbbyKmkGL._UL1500_.jpg"
        },
        {
            for: "men",
            category: "shirts",
            img: "https://m.media-amazon.com/images/I/91Xgz+Y0opL._UL1500_.jpg"
        }
    ]

    const bdAllDistricts = [
        {
            name: "Barisal",
            districts: [
                "Barguna",
                "Barisal",
                "Bhola",
                "Jhalokati",
                "atuakhali",
                "Pirojpur",
            ],
        }, {
            name: "Chittagong",
            districts: [
                "Bandarban",
                "Brahmanbaria",
                "Chandpur",
                "Chittagong",
                "Comilla",
                "Cox's Bazar",
                "Feni",
                "Khagrachhari",
                "Lakshmipur",
                "Noakhali",
                "Rangamati",
            ]
        },
        {
            name: "Dhaka",
            districts: [
                "Dhaka",
                "Faridpur",
                "Gazipur",
                "Gopalganj",
                "Kishoreganj",
                "Madaripur",
                "Manikganj",
                "Munshiganj",
                "Narayanganj",
                "Narsingdi",
                "Rajbari",
                "Shariatpur",
                "Tangail",
            ]
        },
        {
            name: "Khulna",
            districts: [
                "Bagerhat",
                "Chuadanga",
                "Jessore",
                "Jhenaidah",
                "Khulna",
                "Kushtia",
                "Magura",
                "Meherpur",
                "Narail",
                "Satkhira",
            ]
        },
        {
            name: "Mymensingh",
            districts: [
                "Jamalpur",
                "Mymensingh",
                "Netrokona",
                "Sherpur",
            ]
        },
        {
            name: "Sylhet",
            districts: [
                "Habiganj",
                "Moulvibazar",
                "Sunamganj",
                "Sylhet",
            ]
        },
        {
            name: "Rangpur",
            districts: [
                "Dinajpur",
                "Gaibandha",
                "Kurigram",
                "Lalmonirhat",
                "Nilphamari",
                "Panchagarh",
                "Rangpur",
                "Thakurgaon",
            ]
        },
        {
            name: "Rajshahi",
            districts: [
                "Bogra",
                "Joypurhat",
                "Naogaon",
                "Natore",
                "Chapainawabganj",
                "Pabna",
                "Rajshahi",
                "Sirajganj",
            ]
        }
    ]

    const bdAllDistrictsWithoutDivision = [
        "Barguna",
        "Barisal",
        "Bhola",
        "Jhalokati",
        "atuakhali",
        "Pirojpur",
        "Bandarban",
        "Brahmanbaria",
        "Chandpur",
        "Chittagong",
        "Comilla",
        "Cox's Bazar",
        "Feni",
        "Khagrachhari",
        "Lakshmipur",
        "Noakhali",
        "Rangamati",
        "Dhaka",
        "Faridpur",
        "Gazipur",
        "Gopalganj",
        "Kishoreganj",
        "Madaripur",
        "Manikganj",
        "Munshiganj",
        "Narayanganj",
        "Narsingdi",
        "Rajbari",
        "Shariatpur",
        "Tangail",
        "Bagerhat",
        "Chuadanga",
        "Jessore",
        "Jhenaidah",
        "Khulna",
        "Kushtia",
        "Magura",
        "Meherpur",
        "Narail",
        "Satkhira",
        "Jamalpur",
        "Mymensingh",
        "Netrokona",
        "Sherpur",
        "Habiganj",
        "Moulvibazar",
        "Sunamganj",
        "Sylhet",
        "Dinajpur",
        "Gaibandha",
        "Kurigram",
        "Lalmonirhat",
        "Nilphamari",
        "Panchagarh",
        "Rangpur",
        "Thakurgaon",
        "Bogra",
        "Joypurhat",
        "Naogaon",
        "Natore",
        "Chapainawabganj",
        "Pabna",
        "Rajshahi",
        "Sirajganj",
    ]


    // Get all products
    app.get('/products', (req, res) => {
        productsCollection.find({})
            .toArray((err, data) => {
                res.send(data.sort(() => Math.random() - 0.5))
            })
    })

    // Get all categories
    app.get('/categories', (req, res) => {
        categoriesCollection.find({})
            .toArray((err, data) => {
                res.send(data)
            })
    })

    // Get all districts
    app.get('/districts', (req, res) => {
        districtsCollection.find({})
            .toArray((err, data) => {
                res.send(data.sort(() => Math.random() - 0.5))
            })
    })

    // Get all districts without division name
    app.get('/districts-witout-division', (req, res) => {
        res.send(bdAllDistrictsWithoutDivision)
    })

    // Get all categories
    app.get('/categories/:genderN', (req, res) => {
        categoriesCollection.find({ for: req.params.genderN })
            .toArray((err, data) => {
                res.send(data.sort(() => Math.random() - 0.5))
            })
    })

    // Get products for men or women by category
    app.get('/products/:gender/:category', (req, res) => {
        productsCollection.find({ for: req.params.gender, categories: req.params.category })
            .toArray((err, data) => {
                res.send(data)
            })
    })

    // Get products by category
    app.get('/products/cate/:category', (req, res) => {
        productsCollection.find({ category: req.params.category })
            .toArray((err, data) => {
                res.send(data)
            })
    })

    // Get products for men
    app.get('/products/men', (req, res) => {
        productsCollection.find({ for: "men" })
            .toArray((err, data) => {
                res.send(data)
            })
    })

    // Get products for women
    app.get('/products/women', (req, res) => {
        productsCollection.find({ for: "women" })
            .toArray((err, data) => {
                res.send(data)
            })
    })

    // Get random products by length
    app.get('/products/random/length/:length', (req, res) => {
        productsCollection.find({})
            .toArray((err, data) => {
                res.send(data.sort(() => Math.random() - 0.5).splice(0, parseInt(req.params.length)))
            })
    })

    // Get products by length
    app.get('/products/length/:length', (req, res) => {
        productsCollection.find({}).limit(0, parseInt(req.params.length))
            .toArray((err, data) => {
                res.send(data)
            })
    })

    // Get product by id
    app.get('/product/:id', (req, res) => {
        productsCollection.findOne({ id: req.params.id })
            .then(response => {
                res.send(response)
            })
    })

    // Get products by multiple id
    app.post('/products-by-multi-id', (req, res) => {
        productsCollection.find({ id: { $in: req.body.id } })
            .toArray((err, data) => {
                res.send(data)
                console.log(data)
            })
    })

    // Add a address
    app.post("/add-address", (req, res) => {
        addressCollection.insertOne(req.body)
            .then(response => {
                if(response?.acknowledged === true) {
                    res.status(200).send("success")
                } else {
                    res.status(400).send("bad")
                }
            })
    })

    // Add a address
    app.get("/address/:email", (req, res) => {
        addressCollection.find({email: req.params.email})
            .toArray((err, docs) => {
                res.send(docs)
            })
    })

    // Post all products Api
    // app.get("/districts-add", (req, res) => {
    //     districtsCollection.insertMany(bdAllDistricts)
    //         .then(() => {
    //             res.send("added...")
    //         })
    // })
});

app.listen(port || process.env.PORT)