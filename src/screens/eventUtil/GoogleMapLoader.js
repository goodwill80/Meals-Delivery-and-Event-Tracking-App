// import { GOOGLE_API_KEY } from 'react-native-dotenv';

// export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const GOOGLE_API_KEY = 'AIzaSyCqbLORz6QTx8CrwxoDAkHRjhk6zg07qSM';

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
};

export const getMapSample = () => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Singapore&zoom=13&size=900x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
};
