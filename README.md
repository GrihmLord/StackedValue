# StackedValue

## Overview

The StackedValue app is a React Native-based mobile application that provides users with tools to calculate the value of silver and its equivalent in Bitcoin. It offers a simple and user-friendly interface for performing these calculations. This README provides an overview of the project's current status and outlines the remaining tasks.

## Current Status

### Implemented Features

- **Silver Calculator:** The app includes a Silver Calculator that allows users to enter the total weight of silver in grams and kilograms. It calculates the total value of the silver based on the provided weight and the current silver price.

- **Bitcoin Calculator:** The Bitcoin Calculator enables users to input the total value of silver in USD. It then calculates the equivalent value in Bitcoin based on the current Bitcoin price.

- **Basic Styling:** The app has basic styling and layout for the Silver Calculator and Bitcoin Calculator screens. It uses React Native's `StyleSheet` for styling.

- **API Integration (Placeholder):** Placeholder functions for fetching silver and Bitcoin prices from APIs have been implemented in `ApiService.js`. Actual API endpoints need to be provided.

- **Navigation:** Basic navigation between the Silver Calculator and Bitcoin Calculator screens has been set up using `React Navigation`.

- **Error Handling (Basic):** Basic error handling has been implemented to catch and log errors during API requests. User-friendly error messages are pending.

### Pending Tasks

- **Enhanced Styling:** The user interface and styling need further refinement to make the app visually appealing. Consider using third-party styling libraries like React Native Elements or custom styles.

- **Error Handling (User Feedback):** Improve error handling by providing clear error messages to users when API requests fail or input is incorrect.

- **Navigation Integration:** Integrate the Silver Calculator and Bitcoin Calculator components into their respective screens and handle data flow between them.

- **Additional Features:** Add any extra features or enhancements such as currency conversion options or real-time updates if required.

- **Thorough Testing:** Continue testing the app on various devices and scenarios to ensure all components and features work as expected.

- **Documentation:** Document code and project structure for better collaboration and understanding. Create a user guide for running and using the app.

- **User Experience Testing:** Consider conducting UX testing with real users or stakeholders to gather feedback on usability and design.

- **Deployment:** Prepare the app for deployment to app stores (Google Play Store and Apple App Store) when all features are complete.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the app on an emulator or device:

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Contributing

If you'd like to contribute to this project, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Placeholder API Service](https://api.example.com) (Replace with actual API endpoints)

## Contact

For questions or inquiries, please contact [Grihmlord](mailto:marcus.workman@outlook.com).
