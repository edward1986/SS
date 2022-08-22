const { default: config } = require("./config")

let data = {
    DATA: [
        {
            id: '1',
            title: 'Steel',

        },
        {
            id: '2',
            title: 'Masonry',
        },
        {
            id: '3',
            title: 'Lumber',
        },{
            id: '4',
            title: 'Tilework',
        },{
            id: '5',
            title: 'Plumbing',
        },{
            id: '6',
            title: 'Glass',
        },
    ],
    subData:[
        {
            id: '1',
            data_id: "1",
            title: 'Rebar',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/steel/Rebar-Metal-Supermarkets-removebg-preview%202.png?raw=true'
            }
        },
        {
            id: '2',
            data_id: "1",
            title: 'Angle Bar',
            image: {
                url: "https://github.com/edward1986/SS/blob/master/assets/png/steel/image%205.png?raw=true"
                 }
        },
        {
            id: '3',
            data_id: "1",
            title: 'Rec.Hollow Bar',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/steel/image%2010.png?raw=true'

            }
        },{
            id: '4',
            data_id: "1",
            title: 'Steel x',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/steel/Rebar-Metal-Supermarkets-removebg-preview%202.png?raw=true'
            }
        },{
            id: '5',
            data_id: "1",
            title: 'Steel x',
            image: {
                url: "https://github.com/edward1986/SS/blob/master/assets/png/steel/image%205.png?raw=true"
            }
        },{
            id: '6',
            data_id: "1",
            title: 'Steel x',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/steel/image%2010.png?raw=true'

            }
        },
        {
            id: '7',
            data_id: "3",
            title: 'Plywood',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/lumber/kikcnowjcodj-removebg-preview%201.png?raw=true'
            }
        },
        {
            id: '8',
            data_id: "3",
            title: 'Ficem board ',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/lumber/image%2013.png?raw=true'
            }
        },
        {
            id: '9',
            data_id: "3",
            title: 'Saw dust',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/lumber/1200x-1-removebg-preview%201.png?raw=true'
            }
        },{
            id: '10',
            data_id: "3",
            title: 'Coco Lumber',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/lumber/image%2015.png?raw=true'
            }
        },{
            id: '11',
            data_id: "3",
            title: 'Lumber x',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/lumber/kikcnowjcodj-removebg-preview%201.png?raw=true'
            }
        },{
            id: '12',
            data_id: "3",
            title: 'Lumber x',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/lumber/image%2013.png?raw=true'
            }
        },
        {
            id: '13',
            data_id: "6",
            title: 'Frosted Glass',
            image:{
                url: "https://github.com/edward1986/SS/blob/master/assets/png/glass/image3-2-1024x900-removebg-preview%201.png?raw=true"
            }
        },
        {
            id: '14',
            data_id: "6",
            title: 'Insulated Glass',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/glass/image5-8-1024x882-removebg-preview%201.png?raw=true'
            }
        },
        {
            id: '15',
            data_id: "6",
            title: 'Tempered Glass',
            image:{
                url:'https://github.com/edward1986/SS/blob/master/assets/png/glass/image7-3-1024x832-removebg-preview%201.png?raw=true'
            }
        },{
            id: '16',
            data_id: "6",
            title: 'Plexiglass',
            image:{
                url: "https://github.com/edward1986/SS/blob/master/assets/png/glass/f5311a964c613653951a975fdbbdd487-removebg-preview%201.png?raw=true"
            }
        },{
            id: '17',
            data_id: "6",
            title: 'Laminated Glass',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/glass/e9568a6c5f578f3c8e891d0f0650fc8d-removebg-preview%201.png?raw=true'
            }

        },{
            id: '18',
            data_id: "6",
            title: 'Mirror glass',
            image:{
                url: "https://github.com/edward1986/SS/blob/master/assets/png/glass/image%2016.png?raw=true"
            }
        },{
            id: '19',
            data_id: "6",
            title: 'Glass x',
            image:{
                url: "https://github.com/edward1986/SS/blob/master/assets/png/glass/image3-2-1024x900-removebg-preview%201.png?raw=true"
            }
        },{
            id: '20',
            data_id: "6",
            title: 'Glass x',
            image: {
                url: 'https://github.com/edward1986/SS/blob/master/assets/png/glass/image5-8-1024x882-removebg-preview%201.png?raw=true'
            }
        },
    ],
    "homeBanner": [
        {
            image: "http://intelvue.com/demo/app-template/light/main-banner.jpg",
        },
        {
            image: "http://intelvue.com/demo/app-template/dark/main-banner.jpg",
        }
    ],
    "brands": [
        {
            "name": "Top",
            "image": "https://intelvue.com/demo/app-template/light/Coat.png",
            "id": 1
        },
        {
            "name": "Bottom",
            "image": "https://intelvue.com/demo/app-template/light/Dresses.png",
            "id": 2
        },
        {
            "name": "Bottom",
            "image": "https://intelvue.com/demo/app-template/light/Jewellery.png",
            "id": 3
        },
        {
            "name": "Bottom",
            "image": "https://intelvue.com/demo/app-template/light/Gentlemen.png",
            "id": 4
        }
    ],
    "categories": [
        {
            "name": "Top",
            "image": "http://intelvue.com/demo/app-template/light/p2.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/1.png",
            "id": 1,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "http://intelvue.com/demo/app-template/light/p1.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/2.png",
            "id": 2,
            "title_position": "left"
        },
        {
            "name": "Top",
            "image": "http://intelvue.com/demo/app-template/light/p4.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/3.png",
            "id": 3,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "http://intelvue.com/demo/app-template/light/p5.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/4.png",
            "id": 4,
            "title_position": "left"
        }
    ],
    "items": [
        {
            "name": "T-Shirt 0xx Small Size nala box",
            "sku": "SKU001",
            "images": [
                "http://intelvue.com/demo/app-template/light/p1.png",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "$200",
            "id": 1,
            "rating": 3,
            "brand_name": "My Brand",
            "description": "<h3>Full Description</h3><p>Nice Dude</p>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "http://intelvue.com/demo/app-template/light/p2.png",
                "http://intelvue.com/demo/app-template/light/p3.png"
            ],
            "price": "$200",
            "special_price": "$160",
            "id": 2,
            "rating": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "http://intelvue.com/demo/app-template/light/p4.png",
                "http://intelvue.com/demo/app-template/light/p5.png"
            ],
            "price": "$200",
            "special_price": "$160",
            "id": 3,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "http://intelvue.com/demo/app-template/light/p5.png",
                "http://intelvue.com/demo/app-template/light/p6.png"
            ],
            "price": "$200",
            "special_price": "$160",
            "id": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "http://intelvue.com/demo/app-template/light/p1.png",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "$200",
            "special_price": "$160",
            "id": 5,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "http://intelvue.com/demo/app-template/light/p3.png",
                "http://intelvue.com/demo/app-template/light/p4.png"
            ],
            "price": "$200",
            "special_price": "$160",
            "id": 6,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        }
    ],
    "cart": {
        "lines": [
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                "rate": "$200",
                "linetotal": "$200",
                "id": 1,
                "qty": 1
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                "rate": "$200",
                "linetotal": "$600",
                "id": 1,
                "qty": 3
            }
        ],
        "summary": {
            "total": "$1000",
            "subtotal": "$800",
            "estimatedshipping": "$100",
            "taxtotal": "$100"
        }
    },
    "addresses": [
        {
            "name": "Demo Address 1",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": true,
            "id": 1
        },
        {
            "name": "Demo Address 2",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 2
        },
        {
            "name": "Demo Address 3",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 3
        },
        {
            "name": "Demo Address 4",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 4
        }
    ],
    "orders": [
        {
            "id": 1,
            "order_no": "SO-10001",
            "date": "2019/12/12",
            "status": "pending",
            "statusLabel": "Pending",
            "total": "$1000",
            "summary": {
                "total": "$1000",
                "shippingtotal": "$100",
                "taxtotal": "$100",
                "subtotal": "$800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                }
            ]
        },
        {
            "id": 3,
            "order_no": "SO-10002",
            "date": "2019/12/12",
            "status": "billed",
            "statusLabel": "Billed",
            "total": "$1000",
            "summary": {
                "total": "$1000",
                "shippingtotal": "$100",
                "taxtotal": "$100",
                "subtotal": "$800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                }
            ]
        },
        {
            "id": 2,
            "order_no": "SO-10003",
            "date": "2019/12/12",
            "status": "cancelled",
            "statusLabel": "Cancelled",
            "total": "$1000",
            "summary": {
                "total": "$1000",
                "shippingtotal": "$100",
                "taxtotal": "$100",
                "subtotal": "$800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                }
            ]
        }
    ],
    "filters": {
        "colors": [
            {"id": 1, "label": "Black"},
            {"id": 2, "label": "White"},
            {"id": 3, "label": "Red"},
            {"id": 4, "label": "Maroon"},
            {"id": 5, "label": "Blue"},
            {"id": 6, "label": "Grey"},
        ],
        "sizes": [
            {"id": 1, "label": "XSm"},
            {"id": 2, "label": "Sm"},
            {"id": 3, "label": "M"},
            {"id": 4, "label": "L"},
            {"id": 5, "label": "XL"},
            {"id": 6, "label": "XXL"},
            {"id": 7, "label": "XXXL"},
            {"id": 8, "label": "XXXXL"},
        ]
    }
}

