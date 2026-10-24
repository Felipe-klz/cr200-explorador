# CR200 — Explorador 3D

Web estática para explorar 302 elementos del chasis CR200 de 4400 × 2000 mm, generado con MCP Nav IA.

- Selección de sólidos y fichas por pieza.
- Ocultar conjuntos, aislar piezas y ver el interior.
- Vistas general, superior, inferior y de suspensión.
- Matriz normativa argentina y hoja de ruta para homologación O2.
- Descargas del CAD y documentación original.

Estado: diseño de desarrollo, sin homologación ni habilitación vial acreditadas. La página diferencia referencias de normas, especificaciones y cumplimiento demostrado.

## Ejecutar localmente

Desde la raíz, ejecutar `python -m http.server 8769` y abrir `http://localhost:8769`.

No requiere compilación, cuenta ni servidor de aplicación. Three.js 0.180.0 se distribuye localmente con su licencia MIT. La geometría comprimida conserva los identificadores de piezas de la revisión `17b374f628144c82a372a24a26f634a6` del caso `CR200-4400X2000-DETALLE-20261024`.

Las notas CAD originales se conservan en las fichas y descargas. La matriz normativa de la web amplía y precisa su alcance, especialmente para O2 nuevo frente a procedimientos O1 o de regularización de usados.

