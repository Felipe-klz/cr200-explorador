# CR200 · Auditoría por subensambles

## S01 · Amortiguación

Se revisó primero el montaje delantero izquierdo y después, por separado, los otros tres. Se corrigieron16 elementos del CAD:cuatro amortiguadores, ocho ménsulas y cuatro conjuntos de herrajes. El resto del trailer no se declara revisado por este control.

### Errores encontrados en R2

|Control delantero izquierdo|R2|Corrección S01|
|---|---:|---|
|Amortiguador/tubo de eje|6818.55 mm³ de intersección|0 mm³ en posición nominal|
|Herrajes/ménsula superior|794.61 mm³|0 mm³ en posición nominal|
|Herrajes/ménsula inferior|73.24 mm³|0 mm³ en posición nominal|
|Ménsula inferior/eje|290.88 mm³|0 mm³ en posición nominal|
|Ménsula inferior tras unión booleana|3 cuerpos separados|1 cuerpo continuo|
|Tuercas representadas|4, incluidas tuercas interiores incorrectas|2 exteriores; hombros retienen arandelas interiores|

### Solución corregida

El anclaje inferior se desplazó60 mm hacia delante del eje delantero y hacia atrás del trasero, y49 mm por debajo del eje. Queda dentro de los largueros, en y±845 mm. El punto superior queda160 mm más hacia el exterior longitudinal y200 mm más alto. Las piezas se verificaron en cada posición, incluyendo sus vecinos reales.

El cuerpo del amortiguador tiene un alojamiento para el vástago; ambos se representan como dos cuerpos telescópicos sin solape de material. Cada montaje lleva dos gomas apoyadas en la placa y centradas por labios, dos arandelas y una tuerca exterior. Las dimensiones de esas interfaces siguen pendientes de plano del producto elegido.

La ménsula superior tiene base100 ×175 ×6, dos nervios e6 y asiento anularØ56/e6. La inferior tiene almae8 y asientoØ56/e6, fuera del paquete de hojas. Los despejesØ40 alrededor de los montajes evitan choques con gomas y arandelas. No se suelda al tubo de eje ni al amortiguador. Las ménsulas y sus uniones requieren cálculo y WPS.

### Resultados nominales

Los cuatro montajes no presentan solapes con sus vecinos del CAD ni entre los cuatro ítems de cada montaje. Cada ménsula forma un cuerpo continuo; las uniones geométricas con placa de reparto y placa de apriete resultan continuas. Esto acredita contacto y continuidad del dibujo, no la resistencia de una soldadura.

|Holgura geométrica|Resultado nominal mínimo|
|---|---:|
|Amortiguador a tubo de eje|29.964 mm|
|Ménsula inferior a tubo de eje|19.300 mm|
|Ménsula inferior a hoja maestra|10.275 mm|

La holgura a hoja debe contrastarse con juego lateral, tolerancias, torsión y deformación reales. No se afirma que el valor nominal garantice espacio en servicio.

### Movimiento y montaje

En el delantero izquierdo se ensayaron cinco traslaciones verticales aisladas:-50,-25,0,+35,+70 mm. El amortiguador mantiene distancias al eje de26.82 mm o mayores en esas posiciones. Longitudes de206.155 a296.816 mm frente a190.5–304.8 mm de la referencia dimensional de catálogo. No usar esos extremos de catálogo como topes de suspensión.

La inclinación varía aproximadamente-6.04°/+12.25° respecto del montaje nominal. Se comprobó ausencia de choque de espárragos con soportes en los extremos y posición nominal; falta confirmar que las gomas y el producto admitan esa articulación. La deformación de gomas no se simuló.

Una envolvente representativa de llave cortaR20 y17 mm junto a cada tuerca del delantero izquierdo queda libre. No se comprobó una herramienta comercial ni un vaso largo.

### Qué queda abierto

- Plano y características OEM del amortiguador y herrajes:medición de longitudes, espárragos, precarga de goma, retención y capacidad angular.
- Cinemática real del tándem, incluidos desplazamientos longitudinales y giro de ejes y balancín. Corresponde a S02.
- Fuerzas de amortiguación, dimensionado de placa de apriete, ménsulas, soldaduras y fatiga.
- Fabricación, ensayos físicos y homologación del vehículo completo.

**Estado:S01 corregido y revisado geométricamente dentro del alcance indicado. No liberado para fabricar.**

### Secuencia de revisión

1. S01 · Amortiguación:geometría nominal revisada; validación funcional y resistente pendiente.
2. S02 · Suspensión tándem:pendiente.
3. Nudos de suspensión a bastidor:pendiente.
4. Lanza:pendiente.
5. Enganche,cadenas,ruptura y jockey:pendiente.
6. Bastidor y anclajes de vivienda:pendiente.
7. Ejes,mazas,llantas y neumáticos:pendiente.
8. Frenos eléctricos y estacionamiento:pendiente.
9. Instalación eléctrica:pendiente.
10. Guardabarros,luces,paragolpes y estabilizadores:pendiente.

La fuente paramétrica y el informeJSON permiten inspeccionar el alcance y las mediciones. El catálogo Lippert283271 aporta sólo una referencia dimensional; nuestro montaje no se presenta como kitOEM281255 ni como producto homologado.
