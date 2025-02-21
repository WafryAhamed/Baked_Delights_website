
<img width="603" alt="Logo1" src="https://github.com/user-attachments/assets/e10933c9-10f0-4d99-8d96-2f2ad84b2273" />



# Bakery Delights Website - front-end


Welcome to **Bakery Delights**, an online bakery store where you can explore and purchase a wide variety of baked goods such as cakes, pies, cookies, muffins, and more! This platform is built using modern web technologies like **React**, **Framer Motion**, and **React Router**, providing a seamless user experience with smooth animations, responsive design, and dynamic product filtering.


![image](https://github.com/user-attachments/assets/ceb9dc7b-8ad5-4de5-8e2c-c9f84b49b57b)

![image](https://github.com/user-attachments/assets/02923d60-1238-4fca-a8e0-a397fa552f6d)

![image](https://github.com/user-attachments/assets/bb5609a3-dc98-4524-b0f9-e3aac3d4da7e)
![image](https://github.com/user-attachments/assets/83499bd2-9f23-454f-baaf-c68a6fafe67b)
![image](https://github.com/user-attachments/assets/5d6048e7-2a9d-4caa-8eff-d003959f4a96)
![image](https://github.com/user-attachments/assets/84811b91-cde1-439b-b025-996b26d142ab)
![image](https://github.com/user-attachments/assets/6f8e80e9-11a4-4ba7-82e6-3fd2935da624)
![image](https://github.com/user-attachments/assets/bbbe161a-d076-47e7-83bb-dca90b0fbc06)



## Features

- **Responsive UI**: The website is fully optimized for both desktop and mobile devices, ensuring a consistent experience across all screen sizes.
- **Dynamic Product Search**: Users can filter products by name in real-time using the search bar.
- **Category-wise Product Display**: Products are organized into categories like Cakes, Pies, Pastries, Breads, Cookies, and Muffins. Each category expands to display its respective items.
- **Interactive Icons**: Navigation icons (e.g., shopping cart, user profile) enhance usability and provide quick access to essential features.
- **Smooth Scrolling**: Clicking on navigation links or the search bar smoothly scrolls to the respective sections.
- **Authentication**: Users can log in or sign up using username/password or third-party options like Google , Microsoft  and Apple ID.
- **Shopping Cart**: Add products to the cart, review them, and proceed to checkout.
- **Animations**: Smooth animations powered by **Framer Motion** enhance the user experience when interacting with elements like buttons, product cards, and category filters.
- **Sticky Header**: The header changes color dynamically when scrolling past a certain point, improving navigation visibility.



## Technologies Used

### Frontend
- **React.js:** The core framework for building the user interface.
- **Vite:** Fast build tool for modern web applications. 
- **React Router DOM:** Handles client-side routing for seamless navigation between pages (e.g., Home, Shop, Cart).
- **Framer Motion:**  Adds smooth animations and transitions to UI components, such as sliding product cards and hover effects.
- **React Scroll:** Enables smooth scrolling effects for better navigation experience.
- **Lucide React:** Icon library for UI enhancements.
- **React Icons:** Provides a library of customizable icons for navigation, buttons, and other interactive elements.
- **ESLint:** Ensures code linting and formatting for maintaining code quality.
- **CSS:** Custom styles for layout, typography, and responsiveness.



## Basic Software Requirements

To run the Bakery Delights website locally, you need the following installed:

- **Node.js** : Download and install from nodejs.org .
- **npm**: Comes bundled with Node.js.
- **Vite** : A fast build tool for modern web development. Ensure it is installed globally or as a project dependency.
- **VS Code**: Recommended for development.


## Installation Instructions

1. **Clone the Repository**:
   Open a terminal and run:
   


2. **Navigate to the Project Folder**:
   ```bash
   cd bakery-delights 
   ```
or
  ```bash
    cd Baked_Delights_website-main
   ```

3. **Install Dependencies**:
   Ensure `npm` is installed, then run:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   After installing dependencies, run:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   Once the server starts, open your browser and visit:
   ```bash
   http://localhost:5173/
   ```






## How the Website Works

### Home Page
- The home page features a **sticky header** that changes color when scrolling past a certain point.
- Users can navigate to different sections like Home, Shopping and Contact using the navbar links.

### Shopping  Page
- The **Shopping** page displays products categorized into sections like Cakes, Pies, Pastries, Breads, Cookies, and Muffins.
- A **search bar** allows users to filter products by name in real-time.
- Each product card includes an image, description, price, and a "Buy now" button that redirects to the **Buy Page**.

### Authentication
- Users can log in or sign up using their email/password or third-party options like **Google  , Microsoft** and **Apple ID**.
- The authentication modal provides a clean and intuitive interface for login and signup.
- A strong password system is implemented, requiring a mix of uppercase letters, lowercase letters, numbers, and special characters to enhance security.

### Cart Page
- Users can add products to the cart and review them on the **Cart Page**.
- The cart icon in the header shows the number of items added.


## Key Highlights

- **Third-Party Login**: Supports Google , Microsoft and Apple ID login for convenience.
- **Error Handling**: Displays error messages for invalid inputs (e.g., incorrect login credentials, invalid phone numbers).
- **Fallback Images**: If a product image is unavailable, a default placeholder image is displayed.
- **Loading Indicators**: Buttons show loading spinners during processes like login or signup.




## Acknowledgements

- **React Icons**: Provides the icons used in the navbar and buttons.
- **Framer Motion**: Powers the smooth animations and transitions throughout the website.
- **CSS Styling**: Custom styles ensure a clean and modern design.



## Future Work
While the current version of Bakery Delights is feature-rich and user-friendly, there are several areas where the platform can be further enhanced to provide an even better experience for users and administrators. Below are some ideas for future development:

**1. User Dashboard**
- **Description :** Create a personalized dashboard for logged-in users where they can view their order history, wishlist, saved payment methods, and account settings.
- **Benefits :** Improves user engagement and provides a centralized location for managing user-specific data.

**2. Admin Panel**
- **Description :** Develop an admin panel for managing products, orders, and user accounts. Admins should be able to add, edit, or remove products, update inventory, and process refunds.
- **Benefits :** Simplifies backend management and ensures the website remains up-to-date with minimal effort.


**3. Real-Time Inventory Updates**
- **Description :** Integrate real-time inventory tracking to show product availability (e.g., "In Stock" or "Out of Stock") and prevent overselling.
- **Benefits :** Enhances trust and transparency while reducing customer frustration.


**4. Multi-Language Support**
- **Description :** Add support for multiple languages to cater to a global audience.
- **Benefits :** Expands the reach of the website and makes it accessible to non-English speakers.


**5. Advanced Search Filters**
- **Description :** Allow users to filter products by additional criteria such as dietary preferences (e.g., gluten-free, vegan), price range, or popularity.
- **Benefits :** Provides a more tailored shopping experience and helps users find exactly what they’re looking for.


**6. Push Notifications**
- **Description :** Implement push notifications for order updates, promotions, and abandoned carts.
- **Benefits :** Keeps users informed and encourages them to complete their purchases.


**7. Payment Gateway Integration**
- **Description :** Add support for multiple payment gateways like PayPal, Stripe, Apple Pay, and Google Pay.
- **Benefits :** Offers flexibility and convenience for users when making payments.


**8. Customizable Products**
- **Description :** Allow users to customize products (e.g., choose cake flavors, add inscriptions, or select toppings) before adding them to the cart.
- **Benefits :** Increases personalization and caters to unique customer preferences.


**9. Subscription Service**
- **Description :** Introduce a subscription model where users can sign up for regular deliveries of their favorite baked goods (e.g., weekly bread or monthly cookie boxes).
- **Benefits :** Creates a recurring revenue stream and builds customer loyalty.


**10. AI-Powered Recommendations**
- **Description :** Use machine learning algorithms to analyze user behavior and recommend products based on past purchases or browsing history.
- **Benefits :** Enhances personalization and increases cross-selling opportunities.


**11. Live Chat Support**
- **Description :** Add a live chat feature for real-time customer support.
- **Benefits :** Improves customer satisfaction by providing quick responses to queries or issues.

**12. Gamification Elements**
- **Description :** Introduce gamification features like loyalty points, badges, or discounts for frequent buyers.
- **Benefits :** Encourages repeat purchases and fosters a sense of community.


**13. Blog or Recipe Section**
- **Description :** Add a blog or recipe section where users can find baking tips, recipes, and inspiration.
- **Benefits :** Positions the website as a valuable resource and drives organic traffic through SEO.


**14. Augmented Reality (AR) Product Preview**
- **Description :** Allow users to preview products in their environment using AR technology (e.g., visualize how a cake would look on their dining table).
- **Benefits :** Provides a unique and immersive shopping experience.




## License

This project is licensed under the **MIT License**. See [LICENSE.md](LICENSE.md) for more details.



**Feel free to explore the codebase, modify it as needed, and enjoy building your bakery website!**

