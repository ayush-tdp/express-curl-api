---

### **📌 Express Curl API - Universal API Proxy**  

🚀 **Express Curl API** is a dynamic, all-in-one REST API proxy built using **Node.js & Express** and hosted on **Vercel**. This API allows you to send requests to third-party APIs, bypassing CORS restrictions and network limitations in web applications.  

---

## **✨ Features**  

✅ **Supports all HTTP Methods** (`GET`, `POST`, `PUT`, `DELETE`, etc.)  
✅ **Fully Dynamic** - Pass custom URLs, headers, and request bodies  
✅ **Bypass CORS Issues** - Helps in calling third-party APIs that block web requests  
✅ **GraphQL Compatible** - Send GraphQL queries easily  
✅ **Deploy on Vercel** - Lightning-fast API hosting  

---

## **📂 Project Setup**  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/ayush-tdp/express-curl-api.git
cd express-curl-api
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Server Locally**
```bash
node ./api/all-in-one.js
```

💡 The API will be available at:  
`http://localhost:3000/api/all-in-one`

---

## **🚀 How to Use? (Example Requests)**  

### **1️⃣ Simple JSON API Request**
```bash
curl -X POST "https://express-curl-api.vercel.app/api/all-in-one" \
    -H "Content-Type: application/json" \
    -d '{
        "method": "GET",
        "url": "https://jsonplaceholder.typicode.com/todos/1",
        "headers": {
            "Content-Type": "application/json"
        }
    }'
```
📌 **Expected Response**:
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

---

### **2️⃣ Shopify GraphQL Query**
```javascript
const query = `{
  products(first: 10) {
    edges {
      node {
        id
        title
        priceRange {
          minVariantPrice { amount currencyCode }
        }
      }
    }
  }
}`;

fetch("https://express-curl-api.vercel.app/api/all-in-one", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    method: "POST",
    url: "https://your-shopify-store.myshopify.com/api/2025-01/graphql.json",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "xyz"
    },
    body: { query }
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

📌 **Expected Response**:  
```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Product/123456789",
            "title": "Sample Product",
            "priceRange": {
              "minVariantPrice": { "amount": "100.00", "currencyCode": "USD" }
            }
          }
        }
      ]
    }
  }
}
```

---

## **📜 API Request Format**  
To make a request, send a `POST` request to:  
📌 **Endpoint:**  
```
https://express-curl-api.vercel.app/api/all-in-one
```

📌 **Request Body:**
```json
{
  "method": "GET/POST/PUT/DELETE",
  "url": "https://third-party-api.com/data",
  "headers": {
    "Authorization": "Bearer YOUR_TOKEN",
    "Content-Type": "application/json"
  },
  "body": {
    "key": "value"
  }
}
```

📌 **Response:**
The API will return the exact response from the requested third-party API.

---

## **🛠 Deployment on Vercel**  

🚀 To deploy this API on **Vercel**, follow these steps:  

1️⃣ **Install Vercel CLI**  
```bash
npm install -g vercel
```

2️⃣ **Deploy Your Project**  
```bash
vercel
```

3️⃣ **Get Your Live URL**  
Once deployed, your API will be available at:  
`https://express-curl-api.vercel.app/api/all-in-one`

---

## **🔗 Use Cases**
📌 **Bypass CORS Restrictions** – Call APIs that are blocked in the browser  
📌 **Shopify API Integration** – Fetch products, customers, and orders  
📌 **Secure API Calls** – Protect sensitive API credentials  
📌 **GraphQL API Requests** – Fetch structured data  
📌 **Custom Webhooks** – Pass and modify request data dynamically  

---

## **👨‍💻 Author**
Made with ❤️ by **[Ayush Varma](https://github.com/ayush-tdp)**  

📌 **GitHub:** [https://github.com/ayush-tdp](https://github.com/ayush-tdp)  
📌 **Website:** [https://yourwebsite.com](https://yourwebsite.com)  

⭐ **If you like this project, give it a star!** 🌟🚀  

---
