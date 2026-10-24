# CR200 · 4400 × 2000 mm · diseño mecánico detallado

Fecha: 24/10/2026. Caso Nav IA: `CR200-4400X2000-DETALLE-20261024`. Rama main. Revisión `17b374f628144c82a372a24a26f634a6`.

## Entrega

Se rehízo una sola medida a partir del objetivo del anterior CR200. El caso nuevo conserva intacta la familia previa y contiene **302 elementos geométricos**, agrupados en bastidor, lanza, suspensión, rodadura/frenos, guardabarros/apoyos y electricidad. Cada elemento tiene notas de función, material, base de diseño, fabricación o compra, montaje, verificación, mantenimiento y procedencia.

**Estado: diseño de desarrollo no liberado para fabricar.** El detalle visual no constituye memoria de resistencia ni certificación. La casa habitable y sus instalaciones no están modeladas. Los componentes de compra se identifican por clase o referencia; los contornos no disponibles en planos oficiales se reconstruyeron de forma aproximada y se declararon como tales.

## Geometría y arquitectura

| Parámetro | Valor de proyecto |
|---|---:|
| Plataforma | 4400 × 2000 mm |
| Peso bruto total objetivo | 2000 kg, categoría prevista O2 |
| Largueros | RHS150 × 75 × 5, dos de4400 mm |
| Travesaños de piso | RHS80 × 40 × 3, once de1850 mm |
| Brazos de lanza | RHS150 × 60 × 5 |
| Referencia nominal de bola | x−1600, y0 mm |
| Centro de grupo de ejes | x2640 mm desde frente de plataforma |
| Distancia entre ejes | 838,2 mm |
| Centros de ejes | x2220,9 y3059,1 mm |
| Centros laterales de elásticos | y±962,5 mm; distancia1925 mm |
| Caras de maza | y±1130 mm; distancia2260 mm |
| Plano superior de bastidor | z150 mm |
| Carga nominal objetivo en bola | 200 kg; confirmar admisible de todo el enganche y tractor |

El PBT incluye chasis, ejes, ruedas, vivienda, equipos, agua y equipaje. No se declaró una carga útil sin conocer la tara de la casa completa. La masa de la casa y sus centros de gravedad se deben cerrar para tanques llenos/vacíos y cada condición de uso.

Se reforzó el bastidor respecto del anteproyecto para admitir un desarrollo más detallado de las estaciones de suspensión. Esa decisión es conservadora y aumenta tara; no equivale a una optimización por FEM. Los tubos principales y de piso suman aproximadamente343 kg en geometría ideal, antes de placas, rodadura, accesorios y protección. La cifra no es tara del trailer. No se debe aprovechar un supuesto margen de masa sin completar el pesaje.

## Bastidor, lanza y montaje de vivienda

Los largueros tienen eje mayor vertical y pared nominal5 mm. Se especifica acero estructural con propiedades garantizadas y fy adoptado mínimo235 MPa; el grado debe aparecer en el certificado del producto adquirido. No basta pedir un caño de uso general por su medida.

Once travesaños80×40×3 soportan el piso con paso próximo a440 mm. Para una presión de proyecto3 kPa, q_lineal=1,32 N/mm sobre1850 mm: M≈0,565 kNm, sigma≈40,44 MPa y flecha≈1,80 mm, en viga simplemente apoyada de sección ideal. Es una comprobación local de carga uniforme; tanques, baterías, apoyos de muebles y cargas de ocupación requieren revisar sus anclajes.

Las estaciones de suspensión reciben placas500×75×6 bajo larguero y cartelas. Se añadieron diez orejas de vivienda con agujeroØ11 paraM10; la contraparte resistente del piso/panel y su distribución de carga están pendientes. No se permite apretar un panel sándwich hasta aplastar su núcleo.

La lanza tiene dos brazos diagonales150×60×5 bajo bastidor, travesaño de arriostramiento y placas de transferencia horizontales/verticales. Sus empalmes son uniones críticas de fatiga: las cotas y espesores del desarrollo requieren comprobación local de los caminos de carga y un detalle de soldadura. El contacto geométrico no garantiza transmisión de fuerza. La placa del cabezal es de10 mm con patrón184×54 y taladrosØ12,5 como interfaz de referenciaCM/AL-KO.

Los cordones se representan de forma simbólica. Las gargantas propuestas en notas son puntos de partida para cálculo y WPS; el CAD no demuestra penetración, aceptación, fatiga ni calidad del metal de aporte.

## Suspensión detallada

Se propuso un tándem de elásticos de doble ojo con balancín compensador en cada lado. El conjunto incluye:

