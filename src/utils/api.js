import axios from 'axios';

export const generatePoetry = async (prompt, googleApiKey, groqApiKey) => {
  try {
    const response = await axios.post('/generate-poetry', {
      prompt,
      google_api_key: googleApiKey,
      groq_api_key: groqApiKey,
    });
    return response.data.poem;
  } catch (error) {
    console.error('Error generating poem:', error);
    throw error;
  }
};
