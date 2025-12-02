# Bookstore PHP/MySQL Setup Instructions

## Step 1: Database Setup

1. Open **phpMyAdmin** (http://localhost/phpmyadmin)
2. Click on **SQL** tab
3. Copy and paste the entire content from `database_setup.sql` file
4. Click **Go** to execute
5. This will create:
   - Database: `bookstore_db`
   - Tables: `users`, `books`, `carts`, `invoices`
   - Sample book data (30 books)

## Step 2: Database Configuration

1. Open `config.php` file
2. Update database credentials if needed:
   ```php
   $host = "localhost";
   $username = "root";
   $password = "";  // Your MySQL password (if set)
   $database = "bookstore_db";
   ```

## Step 3: Start XAMPP

1. Make sure **Apache** is running in XAMPP Control Panel
2. Make sure **MySQL** is running in XAMPP Control Panel

## Step 4: Access the Application

Open your browser and go to:
```
http://localhost/Web%20Technology%20Record/Ex%205%20PHP%20databse%20in%20bookstore/index.html
```

## Features

✅ **User Registration & Login** - Stored in MySQL database
✅ **Book Catalogue** - Loaded from MySQL database
✅ **Shopping Cart** - Stored in MySQL database (per user)
✅ **Checkout & Payment** - Multiple payment methods
✅ **Invoice Generation** - Saved to MySQL database
✅ **No LocalStorage** - All data is in MySQL database

## Testing

1. **Register a new user:**
   - Go to Registration section
   - Fill in all fields
   - Password must be at least 6 characters

2. **Login:**
   - Use your registered username/email and password

3. **Add books to cart:**
   - Browse catalogue
   - Click "Add to Cart" on any book
   - View cart to see items

4. **Checkout:**
   - Go to Cart
   - Click "Proceed to Checkout"
   - Select payment method and fill details
   - Generate invoice

## Troubleshooting

- **Database connection error:** Check MySQL is running and credentials in `config.php`
- **Books not loading:** Make sure you ran the SQL setup file
- **Cart not working:** Make sure you're logged in
- **Session issues:** Clear browser cookies and try again

## File Structure

```
Ex 5 PHP databse in bookstore/
├── index.html          (Main HTML file - UI structure)
├── script.js           (JavaScript - PHP API calls, no localStorage)
├── style.css           (CSS styling)
├── config.php          (Database configuration)
├── register.php        (User registration API)
├── login.php           (User login API)
├── check_session.php    (Check if user is logged in)
├── get_books.php       (Get all books from database)
├── cart.php            (Cart operations: add, remove, update, clear)
├── invoice.php         (Generate and save invoice)
├── database_setup.sql  (SQL file to create database and tables)
└── README_SETUP.md     (This file)
```

## Notes

- All user data, cart, and invoices are stored in MySQL database
- Sessions are used to track logged-in users
- Passwords are hashed using PHP's `password_hash()` function
- The application requires users to be logged in to use cart features

