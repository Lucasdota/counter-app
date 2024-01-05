"use client"
import './globals.css'
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import Navbar from '@/components/Navbar';
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-amber-100 to-amber-200">
        <Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Navbar />
						{children}
					</PersistGate>
        </Provider>
      </body>
    </html>
  );
}