- Cuatro paquetes de elásticos, representados por hoja maestra y hojas graduadas, ojos, bujes y perno central.
- Dos balancines, ocho placas de gemela y catorce pernos de articulación con sus retenciones y bujes.
- Seis soportes al bastidor, placas de reparto y refuerzos.
- Ocho abrazaderasU1/2 in, dieciséis patas roscadas con tuercas y cuatro placas de apriete.
- Cuatro amortiguadores, sus ménsulas y cuatro topes de compresión.

La referencia de resorte es Dexter072-022-00,1250 lb≈566,99 kg por resorte. El conjunto de cuatro suma2267,96 kg de capacidad nominal de referencia, frente a1800 kg estáticos en los ejes con la hipótesis de200 kg en bola. Esta suma no autoriza aumentar el PBT ni prueba la carga dinámica o el reparto entre ejes.

El ancho44,45, la altura de paquete23,876 y la flecha cargada44,45 mm provienen de datos de catálogo. **La curvatura, cantidad visual y longitudes de hojas son representación de montaje; no constituyen diseño de fabricación de un elástico.** La flecha publicada a carga nominal no será exactamente la de operación a450 kg por resorte; falta la curva carga-flecha para fijar altura estática real.

Balancín de referencia013-104-02: distancia entre ojos laterales142,875 mm, desnivel50,8 mm y pernos9/16 in. Se comprobaron gemelas57,15 mm mediante cierre geométrico: diferencia horizontal17,4625 y vertical54,4168 mm. Los ojos interiores de los resortes están por encima de los agujeros laterales del balancín. El contorno exterior fundido y sus alojamientos son aproximados; no se debe mecanizar un repuesto desde este CAD.

### Amortiguación

Se incorporaron cuatro amortiguadores de referenciaMonroe555001, con datos del catálogo de longitudes: montajeS4/S4, comprimido200,025 mm, extendido301,625 mm y carrera101,6 mm. La implantación propuesta tiene separación horizontal200 y vertical160 mm:

| Condición vertical simplificada | Longitud de montaje |
|---|---:|
| Nominal | 256,12 mm |
| Compresión de eje70 mm | 219,32 mm |
| Extensión de eje50 mm | 290,00 mm |

Quedan19,29 mm antes del cierre nominal y11,63 mm antes de extensión nominal. Son reservas trigonométricas para movimiento vertical de un punto; no incluyen giro de viga, deformación de soportes, articulación del balancín ni tolerancias. El proveedor debe validar fuerza-velocidad, orientación y compatibilidad. El amortiguador no se utilizará como tope de recorrido.

## Ejes, frenos y ruedas

Se detallaron vigas de eje, asientos, manguetas, mazas-tambores, platos, zapatas, imanes, rodamientos/tapas y fijaciones de rueda. El eje es una **configuración a pedir a proveedor**, claseD35 de3500 lb, tubo de referenciaØ60,325,HF2260 ySC1925. No se propone cortar o modificar un eje estándar de otra longitud. El camber y las alineaciones OEM no están reproducidos en la viga recta de representación; el espesor de tubo, las pistas y los escalones de mangueta no son planos de fabricación.

Frenos de referenciaDexter023-086-00LH y023-087-00RH: eléctricos254×57,15 con estacionamiento mecánico. La geometría interior permite reconocer el conjunto, pero no reproduce el mecanismo de ajuste con precisión OEM. Deben ser compatibles con tambor, flange, controlador y homologación local.

Ruedas de proyecto15×5,5,PCD5×114,3 yoffset0. Referencia de neumáticoGoodyearEnduranceST205/75R15 107N D: diámetro688,34 y ancho203,2 mm de ficha. El perfil y ranuras son genéricos; no simulan huella ni deflexión. La presión definitiva se seleccionará por carga medida en la rueda más exigida, ficha vigente y capacidad de llanta/válvula.

Los20 espárragos/tuercas de rueda se representan con1/2-20 y cono de proyecto; no intercambiar porM12. Los pares de rueda, abrazaderas y articulaciones deben provenir del conjunto real, su clase, lubricación y recubrimiento. No se inventaron valores universales que pudieran trabar bujes o perder pretensión.

## Guardabarros, apoyos y equipamiento

Guardabarros tándem exteriores de chapa2, techoz270 y ancho260 por lado. Se incluyen faldones y soportes centrales y diagonales de extremo. Fueron revisados para que las ménsulas extremas sigan el techo inclinado en lugar de sobresalir del guardabarro. Falta definir desarrollo de chapa, radios de plegado y tornillos definitivos.

Se modelaron rueda jockey retraída, abrazadera, manivela, dos cadenas de seguridad cruzadas y anclajes independientes, cuatro estabilizadores retraídos, travesaño posterior, ópticas, marcadores, catadióptricos y portapatente. Las cadenas se seleccionan por certificado del conjunto y conectores; no se deduce resistencia del diámetro de eslabón visual. El travesaño posterior no se declara paragolpe ensayado. Los estabilizadores no son gatos para levantar el trailer ni cambiar ruedas.

