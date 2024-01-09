# YouTube Lite

## Description

YouTube Lite is a fully responsive YouTube clone developed using React and Redux. The project is integrated with the official YouTube API, allowing users to fetch, play, and comment on videos, as well as receive video recommendations.

## Features

- **Live Video Fetching:** Fetch videos in real-time from the official YouTube API.
- **Video Playback:** Play videos seamlessly within the application.
- **Comments System:** Engage with videos by adding and viewing comments.
- **Recommendations:** Receive personalized video recommendations for an enhanced experience.
- **Responsive Design:** Ensure a consistent and user-friendly experience across various devices.

## Search Bar

The application features a search bar with trailing debouncing, providing users with relevant search suggestions as they type.

## Technologies

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for managing the application's state.
- **YouTube API:** Official API for integrating YouTube functionalities into the application.
- **CSS (Responsive Design):** Styling for responsive web design, ensuring compatibility across different devices.

## Skills Demonstrated

- **Frontend Development:** Creating a visually appealing and interactive user interface.
- **API Integration:** Incorporating external APIs to access and display dynamic content.
- **State Management:** Using Redux to manage the state of the application.
- **Responsive Web Design:** Ensuring a seamless experience across a variety of devices.

## Accomplishments

- **Optimized Video Loading Times:** Enhanced the performance of the application by optimizing video loading times.
- **Enhanced User Experience:** Focused on improving the overall user experience to provide a smooth and enjoyable interaction.

## Getting Started

Follow these steps to run the project locally:

1. **Generate YouTube API Key:**
   - Visit the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the YouTube Data API v3.
   - Create credentials and generate an API key.

2. **Configure API Key:**
   - Copy the API key.
   - Replace `'YOUR_API_KEY'` in the project code with your actual API key.

3. **Install Dependencies:**
   ```bash
   npm install
4. **Run the Project:**
   ```bash
   npm start
5. Remove /youtube-lite from the url if needed ie change  http://localhost:port_number/youtube-lite to http://localhost:port_number
