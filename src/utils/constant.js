 const AppLogo = "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg";

 export const CardImageLink = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
 // export const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`;
export default AppLogo;

// This is for body cards api to change the api data according to corrdinates


 // if (navigator.geolocation) {
 //     navigator.geolocation.getCurrentPosition(function(position) {
 //         const latitude = position.coords.latitude;
 //         const longitude = position.coords.longitude;
 //         setCurrLatitude(latitude);
 //         setCurrLongitude(longitude);
 //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
 //     });
 // } else {
 //     console.log("Geolocation is not supported by this browser.");
 // }
 //
 // // Function to get the corrdinates of the locations with names
 // const getCoordinates = async (locationName) => {
 //     const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`;
 //
 //     const locationResponse = await fetch(geocodeURL);
 //     const locationResponseJson = await locationResponse.json();
 //     console.log(`${locationName}` , locationResponseJson);
 //
 //
 //     setCurrLatitude(locationResponseJson[0]?.lat);
 //     setCurrLongitude(locationResponseJson[1]?.long);
 //
 //     console.log(`${locationName} latitude` , currLatitude);
 //     console.log(`${locationName} longitude` , currLongitude);
 // }
 //
 // getCoordinates("Shamli");


