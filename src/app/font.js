import localFont from "next/font/local";

// Configure the Satoshi font using next/font/local
export const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    // Including variable fonts for flexibility
    {
      path: "./fonts/Satoshi/Satoshi-Variable.woff2",
      weight: "300 900", // Define the weight range for the variable font
      style: "normal",
    },
    {
      path: "./fonts/Satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900", // Define the weight range for the variable font
      style: "italic",
    },
  ],
  display: "swap", // Use font-display: swap for better performance
  variable: "--font-satoshi", // Define a CSS variable for the font
});

// Configure the Clash Display font using next/font/local
export const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Extralight.woff2",
      weight: "200", // Extralight is typically 200
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Semibold.woff2",
      weight: "600", // Semibold is typically 600
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // Including variable font for flexibility
    {
      path: "./fonts/ClashDisplay/ClashDisplay-Variable.woff2",
      weight: "200 700", // Define the weight range for the variable font
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-clash-display", // Define a CSS variable for the font
});
