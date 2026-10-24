# CR200 — Explorador 3D

Web estática para explorar336 elementos del chasis CR200 de4400 ×2000 mm, generado con MCP Nav IA. Actualización S01:auditoría geométrica del subensamble de amortiguación,16 elementos corregidos y cuatro montajes comprobados individualmente.

S01 corrige interferencias y falta de continuidad detectadas en R2. El resto del trailer no se considera auditado por esos resultados. La siguiente subsección es S02:suspensión tándem y trayectoria real. La resistencia, fatiga, gomas, componentesOEM y cinemática articulada siguen pendientes.

- Selección de sólidos y fichas por pieza.
- Ocultar conjuntos, aislar piezas y ver el interior.
- Vistas general, superior, inferior y de suspensión.
- Matriz normativa argentina y hoja de ruta para homologación O2.
- Recorridos de ingeniería con fuentes, decisiones y validaciones pendientes; S01 conserva las mediciones antes/después.
- Descargas del CAD actualizado, informe S01 y auditoríaJSON. Las fichas indican qué piezas tienen auditoría nominal y cuáles siguen pendientes.

Estado: diseño de desarrollo, sin homologación ni habilitación vial acreditadas. La página diferencia referencias de normas, especificaciones y cumplimiento demostrado.

## Ejecutar localmente

Desde la raíz, ejecutar `python -m http.server 8769` y abrir `http://localhost:8769`.

No requiere compilación, cuenta ni servidor de aplicación. Three.js 0.180.0 se distribuye localmente con su licencia MIT. La geometría comprimida conserva los identificadores de piezas del caso `CR200-4400X2000-DETALLE-20261024`. La revisión exacta está en `assets/parts.json` y en la fuente Nav IA descargable.

Las revisiones inmutables de Nav IA conservan la historia. La memoria R2 incluye el antecedente R1 identificado como histórico. La matriz normativa precisa el alcance para O2 nuevo frente a procedimientos O1 o de regularización de usados. La generación CAD y los chequeos algebraicos no validan resistencia, fatiga, cinemática completa ni homologación.

