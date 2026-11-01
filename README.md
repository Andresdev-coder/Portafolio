# Portafolio Logicadev

Portafolio personal creado con React. Necesitas instalar Node.js (incluye npm).

## Iniciar la web

Desde esta carpeta (`protafolio`), abre una terminal y ejecuta:

```powershell
npm install
npm start
```

Abre http://localhost:3000 en el navegador. `npm install` solo hace falta la primera vez.

## Activar el formulario de contacto (opcional)

El formulario necesita acceso SMTP de Gmail. Configura estas variables en PowerShell antes de iniciar el servidor; usa una contrasena de aplicacion de Google, no la contrasena normal:

```powershell
$env:EMAIL_USER="tu-correo@gmail.com"
$env:CONTACT_TO="tu-correo@gmail.com"
$env:EMAIL_PASS="tu-contrasena-de-aplicacion"
npm run start:server
```

Deja esa terminal abierta junto con `npm start`. Sin configurar el servidor de correo, la web funciona pero el formulario no envia mensajes.

## Personalizar

- Portada y presentacion: `src/components/Banner.js`
- Habilidades: `src/components/Skills.js`
- Proyectos y sus imagenes: `src/components/Projects.js` y `src/assets/img/`
- Logo Logicadev: `src/assets/img/logo.svg`
- Enlaces y datos de contacto: agrega tus propios enlaces en `src/components/NavBar.js`

Las habilidades y los proyectos incluidos son ejemplos editables; reemplazalos por tu experiencia real. Para generar los archivos listos para publicar, ejecuta `npm run build`.
