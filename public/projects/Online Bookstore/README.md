# 📚 Pondicherry University Book Store

A modern, responsive online bookstore web application built with vanilla JavaScript, HTML5, and CSS3. This application uses **localStorage** for data persistence, making it a fully client-side application that requires no server or database setup.

![Bookstore](https://img.shields.io/badge/Bookstore-Online-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-Latest-orange)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue)

## ✨ Features

- ✅ **User Registration & Login** - Secure user authentication using localStorage
- ✅ **Book Catalogue** - Browse 30+ books across 6 departments
- ✅ **Search & Filter** - Search by title/author and filter by department
- ✅ **Shopping Cart** - Add, update, and remove items from cart
- ✅ **Checkout System** - Multiple payment methods (Cash, UPI, Credit Card)
- ✅ **Invoice Generation** - Generate and print invoices
- ✅ **Modern UI** - Glassmorphism design with smooth animations
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **No Backend Required** - Fully client-side using localStorage

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or database setup required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vishnujayakumar-04/BookStore_website.git
   cd BookStore_website
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Access the application**
   - Open your browser and navigate to:
     - Direct file: `file:///path/to/index.html`
     - Local server: `http://localhost:8000`

## 📖 Usage

### Registration
1. Click on **Registration** in the navigation
2. Fill in all required fields:
   - Full Name
   - Email
   - Username
   - Password (minimum 6 characters)
   - Phone Number (10 digits)
   - Sex
   - Date of Birth
3. Click **Register**

### Login
1. Click on **Login** in the navigation
2. Enter your username/email and password
3. Click **Login**

### Shopping
1. Browse the **Catalogue** to see all available books
2. Use the sidebar to filter by department or search by title/author
3. Click **Add to Cart** on any book
4. View your cart and adjust quantities
5. Proceed to checkout
6. Select payment method and fill in details
7. Generate invoice

## 🎨 Departments

The bookstore features books from 6 departments:

1. **Management**
2. **Mathematical Sciences**
3. **Engineering & Technology**
4. **Physical, Chemical & Applied Sciences**
5. **Life Sciences**
6. **Humanities**

## 🗂️ Project Structure

```
BookStore_website/
├── index.html              # Main HTML file
├── script.js              # JavaScript logic (localStorage-based)
├── style.css              # CSS styling
├── README.md              # This file
├── .gitignore             # Git ignore file
│
├── PULOGO.png            # University logo
│
└── Book Images/          # Book cover images
    ├── MANAGEMENT Book/
    ├── MATHEMATICAL SCIENCES Book/
    ├── ENGINEERING & TECHNOLOGY/
    ├── PHYSICAL, CHEMICAL & APPLIED SCIENCES Book/
    ├── LIFE SCIENCES Book/
    └── HUMANITIES Book/
```

## 💾 Data Storage

All data is stored in the browser's **localStorage**:

- `bookstore_users` - Registered users
- `bookstore_books` - Book catalogue (30 books)
- `bookstore_carts` - Shopping cart items
- `bookstore_invoices` - Generated invoices
- `bookstore_current_user` - Currently logged-in user

**Note:** Data persists in the browser until cleared. Each browser has its own separate data.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with glassmorphism effects
- **JavaScript (ES6+)** - Vanilla JavaScript, no frameworks
- **localStorage API** - Client-side data persistence

## 🎯 Key Features Explained

### Authentication
- Users can register with email, username, and password
- Passwords are hashed (simple hash for demo purposes)
- Session management using localStorage
- Login persists across page refreshes

### Shopping Cart
- Add multiple books to cart
- Update quantities
- Remove individual items
- Clear entire cart
- Cart persists per user

### Payment System
- Three payment methods:
  - **Cash** - Cash on delivery
  - **Online UPI** - UPI payment with transaction ID
  - **Credit Card** - Card payment with approval code
- GST calculation (5%)
- Invoice generation with unique ID

## 🎨 UI/UX Features

- **Glassmorphism Design** - Modern frosted glass effect
- **Smooth Animations** - Fade-in, slide, and pulse effects
- **Responsive Layout** - Adapts to different screen sizes
- **User-Friendly Navigation** - Intuitive menu system
- **Visual Feedback** - Toast notifications for actions
- **Form Validation** - Real-time input validation

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🔒 Security Notes

This is a **client-side demo application**. For production use, consider:

- Implementing proper password hashing (bcrypt)
- Adding server-side validation
- Using HTTPS
- Implementing CSRF protection
- Adding rate limiting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Vishnu Jayakumar**

- GitHub: [@Vishnujayakumar-04](https://github.com/Vishnujayakumar-04)

## 🙏 Acknowledgments

- Pondicherry University for the inspiration
- All the book authors and publishers
- Open source community

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

**Made with ❤️ for Pondicherry University**

