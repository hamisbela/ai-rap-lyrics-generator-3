import { GoogleGenerativeAI } from "@google/generative-ai";

// Make sure the API key is properly accessed from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error('VITE_GEMINI_API_KEY is not set in environment variables');
}

// Initialize the API with error handling
export const genAI = new GoogleGenerativeAI(API_KEY || '');

// Helper function to check if API is properly configured
export const isApiConfigured = () => {
  return !!API_KEY;
};