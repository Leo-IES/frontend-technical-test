
# FrontEnd Technical Test

Esta es una prueba tecnica para KSP Technologies y Maxi Send, utilizando React + Typescript. En ella se desarrolla una aplicación web para la visualización de una colección de Series y Películas implementando navegación y componentes reutilizables con el fin de ofrecer una solución a la altura.


## Tecnologias Utilizadas

* ReactJS v18.2.0
* React Redux v9.1.0
* React Router Dom v6.22.3
* MUI v5.15.12
* MUI Icons v5.15.12
* TailwindCSS v3.4.1
* Jest v29.7.0
* React Testing Library v14.2.1
* Redux Mock Store v1.5.4
* indentity-obj-proxy v3.0.0
* Vite v5.1.4
## Instalación y Configuración

Instalar con los siguientes comandos:

```bash
  git clone https://github.com/Leo-IES/frontend-technical-test.git
  cd frontend-technical-test
  npm install
  npm run dev
```
* No se requieren pasos extra.

    
## Ejecución de Pruebas Unitarias
Ejecutar con el comando:
```bash
  npm test
```
## Puntos a Destacar

Se integraron algunos extras para un mejor resultado:
* Typescript.
* Responsive.
* Añadido filtro por año en coleccion de titulos.
* Añadida paginacion.
* Añadido selector de cantidad de resultados a mostrar (5, 10, 20).
* Loading individual de cada Card en base a la resolución de la imagen de cartelera.
* Añadido de una imagen de reserva en caso de que la imagen de cartelera no resuelva satisfactoriamente.
* Ajustes de tamaño de imagen para unificar estilos.
* Animación de apertura de Modal.
* Optimización y enfoque en microservicios al segmentar componentes para su reutilización en diferentes escenarios.
* Validación de NO años anteriores y futuros para el filtro de titulo por año de lanzamiento.
* Se integraron varias formas de resolver un mismo problema en el uso de estilos, abordando las posibilidades que ofrece el uso mas básico con archivos CSS, las clases de la librería TailwindCSS y los estilos inline que ofrece MUI en sus componentes. Esto con el fin de demostrar los diferentes casos de uso, sin embargo en un uso diario me decanto por la elección de una única opción con el fin de homogeneizar y estandarizar un patron en el proyecto.
* Creación de estructura del proyecto basado en Good Practices.
* Creación de sección de Modelos para el manejo de interfaces con Typescript.
* Creación de sección de Servicios para el manejo de request para obtener la información local.
* Creación y segmentación pertinente del Store para Redux y sus features.



## Toma de Decisiones

#### ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Elegí trabajar con React + Typescript debido al alcance del proyecto, al ser uno algo reducido, React ofrece capacidades modulares y de integración muy atractivas, siendo fácil su configuración y desarrollo. A su vez basado en mi experiencia personal con el mercado emergente de las tecnologías y el desarrollo, he visto que grandes empresas se decantan por React como tecnología predilecta y me gusta mantenerme trabajando con tecnologías vanguardistas. Por el lado de Typescript me parece una gran opción al momento de un desarrollo más estructurado puesto que nos habilita el tipado de datos en Javascript, lo que nos ayuda a tener un control sobre los datos que son enviados y manejados desde nuestra aplicación.

En cuestión de librerías para estilos y componentes elegí MUI + TailwindCSS las cuales son dos de las librerías mas populares al momento de trabajar en proyectos de React. MUI ofrece una gran variedad de componentes muy versátiles, intuitivos y personalizables para el desarrollo de soluciones a la medida. Mientras que TailwindCSS ofrece clases simples pero de gran impacto para obtener mejores y mas rápidos resultados. Cabe destacar que se pueden integrar ambos sin ningún conflicto.

Por el lado de las pruebas unitarias elegí Jest + React Testing Library las cuales son las librerías mas recomendadas para un proyecto en React. En conjunto ofrecen el desarrollo de pruebas intuitivas y simples. Siendo de fácil escalabilidad y ofreciendo a su vez el registro de Coverage para verificar la calidad de nuestro código.

El motor de Vite fue elegido por su rapidez sobre el motor estándar, también cabe destacar que otras tecnologías como Angular en sus ultimas versiones se han movido a favor de Vite integrándolo por default.

#### ¿Hay alguna mejora que pueda hacer en su envío?

Me hubiera gustado hacer pruebas unitarias mas extensas, sin embargo creo que cubren un buen coverage.

#### ¿Qué haría de manera diferente si se le asignara más tiempo?

Me gustaría agregar mas animaciones y extender las pruebas unitarias.
