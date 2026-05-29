# NovaCart | Online Shopping Store
NovaCart is a fully responsive, dynamic e-commerce website built using HTML, CSS, JavaScript, and multiple APIs. The project includes dynamic product listing, search functionality, category filtering, price range filtering, product sorting, product modal preview, cart functionality, wishlist management, pagination, local storage support, and responsive UI design. 

## Features
### Product Management
- Fetch products from multiple APIs
- Dynamic product rendering
- Product pagination system
- Product image gallery with thumbnails
- Multiple product categories

### Search, Filtering & Sorting
- Real-time search functionality
- Debounced search optimization
- Category-based filtering
- Price range filtering
- Product sorting:
  - Price Low to High
  - Price High to Low
  - Ratings
  - Discount
  - Newest Products

### Wishlist System
- Add/remove products to wishlist
- Wishlist stored in Local Storage
- Dynamic wishlist count update
- Restore wishlist after page refresh

### Shopping Cart
- Add to cart functionality
- Product quantity management
- Cart summary calculations
- Delivery charge handling
- Discount calculation
- Persistent cart using Local Storage

### Product Modal
- Detailed product preview modal
- Product image switching
- Product stock handling
- Product variations:
  - Colors
  - Sizes
- Dynamic rating stars

### Performance Features
- Loading skeleton animation
- Efficient pagination rendering
- Notification messages
- Error handling UI
- Retry button for failed API requests

### Responsive Design
- Mobile responsive navigation
- Responsive product grid
- Responsive filter sidebar
- Optimized UI for all screen sizes

## Technologies Used
- HTML5
- CSS3 
- JavaScript (ES6+)
- APIs (DummyJSON API, FakeStore API & Custom Local JSON data)
- Font Awesome for icons
- Local storage 

## Demo

## Screenshots

## Deployment
- GitHub Pages
- Netlify
- Vercel

## How It Works
- Fetches product data from multiple APIs and local JSON files.
- Displays products with pagination, filtering, and sorting.
- User can search, filter by categories, price, and sort products.
- Click "View Details" to see a modal with product options, images, ratings, and add to cart.
- Manage wishlist and cart with persistent storage.
- Dynamic updates for wishlist and cart counters.

## Setup & Usage
1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Explore the various features by browsing, filtering, searching, and managing cart & wishlist.

## Customization
- Update product data or add new categories in `shoes.json` or the `productImages` object.
- Customize styles in `style.css`.
- Extend functionalities or integrate with real backend APIs.

## Challenges Faced & Solutions

| #  | Challenge Faced                                                        | Solution Implemented                                                                                     |
|----|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 1. | Managing products from multiple APIs with different data structures     | Used `Promise.all()` to fetch APIs simultaneously and normalized product data into a unified structure using `.map()`. |
| 2. | Creating Unique Product IDs across multiple APIs                        | Generated custom unique IDs using `${category}-${product.id}` to avoid conflicts.                     |
| 3. | Search functionality triggering too frequently while typing             | Implemented debouncing with `setTimeout()` to optimize performance and reduce unnecessary function calls.     |
| 4. | Handling API failures and broken network requests                         | Added error handling UI with retry functionality using `try...catch`.                                |
| 5. | Handling missing product data                                             | Implemented fallback values for missing data like stock, images, and discount percentage.            |
| 6. | Building dynamic product variations such as sizes and colors for different categories | Created a reusable `generateProductVariations()` function to dynamically generate variations based on category type. |
| 7. | Pagination breaking after filtering or searching products                | Maintained a separate `filteredProductsData` array and dynamically updated pagination based on filtered results.             |
| 8. | Synchronizing search, filters, sorting, and pagination together          | Used centralized state management with `allProductsData` and `filteredProductsData` arrays to keep operations synchronized. |

## Future Improvements
- User Authentication
- Payment Gateway Integration
- Backend Integration
- Order Tracking
- Product Reviews
- Dark Mode
- Admin Dashboard
- Backend Database Integration

## What I Learned
- API Integration
- Advanced DOM Manipulation
- State Management using LocalStorage
- Responsive UI Design
- Event Delegation
- Pagination Logic
- Debouncing
- Dynamic Rendering
- Error Handling
- E-commerce UI/UX Development

## License
This project is created for learning and portfolio purposes.

Feel free to explore, fork, and learn from the code for personal and educational use.

⭐ If you found this project useful, feel free to star the repository and explore the codebase.
