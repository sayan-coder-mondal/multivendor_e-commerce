# Multivendor E-commerce Website (May 2024)

This project was developed using HTML, CSS, JavaScript, and Handlebars (HBS) as the template engine for the frontend. The backend was built with Node.js, Express.js, and MongoDB for database management. JWT (JSON Web Tokens) is used for secure authentication.

# Different Types of Roles
The website supports five different types of users:
1. Customers (Users)
2. Sellers
3. Admin
4. Product Managers (employees assisting the admin with product-related tasks)
5. User Managers (employees assisting the admin with user-related tasks)


# Features:
* Authentication and User Management:
    User, Admin, and Seller Registration with password hashing.
    Secure Authentication to ensure safe access.
    Role-based Authorization differentiating between admins, sellers, and regular users.
    Profile Management: Users and sellers can update their profiles.

* Product Browsing and Shopping:
    Product Search and Category Pages for easy product discovery.
    Product Search with Filters and Sorting options.
    Buy Now functionality allowing direct purchases.
    Wishlist functionality for planning future purchases.
    Add to Cart to purchase multiple products at once.

* Order and Review Management:
    Order Tracking allowing users to track order status in real-time.
    Product Reviews and Ratings for customers after successful delivery.

* Admin and Seller Management:
    * Admin Panel:
        Manage sellers (view, activate/inactivate).
        Manage users (view, activate/inactivate).
        Manage employees (add, view, update, and delete).
        Approve or reject product listings.
        View all products.
        Delete products.

    * Seller Panel:
        Manage products (add, update, delete).
        View the number of products sold and the total sales amount.
        Process and fulfill customer orders.

    * Employee Panel:
        Product Managers: Approve or reject product listings.
        User Managers: Activate or deactivate users and sellers.

* UI/UX:
    User-friendly Interface for easy navigation and smooth user experience.


# User Roles Overview
* Customer (User)
    Browse and search products.
    View products by price range.
    Securely place orders.
    Track order status in real-time.
    Add products to the cart and wishlist.
    Edit personal profiles.
    Leave reviews and ratings.

* Seller
    Add, update, and delete products.
    View uploaded products.
    Fulfill orders.
    View product sales details.

* Admin
    Add and manage employees with different roles.
    Manage sellers.
    Oversee product listings.
    Monitor user activity.
    Manage user accounts.

* Product Manager
    Approve or reject product listings.
    Delete product.

* User Manager
    Activate or deactivate users and sellers.
