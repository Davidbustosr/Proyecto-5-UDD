// Importamos useState para manejar el estado local del componente.
import { useState } from "react";
import "../styles/filtros.css"; // Archivo CSS para los estilos del componente.
import PropTypes from "prop-types"; // PropTypes para validar las props.

// Opciones de filtro predefinidas.
const filterOptions = {
  fechasCierre: [
    { label: "Hoy", value: 0 },
    { label: "Mañana", value: 1 },
    { label: "Pasado Mañana", value: 2 },
    { label: "En 3 días", value: 3 },
    { label: "En 4 días", value: 4 },
    { label: "En 5 días", value: 5 },
    { label: "En 6 días", value: 6 },
  ],
};

// Componente principal para gestionar los filtros.
const Filtros = ({ onApplyFilters }) => {
  // Estado para almacenar los filtros seleccionados.
  const [filters, setFilters] = useState({
    FechaCierre: "", // Valor inicial vacío.
  });

  // Maneja los cambios en los campos del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters, // Conserva los valores anteriores.
      [name]: value,  // Actualiza el valor del filtro específico.
    }));
  };

  // Reinicia todos los filtros a sus valores iniciales.
  const handleReset = () => {
    const emptyFilters = Object.fromEntries(
      Object.keys(filters).map((key) => [key, ""]) // Convierte todos los valores a cadenas vacías.
    );
    setFilters(emptyFilters); // Actualiza el estado local.
    onApplyFilters(emptyFilters); // Notifica al componente padre.
  };

  // Maneja el envío del formulario y aplica los filtros.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario.
    const params = {
      FechaCierre: filters.FechaCierre, // Envía los filtros seleccionados.
    };
    onApplyFilters(params); // Notifica al componente padre con los filtros aplicados.
  };

  return (
    <form className="filtros-form" onSubmit={handleSubmit}>
      {/* Filtro de Fecha de Cierre */}
      <div className="filtro">
        <label>Fecha de Cierre:</label>
        <select
          name="FechaCierre" // Nombre del campo en el estado.
          value={filters.FechaCierre} // Valor actual del filtro.
          onChange={handleChange} // Maneja los cambios en el campo.
        >
          <option value="">Selecciona una opción</option>
          {filterOptions.fechasCierre.map((fecha) => (
            <option key={fecha.value} value={fecha.value}>
              {fecha.label} {/* Etiqueta legible para el usuario. */}
            </option>
          ))}
        </select>
      </div>

      {/* Botones para aplicar o reiniciar los filtros */}
      <div className="filtro-buttons">
        <button type="submit">Aplicar Filtros</button> {/* Botón para enviar el formulario. */}
        <button type="button" onClick={handleReset}>
          Reiniciar Filtros {/* Botón para reiniciar los filtros. */}
        </button>
      </div>
    </form>
  );
};

// Validación de las props con PropTypes.
Filtros.propTypes = {
  onApplyFilters: PropTypes.func.isRequired, // onApplyFilters debe ser una función.
};

// Exportamos el componente para usarlo en otras partes de la aplicación.
export default Filtros;