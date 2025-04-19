# 🍔 FoodExpress - Food Delivery Web App  

![Project Screenshot](https://www.jamesdev.com.ng/static/media/restaurant.d4d64bef5fdf04d04265.PNG)
*A full-stack food delivery platform connecting users with local restaurants.*  

## 🌟 Features  

### 🗺️ Location-Based Restaurant Discovery  
- Uses **Google Maps API** to detect user location  
- Displays nearby restaurants in real-time  

### � Meal Package Listings  
- Browse restaurant menus with images & descriptions  
- Filter by cuisine, price, or dietary preferences  

### 💳 Secure Payments  
- Integrated **Paystack API** for seamless transactions  
- Supports cards, bank transfers, and mobile money  

### 📱 Responsive Design  
- Mobile-first UI built with **React**  
- Smooth experience across all devices  

## 🛠️ Tech Stack  

| Frontend               | Backend              | APIs & Services       |  
|------------------------|----------------------|-----------------------|  
| React                  | Node.js              | Google Maps API       |  
| Context API            | Express.js           | Paystack API          |  
| CSS Modules            | MongoDB              | Geolocation API       |  
|                        | JWT Authentication   |                       |  

## 🚀 Live Demo  

🔗 [Try the Live Demo](https://restaurant-aosa.onrender.com)  
🎥 [Watch Demo Video on YouTube](https://youtu.be/DbBHNgwk7i0?si=OMtJ94Uh5nNpCInM)  

## ⚙️ Installation  

### Prerequisites  
- Node.js (v16+)  
- MongoDB Atlas account or local MongoDB  
- Google Maps API key  
- Paystack secret key  

### Frontend Setup  
```bash
git clone https://github.com/Blaspace/restaurant
cd restaurant
npm install
echo "REACT_APP_GOOGLE_MAPS_API_KEY=your_key" > .env
npm start
```

### Backend Setup
```bash
get clone https://github.com/Blaspace/restaurant-server
npm install
echo "MONGODB_URI=your_connection_string
PAYSTACK_SECRET_KEY=your_key
JWT_SECRET=your_secret" > .env
npm run dev
```

### License
MIT License - see LICENSE for details
