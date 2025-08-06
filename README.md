# ClipURL

[**Live Demo**](https://clipurl.live)

ClipURL is a modern URL shortening application designed to simplify link sharing and tracking. Create short, shareable links from long URLs, monitor click counts, and manage your links with an intuitive interface. Perfect for social media, marketing campaigns, or personal use, ClipURL offers a seamless experience for generating and tracking shortened URLs.

## Table of Contents

- [**Features**](#features)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Contributing**](#contributing)
- [**License**](#license)
- [**Contact**](#contact)
- [**Acknowledgments**](#acknowledgments)

## Features

- **URL Shortening**: 🔗 Convert long URLs into short, clean links instantly.
- **Click Tracking**: 📈 Monitor click counts on each shortened link.
- **Link Management**: 🗂️ Copy or delete shortened links with ease from a clean dashboard.
- **Responsive Design**: 📱 Fully responsive interface built with **React** and **TailwindCSS**.
- **Real-Time Updates**: ⚡ Instantly updated link list without page refresh.

## Installation

### Prerequisites

- **Node.js** (v14 or later)  
- **npm** (v6 or later)  
- **MongoDB** (local or cloud instance like MongoDB Atlas)  
- **Git**

### Steps

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/Dilesh-Bisen/ClipURL.git
    cd ClipURL
    ```

2. **Install Backend Dependencies**:

    ```sh
    cd backend
    npm install
    ```

3. **Set Up Backend Environment Variables**:

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=8083
    ```

4. **Install Frontend Dependencies**:

    ```sh
    cd ../frontend
    npm install
    ```

5. **Set Up Frontend Environment Variables**:

    Create a `.env` file in the `frontend` directory and add the following:

    ```env
    VITE_SERVER_URL=http://localhost:8083/api
    ```

6. **Run the Backend Server**:

    ```sh
    cd ../backend
    npm run dev
    ```

7. **Run the Frontend Development Server**:

    ```sh
    cd ../frontend
    npm run dev
    ```

8. **Build the Frontend for Production** (Optional):

    ```sh
    npm run build
    ```

9. **Start the Frontend Production Server** (Optional):

    ```sh
    npm start
    ```

## Usage

### Creating a Short Link

1. Open the app in your browser: `http://localhost:3000`.
2. Enter a valid URL (e.g., `https://example.com`) into the input field.
3. Click on the **"Shorten Link"** button.
4. The new shortened link will appear below, prefixed with `clipurl.to/`.

### Copying a Short Link

1. In the link table, click the copy icon (📋) next to the desired link.
2. The link is copied to your clipboard and a success message is shown.

### Deleting a Short Link

1. In the link table, click the delete icon (🗑️) next to the link you want to remove.
2. Confirm the deletion prompt.
3. The link will be deleted and a confirmation message will appear.

### Tracking Clicks

1. Click on any shortened link (e.g., `clipurl.to/xyz123`) to visit the original URL.
2. The click count will be updated automatically (after refreshing the page).

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or issues, please open an issue on the GitHub repository or contact the project maintainer at [2dileshbisen@gmail.com](mailto:2dileshbisen@gmail.com).

## Acknowledgments

This project was designed and developed by **Dilesh Bisen**.

---

**Happy Link Shortening!** 🎉