La casa terminada debe respetar las visibilidades, alturas y posiciones reglamentarias de las luces. La colocación en el chasis es una propuesta, no aprobación de señalización de una carrocería que aún no existe.

## Circuitos de freno

Servicio: controlador del tractor → alimentación y retorno dedicados → cuatro imanes en paralelo. La referenciaDexter es aproximadamente3 A por freno, total12 A. Se propone par principal de cobre6 mm² y ramales2,5 mm². Para7 m de ida y resistividad0,0175 Ω·mm²/m: caída estimada0,49 V en el par principal, sin conectores, temperatura ni ramales.

Ruptura: batería dedicada12 V, cargador/protección del kit, interruptor por extracción y alimentación de imanes según kit certificado. La batería7 Ah dibujada es una referencia de espacio; no acredita autonomía reglamentaria sin prueba y curva de descarga. El cable de extracción se fija a punto independiente del tractor.

Estacionamiento: palanca mecánica → tensor/compensador → cuatro cables a frenos con función parking. Carrera y fuerza se deben ajustar al producto real. Las rutas de cables del modelo identifican su recorrido; necesitan fundas, guías, bucles de flexión y radios reales. No son una longitud de corte ni una verificación de movimiento.

## Chequeos realizados y límites

Nav IA generó la geometría final sin pendientes:302 elementos. Se incluyó comprobación de validez de forma en las recetas detalladas iniciales y de amortiguación. Se inspeccionó la vista general y una selección de71 componentes de suspensión izquierda. **No se ejecutó una comprobación completa automática de interferencias ni un solver estructural/cinemático.**

| Chequeo | Resultado numérico | Estado |
|---|---:|---|
| ball_kg | 200.000 | Dentro del criterio interno |
| spring_capacity_reserve_kg | 467.962 | Dentro del criterio interno |
| tyre_spacing_mm | 149.860 | Dentro del criterio interno |
| side_gap_mm | 28.400 | Dentro del criterio interno |
| fender_clearance_at_70mm_bump | 67.702 | Dentro del criterio interno |
| width_budget_mm | 2523.200 | Dentro del criterio interno |
| brake_feed_drop_V | 0.490 | Dentro del criterio interno |
| rear_rail_stress_2g_MPa | 83.135 | Dentro del criterio interno |
| shackle_closed_length_mm | 3266.122 | Dentro del criterio interno |

El chequeo de gemela informa longitud al cuadrado, enmm²; corresponde a57,15 mm. La carga en bola es una hipótesis y su rango interno160–240 kg no es requisito normativo. El ancho presupuestado2523,2 mm es conservador respecto de neumáticos; los guardabarros del CAD llegan aproximadamente2520 mm. El techo2600 es un presupuesto de diseño, pendiente de confirmar límite aplicable a unidad completa y jurisdicción.

La tensión de83,14 MPa corresponde únicamente al voladizo posterior con carga uniforme2g repartida por igual entre largueros y apoyo equivalente en centro de grupo. No cubre vano delantero, soldaduras, pared de RHS, torsión, cargas de bache ni fatiga. El límite interno180 MPa no es una tensión admisible reglamentaria.

Las holguras de149,86 mm entre neumáticos y28,4 mm al bastidor son geométricas con dimensiones de ficha. El despeje de67,70 mm al techo tras70 mm de subida se refiere al centro superior de rueda; falta barrido completo del arco, faldones, soportes y deformación real del neumático.

## Condiciones abiertas para fabricar y circular

1. Fijar vivienda, tara, centro de gravedad, vehículo tractor y masas de todos los estados de agua/equipaje; confirmar los200 kg admisibles en bola o rediseñar distribución.
2. Cerrar proveedor de ejes, elásticos, balancines, frenos y amortiguadores: dimensiones certificadas, curva carga-flecha, geometría montada y recorridos reales.
3. Completar FEM, fatiga y cálculo de uniones, especialmente lanza, soportes y anclajes de carrocería. Resolver tolerancias, WPS, pares y control de calidad.
4. Ejecutar barrido de suspensión y giro del tractor, comprobar interferencias, dirección de cableado, compresión de topes y máximos de amortiguadores.
5. Ensayar prototipo: pesajes por rueda/bola, frenos de servicio, estacionamiento y ruptura; alineación, rodaje, reaprietes y durabilidad.
6. Tramitar la vía de homologación que corresponda a fabricación individual o en serieO2 y jurisdicción. El procedimientoO1 de la Disposición53/2025 no debe extenderse automáticamente a este modelo.

## Fuentes

