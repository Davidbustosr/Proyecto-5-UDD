// Importamos Axios para manejar las solicitudes HTTP.
import axios from 'axios';

// URL base de la API de Mercado Público.
const BASE_URL = 'https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json';
// Ticket de autenticación para acceder a la API.
const TICKET = '7CBA4AF5-2F31-4E11-AE5A-179C563A3516';

/**
 * Función para obtener las licitaciones activas desde la API de Mercado Público.
 * @returns {Promise<Array>} Retorna un array de licitaciones activas.
 * @throws {Error} Lanza un error si no se pueden obtener las licitaciones.
 */
export const getLicitacionesActivas = async () => {
  try {
    // Construimos la URL con los parámetros necesarios.
    const url = `${BASE_URL}?estado=activas&ticket=${TICKET}`;

    // Realizamos la solicitud GET a la API.
    const response = await axios.get(url);

    // Verificamos si la respuesta contiene la propiedad 'Listado'.
    if (!response.data || !response.data.Listado) {
      throw new Error('No se encontraron licitaciones activas.');
    }

    // Retornamos la lista de licitaciones activas.
    return response.data.Listado;
  } catch (error) {
    // Mostramos un mensaje de error en la consola.
    console.error('Error al obtener licitaciones activas:', error.message);
    // Relanzamos el error para manejarlo en el nivel superior.
    throw error;
  }
};