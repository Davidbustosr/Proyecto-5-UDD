
# **Licitaciones Activas - App en Desarrollo**

Este repositorio contiene una aplicación en desarrollo para la gestión de licitaciones activas. La aplicación está diseñada para filtrar y gestionar las licitaciones obtenidas desde la API de Mercado Público. Este proyecto forma parte de una tarea universitaria, con una implementación básica que incluye solo las funcionalidades esenciales para cumplir con los requisitos actuales. **El código ha sido simplificado deliberadamente** para esta entrega.

## **Objetivo del Proyecto**

El objetivo final del proyecto es crear una plataforma que permita:
1. **Filtrar licitaciones activas** conectándose a la API pública de Mercado Público.
2. Realizar **cotizaciones automáticas** basadas en las licitaciones seleccionadas, utilizando una plantilla predeterminada.
3. Implementar un sistema de búsqueda automatizada para encontrar los artículos necesarios en diferentes fuentes.

En esta etapa inicial, el repositorio contiene únicamente la funcionalidad de consulta y filtrado de licitaciones activas.

---

## **Tecnologías Utilizadas**

- **Frontend:**
  - React: Para la creación de la interfaz de usuario.
  - Axios: Para realizar solicitudes HTTP a la API de Mercado Público.
- **Estilos:**
  - CSS: Para el diseño básico de la aplicación.
- **Backend (API Externa):**
  - API de Mercado Público.

---

## **Funcionalidades Implementadas**

1. **Conexión con la API de Mercado Público**:
   - Se realiza una solicitud para obtener las licitaciones activas.
   - La funcionalidad está implementada en el servicio `licitacionesservice`.

2. **Filtrado de licitaciones**:
   - Los usuarios pueden filtrar las licitaciones por fecha de cierre.
   - Los filtros están gestionados por el componente `Filtros`.

3. **Paginación**:
   - Se ha implementado un sistema básico de paginación para navegar entre las licitaciones filtradas.

---

## **Cómo Usar Este Repositorio**

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar dependencias**:
   Asegúrate de tener Node.js instalado en tu sistema y luego ejecuta:
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**:
   Para iniciar el servidor de desarrollo:
   ```bash
   npm start
   ```

4. **Verificar las licitaciones activas**:
   La aplicación se conecta a la API de Mercado Público y muestra las licitaciones activas en la interfaz.

---

## **Instrucciones para Subir el Código a GitHub**

1. **Iniciar un repositorio local**:
   Si aún no lo has hecho, inicializa un repositorio en la carpeta del proyecto:
   ```bash
   git init
   ```

2. **Añadir los archivos al control de versiones**:
   ```bash
   git add .
   ```

3. **Realizar el primer commit**:
   ```bash
   git commit -m "Primera versión: funcionalidad básica de licitaciones activas"
   ```

4. **Configurar el repositorio remoto**:
   Crea un nuevo repositorio en GitHub y copia su URL. Luego, configúralo como remoto:
   ```bash
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   ```

5. **Subir el código a GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## **Nota Importante**

Este repositorio contiene **solo las funcionalidades esenciales** necesarias para la tarea universitaria. La aplicación está en desarrollo activo, y muchas de las funcionalidades finales, como la automatización de cotizaciones y la búsqueda de artículos, serán implementadas en futuras iteraciones.

Si tienes preguntas o sugerencias, no dudes en crear un issue o enviar un pull request.

---

## **Autor**

- **Nombre del Estudiante**
- Contacto: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
