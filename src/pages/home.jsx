// Importamos los hooks useState y useEffect para manejar el estado y los efectos secundarios.
import { useState, useEffect } from "react";
// Servicio para obtener las licitaciones activas.
import { getLicitacionesActivas } from "../services/licitacionesservice";
// Componente de filtros para aplicar búsquedas específicas.
import Filtros from "../components/filtros";
// Archivo CSS para los estilos del componente.
import "../styles/Home.css";

const Home = () => {
  // Estado para almacenar las licitaciones completas y filtradas.
  const [licitaciones, setLicitaciones] = useState([]);
  const [licitacionesFiltradas, setLicitacionesFiltradas] = useState([]);
  const [licitacionesFiltradasCount, setLicitacionesFiltradasCount] = useState(0);

  // Estados adicionales para manejar la carga, errores y paginación.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [licitacionesPorPagina] = useState(5); // Cantidad fija de licitaciones por página.

  // Hook useEffect para cargar las licitaciones activas al iniciar el componente.
  useEffect(() => {
    const fetchLicitaciones = async () => {
      setLoading(true); // Muestra el indicador de carga.
      setError(null); // Resetea errores previos.
      try {
        // Llama al servicio y actualiza los estados correspondientes.
        const data = await getLicitacionesActivas();
        setLicitaciones(data);
        setLicitacionesFiltradas(data);
        setLicitacionesFiltradasCount(data.length);
      } catch {
        setError("No se pudieron cargar las licitaciones."); // Manejo de errores.
      } finally {
        setLoading(false); // Oculta el indicador de carga.
      }
    };

    fetchLicitaciones();
  }, []);

  // Función para aplicar filtros.
  const handleApplyFilters = (filters) => {
    // Verifica si los filtros están vacíos.
    const isFiltersEmpty = !filters.region && filters.FechaCierre === "";

    if (isFiltersEmpty) {
      setLicitacionesFiltradas(licitaciones); // Resetea a todas las licitaciones.
      setLicitacionesFiltradasCount(licitaciones.length);
      return;
    }

    // Aplica los filtros al array de licitaciones.
    const filteredData = licitaciones.filter((licitacion) => {
      // Filtro por región.
      if (filters.region && licitacion.Comprador?.RegionUnidad !== filters.region) return false;

      // Filtro por fecha de cierre.
      if (filters.FechaCierre !== "") {
        const hoy = new Date();
        const fechaObjetivo = new Date(hoy);
        fechaObjetivo.setDate(hoy.getDate() + parseInt(filters.FechaCierre)); // Calcula la fecha objetivo.

        const fechaLicitacion = new Date(licitacion.FechaCierre);

        // Compara día, mes y año para asegurar coincidencia exacta.
        if (
          fechaLicitacion.getDate() !== fechaObjetivo.getDate() ||
          fechaLicitacion.getMonth() !== fechaObjetivo.getMonth() ||
          fechaLicitacion.getFullYear() !== fechaObjetivo.getFullYear()
        ) {
          return false;
        }
      }

      return true;
    });

    // Actualiza el estado con los datos filtrados.
    setLicitacionesFiltradas(filteredData);
    setLicitacionesFiltradasCount(filteredData.length);
  };

  // Variables para calcular la paginación.
  const indiceUltimaLicitacion = paginaActual * licitacionesPorPagina;
  const indicePrimeraLicitacion = indiceUltimaLicitacion - licitacionesPorPagina;
  const licitacionesVisibles = licitacionesFiltradas.slice(indicePrimeraLicitacion, indiceUltimaLicitacion);

  // Función para manejar la página anterior.
  const handlePaginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  // Función para manejar la página siguiente.
  const handlePaginaSiguiente = () => {
    const totalPaginas = Math.ceil(licitacionesFiltradas.length / licitacionesPorPagina);
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  return (
    <div className="home-container">
      {/* Sección de filtros */}
      <div className="home-filters">
        <Filtros onApplyFilters={handleApplyFilters} />
      </div>

      {/* Sección de licitaciones */}
      <div className="home-licitaciones">
        <p>Total de licitaciones encontradas: {licitacionesFiltradasCount}</p>

        {/* Indicadores de carga o error */}
        {loading && <p>Cargando licitaciones...</p>}
        {error && <p className="error">{error}</p>}

        {/* Listado de licitaciones o mensaje de vacío */}
        {licitacionesVisibles && licitacionesVisibles.length > 0 ? (
          <ul className="licitaciones-list">
            {licitacionesVisibles.slice(0, 3).map((licitacion) => (
              <li key={licitacion.CodigoExterno} className="licitacion-card">
                <h3>{licitacion.Nombre}</h3>
                <p>{licitacion.Descripcion}</p>
                <p>Estado: {licitacion.CodigoEstado}</p>
                <p>Cierre: {licitacion.FechaCierre}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No hay licitaciones disponibles.</p>
        )}

        {/* Controles de paginación */}
        <div className="paginacion">
          <button onClick={handlePaginaAnterior} disabled={paginaActual === 1}>
            Anterior
          </button>
          <button
            onClick={handlePaginaSiguiente}
            disabled={paginaActual === Math.ceil(licitacionesFiltradas.length / licitacionesPorPagina)}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;