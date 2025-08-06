ClipURL
Live Demo 
ClipURL is a modern URL shortening application designed to simplify link sharing and tracking. Create short, shareable links from long URLs, monitor click counts, and manage your links with an intuitive interface. Perfect for social media, marketing campaigns, or personal use, ClipURL offers a seamless experience for generating and tracking shortened URLs.
Table of Contents

Features
Installation
Usage
Contributing
License
Contact
Acknowledgments

Features

URL Shortening: 🔗 Convert long URLs into short, clean links in seconds.
Click Tracking: 📈 Monitor how many times your shortened links are clicked.
Link Management: 🗑️ Easily copy or delete your shortened links from a user-friendly dashboard.
Responsive Design: 📱 A sleek, responsive interface built with React and TailwindCSS for seamless use on all devices.
Real-Time Updates: ⚡ Instantly see updated link lists without refreshing the page.

Installation
Prerequisites

Node.js (v14 or later)
npm (v6 or later)
MongoDB (local or cloud instance, e.g., MongoDB Atlas)
Git

Steps

Clone the Repository:
git clone https://github.com/Dilesh-Bisen/ClipURL.git
cd ClipURL


Install Backend Dependencies:
 Navigate to the backend directory and install dependencies:
cd backend
npm install


Set Up Backend Environment Variables:
 Create a .env file in the backend directory and add the following:
MONGO_URI=your_mongodb_connection_string
PORT=8083

 Replace your_mongodb_connection_string with your MongoDB URI (e.g., mongodb://localhost:27017/clipurl or a MongoDB Atlas URI).

Install Frontend Dependencies:
 Navigate to the frontend directory and install dependencies:
cd ../frontend
npm install


Set Up Frontend Environment Variables:
 Create a .env file in the frontend directory and add the following:
VITE_SERVER_URL=http://localhost:8083/api


Run the Backend Server:
 In the backend directory, start the server:
npm run dev


Run the Frontend Development Server:
 In the frontend directory, start the Vite development server:
npm run dev


Build the Frontend for Production (Optional):
npm run build


Start the Frontend Production Server (Optional):
npm start



Usage
Creating a Short Link

Open the application at http://localhost:3000.
Enter a valid URL (e.g., https://example.com) in the input field.
Click the Shorten Link button.
View the shortened link in the table below, prefixed with clipurl.to/.

Copying a Short Link

In the link table, click the copy icon (📋) next to the desired short link.
The link is copied to your clipboard, and a "Link copied to clipboard!" message appears.

Deleting a Short Link

In the link table, click the delete icon (🗑️) next to the desired short link.
Confirm the deletion in the prompt.
The link is removed from the table, and a "Link deleted successfully!" message appears.

Tracking Clicks

Click a shortened link (e.g., clipurl.to/abc123) to visit the original URL.
The click count in the table updates automatically upon refreshing the page.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
Contact
For any questions or issues, please open an issue on the GitHub repository or contact the project maintainer at [2dileshbisen@gmail.com].
Acknowledgments
This project was designed and developed by Dilesh Bisen.

Happy Link Shortening! 🎉