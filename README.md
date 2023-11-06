<h1 align="center">🚘 BuysCar Website🚘 </h1>

<h3 align="justify" width="80%">

Create a web app using Node.js and MongoDB with a homepage featuring a "Sign In" button. Clicking it leads to a sign-in page with options to register using email or Google. User data is stored in MongoDB, and if an email already exists, an error is shown. Successful sign-ins generate JWT tokens for persistent login. Display mock course data from MongoDB on another page. Implement secure JWT authentication, password hashing, and user-friendly error handling. Consider session management, security, and user experience. While complex, this process can be simplified with web frameworks like Express.js and React, enhancing scalability and maintainability. [Assignment_0-1 (8).pdf](https://github.com/AyushiVashisth/BuysCar/files/13264509/Assignment_0-1.8.pdf)

### Frontend Deployed URL 👉 [Click here](https://buyscar-website.vercel.app/)
### Backend Respositry URL 👉 [Click here](https://buyscar-api.onrender.com/)

</h3>


<br/>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Frontend</b><br>
  <img src="https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%23F7DF1E" alt="react">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss">
</p>

<p align="center">
  <b>Backend</b><br>
  <img src="https://img.shields.io/badge/expressjs-%777BB4.svg?style=for-the-badge&logo=express.js&logoColor=white" alt="express">
  <img src="https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=mongoose&logoColor=white" alt="mongoose">
</p>

<p align="center">
  <b>Tools</b><br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

<p align="center">
  <b>Deployment</b><br>
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify">
</p>

<h2 align="center">Features</h2>

1. User Authentication:
   - Signup and login screens for user authentication.

2. Car Listing and Details:
   - A page where dealers can add their second-hand car details with specifications.
   - Car details page includes Image, Title, and a 5-bullet point description.

3. Filtering:
   - Filters on Price, Colors, and Mileage to help users search for specific cars.

4. Inventory Management:
   - A page where dealers can view all their second-hand car listings.
   - Dealers can delete multiple second-hand car entries and edit car details.

5. OEM Specifications:
   - Integration of Original Equipment Manufacturers (OEM) specifications.
   - Storing OEM specs in the "OEM_Specs" table.
   - These specs include the name of the model, Year of Model, list price of the new vehicle, available colors, mileage as advertised by the manufacturer, Power (in BHP), Max Speed.

6. Inventory-Related Information:
   - Dealers can add information about their own inventory.
   - This information is stored in the "Marketplace_Inventory" table.
   - It includes details like KMs on Odometer, Major Scratches, Original Paint, Number of accidents reported, Number of previous buyers, Registration Place.

**Phases:**

1. **Phase I - Frontend Development (2-3 hours):**
   - Create a React-based frontend application.
   - Develop signup and login screens for user authentication.
   - Create a page for dealers to add second-hand car details with specifications.
   - Implement filters for Price, Colors, and Mileage.
   - Develop a page for dealers to manage and edit their second-hand car listings.

2. **Phase II - Database Design and Schemas (25-30 mins):**
   - Design the necessary tables and schemas to store data.
   - Create these tables, including "OEM_Specs" and "Marketplace_Inventory," with dummy data.

3. **Phase III - Backend and API Development (1-2 hours):**
   - Implement the required APIs for functionality, such as:
     - Query the number of available OEM models.
     - Search for specific OEM specs (e.g., Honda City 2015).
   - Use a backend framework like Node.js.
   - Choose a suitable database for data storage.


<h2 align="center">Key Features</h2>

1. **User Authentication:**
   - User registration and login functionality for dealers and buyers.
   - Secure authentication to protect user data.

2. **Car Listing and Details:**
   - Dealers can list their second-hand cars for sale.
   - Comprehensive car details, including images, titles, and descriptions.
   - Specifications and features of each listed car.

3. **Search and Filtering:**
   - Advanced search and filtering options to help buyers find specific cars.
   - Filters for price range, colors, mileage, make, model, and other relevant criteria.

4. **OEM Specifications:**
   - Integration of Original Equipment Manufacturers (OEM) specifications for listed cars.
   - Access to detailed information, including the name of the model, year of manufacture, list price of the new vehicle, available colors, mileage, power (in BHP), and maximum speed.

5. **Inventory Management:**
   - A dedicated inventory management system for dealers.
   - Ability to add, edit, and delete car listings.
   - Information on kilometers on the odometer, major scratches, original paint, accidents reported, previous buyers, and registration place.

6. **User Profiles:**
   - User profiles for both dealers and buyers.
   - Profile customization, contact information, and preferences.

7. **Messaging and Communication:**
   - In-platform messaging system to facilitate communication between dealers and buyers.

8. **Payment and Transactions:**
   - Secure payment processing for transactions between buyers and dealers.
   - Options for various payment methods.

9. **Reviews and Ratings:**
   - Review and rating system to provide feedback on the buying and selling experience.

10. **Notifications:**
    - Real-time notifications for users about new listings, inquiries, messages, and updates.

11. **Geolocation and Maps:**
    - Integration with maps and geolocation to help buyers locate cars and dealers.

12. **Responsive Design:**
    - A responsive web design to ensure usability on various devices, including mobile phones, tablets, and desktops.

13. **Security and Trust:**
    - Robust security measures to protect user data and transactions.
    - Verification processes to enhance trust between buyers and dealers.

14. **Data Analytics:**
    - Data analytics tools to provide insights into market trends, user behavior, and popular car models.

15. **Support and Help Center:**
    - A support system and a help center to assist users with any issues or questions.


<h2 align="center">Getting Started</h2>

1. Clone the repository to your local machine.
2. Set up the backend API using Express and Mongoose (provide instructions if necessary).
3. Navigate to the project directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.

<h3>This is an individual project that I developed as a solo full-stack web developer within a span of 2 day.</h3>

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the BuysCar project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or valuable, please consider giving it a ⭐️.

<h1 align="center">🚘 Happy Exploring! 🚘</h1>
