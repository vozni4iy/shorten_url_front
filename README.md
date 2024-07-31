# URL Shortener - Frontend
This repository contains the frontend interface for the URL Shortener application. The frontend provides a user-friendly interface for entering long URLs, generating short URLs, and managing interactions with the backend.

## Features
### User Interface Components:
#### Input Form:

An input field where users can enter the long URL they wish to shorten.
Includes client-side validation to ensure the URL is in a proper format before submission.
##### Buttons:

Get Short URL: 
Submits the long URL to the backend API and retrieves the shortened URL.

Clear: Resets the input field and any displayed results or errors.

Copy URL: Copies the shortened URL to the clipboard for easy sharing.

Redirect to URL: Opens the shortened URL in a new browser tab, redirecting the user to the original URL.

#### Display Area:

Shows the generated short URL after successful retrieval.
Displays error messages if any issues occur during URL shortening (e.g., invalid URL format, server errors).

### Code Structure and Modularity:
#### Component-Based Architecture:

The frontend is built using React, with a focus on component-based design for better modularity and maintainability.
Key components include:
App: The main component that manages state and coordinates the overall application logic.
UrlForm: Handles user input, including the URL input field and control buttons.
ShortUrlDisplay: Displays the shortened URL and provides options to copy or open the URL.
ErrorDisplay: Displays error messages to the user in case of input validation issues or server errors.

#### Styling and Theming:

Uses SCSS for styling, with separate stylesheets for different components to maintain a clean and organized codebase.
variables.scss: Contains theme variables like colors and font sizes to ensure a consistent look and feel across the application.

#### Security and Best Practices:
##### CORS and Security Headers:

Interacts with a backend configured with CORS to restrict requests to approved origins, ensuring secure communication.
##### Client-Side Validation:

Implements validation on the client side to check if the entered URL is well-formed, improving user experience by catching errors early.

##### Clipboard Interaction:

Uses the Clipboard API for copying the shortened URL, providing a seamless experience for users to share the shortened links.
Error Handling:

Displays user-friendly error messages in the UI, ensuring that users are informed about any issues and can take corrective action.

### Optimizations and Enhancements:
#### Performance Optimization:

The application is built using Vite, a fast build tool that improves development speed and build performance.
Code splitting and lazy loading are employed where applicable to enhance performance.
#### Responsive Design:

The application is designed to be responsive, ensuring a good user experience across different devices

#### Environment Configuration:

Utilizes environment variables to manage different configurations for development and production environments, such as API base URLs.