let transactions = [
  {
    customer: "John Smith",
    productName: "Laptop",
    productDescription: "High-end gaming laptop",
    experience: 450,
    purchaseDate: "2021-08-15",
    orderId: 1,
    allied: "TechStore",
  },
  {
    customer: "Jane Doe",
    productName: "Smartphone",
    productDescription: "Latest model smartphone",
    experience: 600,
    purchaseDate: "2021-09-02",
    orderId: 2,
    allied: "MobileWorld",
  },
  {
    customer: "Michael Brown",
    productName: "Tablet",
    productDescription: "10-inch screen tablet",
    experience: 750,
    purchaseDate: "2021-10-10",
    orderId: 3,
    allied: "GadgetHub",
  },
  {
    customer: "Emily Johnson",
    productName: "Smartwatch",
    productDescription: "Waterproof smartwatch",
    experience: 900,
    purchaseDate: "2021-11-20",
    orderId: 4,
    allied: "WatchStore",
  },
  {
    customer: "Chris Lee",
    productName: "Headphones",
    productDescription: "Noise-cancelling headphones",
    experience: 300,
    purchaseDate: "2021-12-05",
    orderId: 5,
    allied: "AudioShop",
  },
  {
    customer: "Samantha Davis",
    productName: "Camera",
    productDescription: "DSLR camera",
    experience: 950,
    purchaseDate: "2022-01-15",
    orderId: 6,
    allied: "CameraWorld",
  },
  {
    customer: "Daniel Martinez",
    productName: "Monitor",
    productDescription: "4K monitor",
    experience: 800,
    purchaseDate: "2022-02-22",
    orderId: 7,
    allied: "ScreenStore",
  },
  {
    customer: "Sophia Wilson",
    productName: "Printer",
    productDescription: "Wireless printer",
    experience: 700,
    purchaseDate: "2022-03-12",
    orderId: 8,
    allied: "PrintShop",
  },
  {
    customer: "James Anderson",
    productName: "Router",
    productDescription: "High-speed router",
    experience: 650,
    purchaseDate: "2022-04-01",
    orderId: 9,
    allied: "NetworkHub",
  },
  {
    customer: "Olivia Clark",
    productName: "Keyboard",
    productDescription: "Mechanical keyboard",
    experience: 500,
    purchaseDate: "2022-05-19",
    orderId: 10,
    allied: "KeyStore",
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    const response = {
      code: 200,
      data: transactions,
    };
    res.status(200).json(response);
  } else if (req.method === 'POST') {
    const newTransaction = req.body;
    newTransaction.orderId = transactions.length + 1;
    transactions.push(newTransaction);
    res.status(201).json({ code: 201, message: 'Transaction added successfully' });
  } else {
    res.status(405).json({ code: 405, message: 'Method not allowed' });
  }
}
