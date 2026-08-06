# Anymascotas

Landing web premium para una petshop en Mendoza. Alimento balanceado, accesorios, higiene y juguetes para perros, gatos, aves y roedores, con envíos en 24hs a toda la provincia.

## Tech stack

- **HTML / CSS / JS** — vanilla, sin frameworks
- **Vite** — dev server con hot reload y build de producción
- **Fuentes**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos), [Work Sans](https://fonts.google.com/specimen/Work+Sans) (texto), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (labels)

## Estructura del proyecto

```
the-pet-stop/
├── index.html          # Punto de entrada — markup de la landing
├── css/
│   └── styles.css      # Todo el estilo (vanilla, con variables CSS)
├── js/
│   └── main.js         # Interacciones: scroll reveal, contadores, sidebar, rotador
├── assets/
│   ├── img/            # Imágenes de producto (placeholder por ahora)
│   └── svg/            # Íconos y logos SVG
├── vite.config.js      # Configuración mínima de Vite
├── package.json        # Scripts y dependencias
└── README.md           # Este archivo
```

## Cómo correr el proyecto

> Requiere [Node.js](https://nodejs.org/) (v18 o superior).

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# Vite abre automáticamente http://localhost:5000
```

### Comandos disponibles

| Comando            | Acción                                      |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Inicia el servidor de desarrollo (hot reload) |
| `npm run build`    | Genera los archivos estáticos en `/dist`      |
| `npm run preview`  | Sirve la build de producción localmente       |

## Paleta de colores

| Uso         | Variable CSS   | Hex       |
| ----------- | -------------- | --------- |
| Fondo (sec.)| `--forest`     | `#161A22` |
| Fondo dark  | `--forest-deep`| `#0D1117` |
| Secundario  | `--sand`       | `#1E242F` |
| Cards       | `--sand-light` | `#2B3444` |
| Acento (botones, precios) | `--rust`  | `#10B981` |
| Highlights  | `--mustard`    | `#F59E0B` |
| Texto       | `--ink` / `--paper` | `#F1F5F9` |

## Próximas mejoras

- Reemplazar placeholders de producto con imágenes reales en `assets/img/`
- Conectar botones de carrito y "Agregar al carrito" con WhatsApp
- Implementar el filtro dinámico del catálogo
- Agregar formulario de newsletter funcional