if(config.layoutMode == 'dark') {
    data = {
        "homeBanner": [
            {
                image: "http://intelvue.com/demo/app-template/dark/main-banner.jpg",
            },
            {
                image: "http://intelvue.com/demo/app-template/light/main-banner.jpg",
            }
        ],
        "brands": [
            {
                "name": "Brand 1",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-1.png",
                "id": 1
            },
            {
                "name": "Brand 2",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-2.png",
                "id": 2
            },
            {
                "name": "Brand 3",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-3.png",
                "id": 3
            },
            {
                "name": "Brand 4",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-4.png",
                "id": 4
            }
        ],
        "categories": [
            {
                "name": "Top",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-1.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-1.png",
                "id": 1
            },
            {
                "name": "Bottom",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-2.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-2.png",
                "id": 2,
                "title_position": "left"
            },
            {
                "name": "Top",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-3.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-3.png",
                "id": 3
            },
            {
                "name": "Bottom",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-4.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-4.png",
                "id": 4,
                "title_position": "left"
            }
        ],
        "items": [
            {
                "name": "T-Shirt 0xx Small Size nala box",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-1.png",
                    "http://intelvue.com/demo/app-template/dark/product-2.png"
                ],
                "price": "$200",
                "id": 1,
                "rating": 3,
                "brand_name": "My Brand",
                "description": "<h3>Full Description</h3><p>Nice Dude</p>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "http://intelvue.com/demo/app-template/dark/product-3.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 2,
                "rating": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-3.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 3,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-4.png",
                    "http://intelvue.com/demo/app-template/dark/product-5.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-5.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 5,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-3.png",
                    "http://intelvue.com/demo/app-template/dark/product-2.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 6,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            }
        ],
        "cart": {
            "lines": [
                {
                    "name": "T-Shirt 0xx",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-1.png",
                    "rate": "$200",
                    "linetotal": "$200",
                    "id": 1,
                    "qty": 1
                },
                {
                    "name": "T-Shirt 0xx",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "rate": "$200",
                    "linetotal": "$600",
                    "id": 1,
                    "qty": 3
                }
            ],
            "summary": {
                "total": "$1000",
                "subtotal": "$800",
                "estimatedshipping": "$100",
                "taxtotal": "$100"
            }
        },
        "addresses": [
            {
                "name": "Demo Address 1",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": true,
                "id": 1
            },
            {
                "name": "Demo Address 2",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 2
            },
            {
                "name": "Demo Address 3",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 3
            },
            {
                "name": "Demo Address 4",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 4
            }
        ],
        "orders": [
            {
                "id": 1,
                "order_no": "SO-10001",
                "date": "2019/12/12",
                "status": "pending",
                "statusLabel": "Pending",
                "total": "$1000",
                "summary": {
                    "total": "$1000",
                    "shippingtotal": "$100",
                    "taxtotal": "$100",
                    "subtotal": "$800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    }
                ]
            },
            {
                "id": 3,
                "order_no": "SO-10002",
                "date": "2019/12/12",
                "status": "billed",
                "statusLabel": "Billed",
                "total": "$1000",
                "summary": {
                    "total": "$1000",
                    "shippingtotal": "$100",
                    "taxtotal": "$100",
                    "subtotal": "$800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    }
                ]
            },
            {
                "id": 2,
                "order_no": "SO-10003",
                "date": "2019/12/12",
                "status": "cancelled",
                "statusLabel": "Cancelled",
                "total": "$1000",
                "summary": {
                    "total": "$1000",
                    "shippingtotal": "$100",
                    "taxtotal": "$100",
                    "subtotal": "$800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    }
                ]
            }
        ],
        "filters": {
            "colors": [
                {"id": 1, "label": "Black"},
                {"id": 2, "label": "White"},
                {"id": 3, "label": "Red"},
                {"id": 4, "label": "Maroon"},
                {"id": 5, "label": "Blue"},
                {"id": 6, "label": "Grey"},
            ],
            "sizes": [
                {"id": 1, "label": "XSm"},
                {"id": 2, "label": "Sm"},
                {"id": 3, "label": "M"},
                {"id": 4, "label": "L"},
                {"id": 5, "label": "XL"},
                {"id": 6, "label": "XXL"},
                {"id": 7, "label": "XXXL"},
                {"id": 8, "label": "XXXXL"},
            ]
        }
    }
}

export default data;