Se consultaron fuentes primarias de fabricantes y organismos; los datos no publicados se identifican como proyecto o representación. La ficha de balancín no incluye su contorno completo. El catálogo generalDexter se consultó por extractos indexados porque su descarga integral excedió el acceso del buscador. No se tuvo acceso al texto íntegro de IRAM.

- [Dexter Light Duty Catalogue: suspensión de doble ojo](https://www.dextergroup.com/user_area/content_media/raw/600-8k_complete_catalog.pdf): Catálogo indexado: 072-022-00, 1250 lb por resorte, ancho 1.75 in, paquete0.94 in, distancia de aplicación26 in, altura cargada1.75 in. PDF grande no recuperado íntegramente. Geometría de hojas/ojos es aproximación dimensional; no plano OEM.
- [Dexter 013-104-02 / AP233](https://dexterindex.com/product/6888): Balancín de doble ojo: centros142.875 mm, desnivel50.8 mm, pernos9/16 in, ancho44.45 mm. Contorno exterior propio de representación; no mecanizarlo a partir del CAD.
- [Dexter kit K71-359-00](https://dextergroup.com/user_area/content_media/raw/parts-kit-catalog.pdf): Referencia alternativa kit heavy duty para ballestas44.45 mm y ejes838.2 mm; no se mezcla su BOM con AP233 sin confirmación del fabricante.
- [Dexter D35, ejemplo de eje recto](https://dexterindex.com/product/76653): Clase3500 lb, tubo60.325 mm, camber y eje recto. Pieza de catálogo de95 in no se afirma igual al eje de proyecto2260 mm entre caras: se debe pedir fabricación/configuración de eje a proveedor, no recortar producto.
- [Dexter Product Bulletin413](https://www.dextergroup.com/user_area/content_media/raw/pb413AdjusterSpring.pdf): Referencia de frenos eléctricos254×57.15 mm con estacionamiento:023-086-00 LH y023-087-00 RH. Fuente de identificación; disponibilidad y aprobación local por confirmar.
- [Dexter preguntas técnicas de frenos](https://www.dextergroup.com/contact/faqs/brakes): Imanes de esta clase consumen aproximadamente3 A por freno; conexión en paralelo y retorno común dedicado. No usar bastidor como único retorno.
- [Dexter montaje de soportes](https://www.dextergroup.com/user_area/content_media/raw/2020-03_059-203-00_HangerandAPInstructionSheet.pdf): Reforzar transversalmente y revisar soldaduras de soportes. El cordón1/4 in del manual no se traslada a este RHS sin cálculo de unión.
- [CM/AL-KO catálogo2026, página11](https://cmtrailer.co.nz/sites/default/files/CM-2026%20Catalogue.pdf): Cabezal614010PL, bola50 mm, clase3500 kg, freno de mano; patrón184×54 mm y placa10 mm. Modelo exterior simplificado; verificar carga vertical admisible e instrucciones originales.
- [Goodyear Endurance, ficha y cargas](https://www.goodyearrvtires.com/pdfs/goodyear_rv_brochure.pdf): ST205/75R15 107N D: diámetro27.1 in, ancho8 in, llanta5.5 in de medición, capacidad2150 lb a65 psi de ficha. La presión de operación debe fijarse por carga medida y ficha actual.
- [Tubos Argentinos, certificaciones](https://tubosarg.com.ar/certificaciones): Referencia comercial IRAM-IAS U500-2592; exigir certificado de lote y fy>=235 MPa adoptado. No se consultó texto íntegro IRAM.
- [ANSV53/2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/322541/20250314?anexos=1): El procedimiento O1 no autoriza este O2. Régimen y homologación para unidad nueva/serie deben confirmarse.
- [Monroe Mounting & Length Chart2021](https://www.monroeheavyduty.com/downloads/catalog/2021-monroe-mounting-length-chart-hd-commercial.pdf): 555001:montajesS4/S4,comprimido7.875 in,extendido11.875 in,carrera4 in. Conversión200.025/301.625/101.6 mm. La curva deamortiguación y ajuste a esta suspensión requieren aprobación delproveedor.

## Archivos

- `cr200-4400x2000.FCStd`: CAD nativo generado por Nav IA.
- `cr200-nav-ia.json`: caso importable con recetas, parámetros y memoria por elemento.
- `cr200-revision-nav-ia.json`: revisión exportada con procedencia.
- `cr200-fichas-ingenieria.html`:302 fichas consultables con búsqueda y filtro por conjunto.
- `cr200-vista-general.png` y `cr200-suspension-detalle.png`: vistas revisadas.
- `cr200-proyecciones.svg`: proyecciones preliminares, sin cotas/tolerancias de fabricación.
- `cr200-chequeos.json`: resultados algebraicos de anteproyecto y carrera de amortiguadores.

