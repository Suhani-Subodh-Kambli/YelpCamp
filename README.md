# 🏕️ YelpCamp – Campground Discovery & Review Platform

YelpCamp is a full-stack web application that allows users to discover campgrounds, explore locations on interactive maps, share their own camping destinations, and review experiences shared by other campers.

Built with Node.js, Express.js, MongoDB, and EJS, the application provides a complete campground management experience with secure authentication, authorization, image uploads, and interactive mapping.

## ✨ Features

### 🏕️ Campground Management
- Browse and explore available campgrounds.
- Create new campground listings with titles, descriptions, prices, and locations.
- Edit and delete campground listings.
- View detailed information about individual campgrounds.

### 🔐 Authentication & Authorization
- User registration and login.
- Secure user authentication using Passport.js.
- Session-based authentication.
- Authorization to ensure users can modify or delete only their own campground listings.
- Protected routes for authenticated users.

### ⭐ Reviews & Ratings
- Add reviews and ratings to campgrounds.
- View reviews submitted by other users.
- Delete reviews.
- Restrict review management to authorized users.

### 📸 Image Uploads
- Upload campground images.
- Store and manage images using Cloudinary.
- Display campground images dynamically.
- Support multiple images per campground.

### 🗺️ Interactive Maps
- Map integration using MapTiler.
- Display campground locations on interactive maps.
- Geocoding to convert location names into geographic coordinates.
- Improve campground discovery through location-based visualization.

### 🎨 User Interface
- Clean and intuitive interface.
- Responsive layouts.
- Dynamic campground listings.
- Flash messages for user feedback.
- Form validation and error handling.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling |
| Bootstrap | Responsive UI |
| JavaScript | Client-side functionality |
| EJS | Dynamic templating |
| Node.js | Backend runtime |
| Express.js | Server and RESTful routing |
| MongoDB | Database |
| Mongoose | Database modeling |
| Passport.js | Authentication |
| Express Session | Session management |
| Cloudinary | Image storage and management |
| MapTiler | Maps and geocoding |
| Joi | Server-side input validation |

## 🏗️ Application Architecture

The application follows the **MVC (Model-View-Controller)** architectural pattern.

- **Models:** Define database schemas and relationships using Mongoose.
- **Views:** Render dynamic pages using EJS templates.
- **Controllers:** Handle application logic and incoming requests.
- **Routes:** Manage application endpoints.
- **Middleware:** Handle authentication, authorization, and validation.


## 🚀 Getting Started

Follow these instructions to run YelpCamp locally.

### Prerequisites

- Node.js and npm
- MongoDB database
- Cloudinary account
- MapTiler API key

### 1. Clone the repository

```bash
git clone https://github.com/Suhani-Subodh-Kambli/YelpCamp
```

### 2. Navigate to the project directory

```bash
cd YelpCamp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the required credentials.

```env
DB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

MAPTILER_API_KEY=your_maptiler_api_key
```

### 5. Start the application

```bash
node app.js
```

Or, if you have Nodemon installed:

```bash
nodemon app.js
```

### 6. Open in your browser

```text
http://localhost:3000
```

## 🧠 Key Concepts Practiced

Through this project, I gained practical experience with:

- Full-stack web application development.
- MVC architecture.
- RESTful API design and routing.
- CRUD operations.
- MongoDB database relationships and Mongoose schemas.
- Authentication and authorization.
- Password hashing and session management.
- Express middleware.
- Image uploads and cloud storage.
- Geocoding and interactive map integration.
- Server-side validation using Joi.
- Error handling and flash messaging.
- Environment variable management.

## 🔮 Future Improvements

- [ ] Advanced campground search and filtering.
- [ ] Pagination for campground listings.
- [ ] User profile customization.
- [ ] Save or bookmark favorite campgrounds.
- [ ] Improved mobile-first experience.
- [ ] Advanced location-based recommendations.

## 🔒 Security Practices

- Authentication using Passport.js.
- Authorization checks for restricted operations.
- Password hashing.
- Server-side form validation.
- Environment variables for sensitive credentials.
- Protected routes and session management.

## 👨‍💻 Author

Developed as a full-stack web development project to strengthen practical skills in backend development, database management, authentication, cloud services, and interactive web application development.

---

⭐ If you find this project interesting, feel free to explore the repository!

**YelpCamp – Discover. Explore. Camp. Review.** 🏕️