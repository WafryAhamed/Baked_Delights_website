

# Bakery Delights Website

Welcome to **Bakery Delights**, an online bakery store where you can explore and purchase a wide variety of baked goods such as cakes, pies, cookies, muffins, and more! This platform is built using modern web technologies like **React**, **Framer Motion**, and **React Router**, providing a seamless user experience with smooth animations, responsive design, and dynamic product filtering.



## Features

- **Responsive UI**: The website is fully optimized for both desktop and mobile devices, ensuring a consistent experience across all screen sizes.
- **Dynamic Product Search**: Users can filter products by name in real-time using the search bar.
- **Category-wise Product Display**: Products are organized into categories like Cakes, Pies, Pastries, Breads, Cookies, and Muffins. Each category expands to display its respective items.
- **Interactive Icons**: Navigation icons (e.g., shopping cart, user profile) enhance usability and provide quick access to essential features.
- **Smooth Scrolling**: Clicking on navigation links or the search bar smoothly scrolls to the respective sections.
- **Authentication**: Users can log in or sign up using username/password or third-party options like Google and Apple ID.
- **Shopping Cart**: Add products to the cart, review them, and proceed to checkout.
- **Animations**: Smooth animations powered by **Framer Motion** enhance the user experience when interacting with elements like buttons, product cards, and category filters.
- **Sticky Header**: The header changes color dynamically when scrolling past a certain point, improving navigation visibility.



## Technologies Used

### Frontend
- **React.js**: The core framework for building the user interface.
- **React Router**: Handles client-side routing for seamless navigation between pages (e.g., Home, Shop, Cart, Auth).
- **Framer Motion**: Adds smooth animations and transitions to UI components, such as sliding product cards and hover effects.
- **React Icons**: Provides a library of customizable icons for navigation, buttons, and other interactive elements.
- **CSS**: Custom styles for layout, typography, and responsiveness.


### State Management
- **React Hooks**: Utilizes `useState`, `useEffect`, and `useNavigate` for managing state, side effects, and navigation.

### Additional Libraries
- **Axios**: For making API calls (if applicable for fetching product data).
- **DOM Manipulation**: Used for smooth scrolling and dynamic updates to the DOM.

---

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
   cd bakery-delights OR cd Baked_Delights_website-main
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


---



## How the Website Works

### Home Page
- The home page features a **sticky header** that changes color when scrolling past a certain point.
- Users can navigate to different sections like Home, Shop, About Us, and Contact using the navbar links.

### Shop Page
- The **Shop** page displays products categorized into sections like Cakes, Pies, Pastries, Breads, Cookies, and Muffins.
- A **search bar** allows users to filter products by name in real-time.
- Each product card includes an image, description, price, and a "Buy now" button that redirects to the **Buy Page**.

### Authentication
- Users can log in or sign up using their email/password or third-party options like **Google** and **Apple ID**.
- The authentication modal provides a clean and intuitive interface for login and signup.

### Cart Page
- Users can add products to the cart and review them on the **Cart Page**.
- The cart icon in the header shows the number of items added.


## Key Highlights

- **Third-Party Login**: Supports Google and Apple ID login for convenience.
- **Error Handling**: Displays error messages for invalid inputs (e.g., incorrect login credentials, invalid phone numbers).
- **Fallback Images**: If a product image is unavailable, a default placeholder image is displayed.
- **Loading Indicators**: Buttons show loading spinners during processes like login or signup.




## Acknowledgements

- **React Icons**: Provides the icons used in the navbar and buttons.
- **Framer Motion**: Powers the smooth animations and transitions throughout the website.
- **CSS Styling**: Custom styles ensure a clean and modern design.

---

## License

This project is licensed under the **MIT License**. See [LICENSE.md](LICENSE.md) for more details.



Feel free to explore the codebase, modify it as needed, and enjoy building your bakery website!

