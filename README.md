# Weather App Project
This repository contains a simple weather application built with Vue.js. The app allows users to log in and view the weather forecast for Ankara and Istanbul by default. Additionally, users can search for the weather in other cities.

![weather-pho](https://github.com/slgedik/weatherApp-project-with-vue/assets/112625294/2a16bb12-8388-4a36-924e-3ff6e912ab66)

## Project setup
To install the dependencies and run the application, follow these steps using Yarn:

Clone the repository:
```
git clone <repository-url>
```

Navigate to the project directory:
```
cd <project-directory>
```

Install dependencies using Yarn:
```
yarn install
```

## Usage
To run the application locally, execute the following command:
```
yarn serve
```
This will start the development server, and you can view the app by navigating to http://localhost:8080 in your web browser.

** This project has a static username and password. So, to log in : **
```
username : user
password : password
```

## Application Structure
The application is structured into several components:

App.vue: The main component that handles the overall structure of the application, including user authentication and weather display.
LoginComponent.vue: A component responsible for user authentication. It includes a form for entering a username and password, and the user is authenticated with a predefined username ('user') and password ('password').

WeatherComponent.vue: The main weather component that allows users to search for weather information by city. It also displays the weather for Ankara and Istanbul by default.

WeatherCard.vue: A reusable component for displaying weather information for a specific city.

Internationalization (i18n): The application supports internationalization (i18n) with translations provided in JSON format. There are two language options available: Turkish (tr) and English (us). The language can be changed using the language buttons in the application.

## Weather API
The app uses OpenWeatherMap API to get weather data for different cities. API key is included in the code. If you plan to distribute this application, please use your own API key

## Styling
The application uses Tailwind CSS for styling, and the styles are defined within the individual Vue components.

## Responsive Design
The application is designed to be responsive, with specific styles applied for smaller screens (max-width: 768px).
