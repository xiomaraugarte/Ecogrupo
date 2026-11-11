# Ecogrupo 🌱

Ecogrupo es una aplicación móvil que promueve el hábito del reciclaje mediante el registro de lo que reciclan, las personas van a puntos de acopio, en la app ponen un código que se les da y con eso ganan puntos que pueden canjear comprando productos orgnánicos de la canasta familiar, y cada semana que reciclen suman semanas de racha y pueden participar en un ranking con sus amigos para ver quien recicla más. Su objetivo es motivar a los usuarios a reciclar de manera constante y convertir esta acción en parte de su rutina haciendo que lo vean como algo mucho más entetenido y beneficiso más allá del cuidado del medio ambiente.

## Cómo correrla

Para ejecutar la aplicación, abre la terminal en la carpeta del proyecto y utiliza los siguientes comandos:

npm install
npx expo start

Luego, escanea el código QR con Expo Go para visualizar la aplicación en tu dispositivo móvil.

## Cómo está organizado el código

El proyecto está desarrollado con React Native y Expo, utilizando una estructura modular para facilitar la organización, mantenimiento y reutilización de componentes.

- app/: Contiene las pantallas principales de la aplicación, como Home, Shopping y Profile, además de la configuración de navegación.
- components/: Incluye componentes reutilizables de la interfaz, como tarjetas, botones, indicadores de racha y ventanas emergentes.
- context/: Administra los estados y datos compartidos entre diferentes pantallas mediante React Context, permitiendo mantener sincronizada la información de la aplicación.
- data/: Contiene los datos utilizados por la aplicación, como listas de productos, categorías y otra información necesaria para mostrar contenido en las vistas.
- storage/: Gestiona el almacenamiento local de información, permitiendo conservar los datos y registros del usuario.
- constants/: Contiene los colores, estilos y otras configuraciones visuales compartidas.
- assets/: Almacena imágenes, íconos e ilustraciones utilizados en la aplicación.

### Distribución del trabajo

Cada integrante del equipo desarrolló las vistas y componentes correspondientes a su rama de trabajo, integrándolos al proyecto mediante Pull Requests.

Pop-up "reciclaje exitoso" = Estefania Antezana
Mapa puntos de acopio = Laila Ugarte
Pop-up "registrar puntos" = Estefania Antezana
Canasta familiar = Estefania Antezana
Hogar sostenible = Estefania Antezana
Home = Estefania Antezana
Perfil = Estefania Antezana
Pop-up "cantidad de puntos que puede ganar" = Estefania Antezana
Login = Laila Ugarte
Registrarse = Laila Ugarte
Animación de cargando = Laila Ugarte
Información de los puntos de acopio = Laila Ugarte
Carrito = Laila Ugarte
Animación racha = Estefania Antezana
Pop-up "más información del producto" = Estefania Antezana
Pop-up "error" = Laila Ugarte
Readme = Estefania Antezana

## Cambio de requisito

Se reemplazó la funcionalidad de notificaciones por un mapa de parques cercanos, con el propósito de incentivar la actividad del usuario a través de la exploración de espacios verdes. Este cambio busca que el hábito se active al salir e interactuar con el entorno, en lugar de depender de recordatorios mediante notificaciones.