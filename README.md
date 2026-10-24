# CR200 · S02-A: unión central de ballesta delantera izquierda

Estado: revisión geométrica parcial. La suspensión completa sigue abierta.

Se trabajó una sola subsección: paquete, asiento sobre eje, placa, perno central, dos abrazaderas y cuatro tuercas/arandelas del montaje delantero izquierdo. Son12 elementos físicos y un nodo histórico sin sólido. Los otros tres paquetes conservan la geometría R2 y todavía no fueron revisados.

## Investigación y corrección

Dexter, catálogo RV2024, página14:072-022-00 tiene3 hojas, bujes de nylon, longitud26in, ancho1.75in, paquete0.94in y altura cargada1.75in. Fuente primaria: https://static.nhtsa.gov/odi/tsbs/2024/MC-11002352-0001.pdf

El modelo anterior tenía4 hojas. La cuarta pasa a antecedente documental; no se borra su trazabilidad. Hoja maestra con ojos unidos en un solo sólido; curvas cuadráticas suaves en lugar de tramos rectos. Las tres hojas tienen un tramo plano de120mm que apoya sobre asiento y placa. Espesores iguales7.9587mm y perfiles son geometría de integración supuesta, no dimensiones OEM confirmadas ni plano para fabricar ballestas.

Perno central ilustrativoØ8mm, agujerosØ8.5mm, cabezaØ12×5.5mm alojada en asientoØ12.5/profundidad6mm; tuercaAF13×6.5mm accesible por aberturaØ22mm en placa. Estos detalles resuelven los solapes del dibujo anterior. Roscas simplificadas con huecos de representación, sin verificación de precarga.

Dos abrazaderas continuasØ12.7mm con radio central36.5125mm para tuboØ60.325mm. Placa110×100×10mm, agujerosØ14.5mm. Herrajes alineados a las ramas. Este conjunto es un desarrollo propio: el catálogo Dexter publica7/16-20 para tubo2.38in. No atribuir compatibilidad OEM al montaje propio. Confirmar un kit completo y redimensionar antes de fabricar.

## Comprobaciones nominales

- Cero solapes internos superiores a0.001mm³ entre los12 elementos físicos.
- Hoja maestra y cada abrazadera:un sólido BREP válido.
- Perno/tuerca:dos cuerpos físicos distintos, intencionales.
- Contactos placa/hoja, hojas entre sí y asiento/hoja:unión booleana continua. No representa soldadura entre hojas.
- Interfaz S01 conservada:contacto ménsula/placa y holgura nominal10.275mm a hoja.

## Diez interferencias externas abiertas

El barrido contra vecinos encontró cruces con EL-HARNESS, EL-PARKCABLE y RU-BACKPLATE-0--1. El detalle de cada par y volumen está en el JSON adjunto. No son interferencias aceptadas ni corregidas: quedan como problemas de integración al revisar rutas eléctricas, estacionamiento y freno. No se puede cerrar S02 ni fabricar el conjunto con estos cruces.

## Próxima subsección y límites

Continuar por ojos, bujes, pernos, gemelas y balancín de este mismo montaje; después revisar los otros paquetes individualmente. Resolver interfaces con frenos y cables antes de cerrar la suspensión.

No se realizó cálculo resistente, rigidez de ballestas, precarga, fatiga, tolerancias OEM, cinemática articulada ni ensayo. El dibujo corresponde a una posición nominal cargada, no a la forma libre. No hay homologación ni aprobación para circular.
