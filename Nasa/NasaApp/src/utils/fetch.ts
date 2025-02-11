const API_KEY = 'yJELY9Eeyb9HqvwpCERYo7cq5yJDE3ZPSLbnbfLU'; // clave de la api de la nasa
const API_URL = 'https://api.nasa.gov/planetary/apod'; // url de la api de la nasa

// Función que realiza una petición a la API de la nasa y devuelve la respuesta
export default async (urlParams?: string) => {
    try {
        // se realiza la petición a la api de la nasa
        const response = await fetch( // petición a la api de la nasa
            `${API_URL}?api_key=${API_KEY}${ // se pasa la clave de la api de la nasa
            typeof urlParams !== "undefined" && urlParams.length > 0 ? urlParams : ""  // se pasa el parámetro de la url si existe
            }` /* &count=1 */
        );
        const data = await response.json(); // se obtiene la respuesta de la api de la nasa

        return Promise.resolve(data); // se devuelve la respuesta
    } catch (error) { // si hay un error
        return Promise.reject(error); // se devuelve el error
    }
};