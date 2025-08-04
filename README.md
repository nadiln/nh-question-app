# Question App - React Native Expo Project

A React Native application built with Expo featuring a calculator, responsive navbar, and modern navigation system.

## 🚀 Features

- **Calculator Screen**: Add two numbers with input validation
- **Responsive Navbar**: Mobile-first design with hamburger menu
- **Home Screen**: Welcome page with project information
- **React Navigation**: Bottom tab navigation with smooth transitions
- **TypeScript**: Full type safety throughout the application
- **Expo Vector Icons**: Beautiful icons from Ionicons library

## 📱 Screenshots

# Home
![qapp-home](https://github.com/user-attachments/assets/c1780415-0b9a-4401-a35c-c88e18e1b16f)

# Question 1
![qapp-q1](https://github.com/user-attachments/assets/90e6c426-5583-496f-a4de-f75c7d66dc2c)

# Question 2
![qapp-q2](https://github.com/user-attachments/assets/a167c654-367d-4ae2-920e-da7757830db8)
![qapp-q3](https://github.com/user-attachments/assets/42f1eb59-ffc2-4cbf-b888-47ebaf80047d)

# Question 3
<img width="542" height="451" alt="question3" src="https://github.com/user-attachments/assets/b3f13b1f-b46e-4ed3-b723-e7bf14b9c06f" />


The app includes three main screens accessible via bottom tab navigation:
- **Home**: Welcome screen with project overview
- **Calculator**: Functional two-number addition calculator
- **Navbar**: Responsive navigation component demonstration

## 🛠️ Technologies Used

- **React Native** (0.79.5)
- **Expo** (~53.0.20)
- **TypeScript** (~5.8.3)
- **React Navigation** (v7)
- **Expo Vector Icons** (v14)

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Expo CLI** (install with: `npm install -g @expo/cli`)
- **Expo Go app** on your mobile device (for testing)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd question-app
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm start
```

or

```bash
npx expo start
```

or

```bash
yarn start
```

### 4. Run on Your Device

After starting the development server, you have several options:

#### Option A: Mobile Device (Recommended)
1. Install **Expo Go** app from App Store (iOS) or Google Play Store (Android)
2. Scan the QR code displayed in your terminal with:
   - **iOS**: Camera app or Expo Go app
   - **Android**: Expo Go app
3. The app will load on your device

#### Option B: iOS Simulator (Mac only)
```bash
npm run ios
```

#### Option C: Android Emulator
```bash
npm run android
```

#### Option D: Web Browser
```bash
npm run web
```

## 📁 Project Structure

```
question-app/
├── App/
│   ├── Navigation/
│   │   └── index.tsx          # React Navigation setup
│   └── Screens/
│       ├── Calculator/
│       │   └── index.tsx      # Calculator functionality
│       ├── Home/
│       │   └── index.tsx      # Home screen
│       └── Navbar/
│           └── index.tsx      # Responsive navbar component
├── assets/                    # Images and static assets
├── App.tsx                    # Main app component
├── app.json                   # Expo configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## 🎯 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## 🧮 Calculator Features

- **Input Validation**: Ensures both numbers are entered and valid
- **Error Handling**: Shows alerts for invalid inputs
- **Clear Function**: Reset all inputs and results
- **Decimal Support**: Works with decimal numbers
- **Negative Numbers**: Supports negative number calculations

## 📱 Navbar Features

- **Mobile-First Design**: Responsive layout for all screen sizes
- **Hamburger Menu**: Collapsible sidebar navigation
- **Search Input**: Non-functional search field (demo purposes)
- **Menu Items**: Showcase, Docs, Blog, Analytics, Commerce, Templates, Enterprise
- **Smooth Animations**: Native-like transitions and interactions

## 🔧 Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   npx expo start --clear
   ```

2. **Node modules problems**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **iOS simulator not opening**:
   - Make sure Xcode is installed (Mac only)
   - Try: `npx expo run:ios`

4. **Android emulator issues**:
   - Ensure Android Studio is installed
   - Start an AVD manually before running the app

### Environment Setup

If you're new to React Native development:

1. **Install Expo CLI globally**:
   ```bash
   npm install -g @expo/cli
   ```

2. **For iOS development** (Mac only):
   - Install Xcode from the App Store
   - Install Xcode Command Line Tools

3. **For Android development**:
   - Install Android Studio
   - Set up an Android Virtual Device (AVD)

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about the problem

---

**Happy coding! 🎉**

