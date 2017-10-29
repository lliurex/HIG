# Principios de diseño
En esta seccion se pasaran a explicar aquellos principios que tienen que seguir todas las aplicaciones. Son conceptos generales sin centrarse en ningun campo en concreto, pero que daran un mejor comportamiento en la aplicacion.

#### Mantener las aplicaciones lo mas sencillas posibles para el usuario.
No se trata de ofrecer demostrar que nuestra aplicacion es muy potente porque ofrece muchas funciones. Hay que pensar en los distintos perfiles que tendran nuestros usuarios y en base a eso ofrecer las opciones y los controles de forma que no abrumen al usuario mas de lo necesario. Como consejo puedes preguntarte si los controles que vas a añadir son realmente necesarios para que el usuario llege a utilizar tu aplicacion.

Se debe procurar mostrar los controles solo en el momento en que sea necesario para la aplicacion, de esta forma la aplicacion tendra menos componentes y para el usuario le sera mas facil entender la aplicacion.
#### Potencia para quien la necesite
Una vez ya tenemos claro que la aplicación ha mantenerse sencilla en apariencia se puede plantear el ofrecer funcionalidades para Power Users que puedan explotar mejor la aplicacion. Para ello se pueden utilizar distintos metodos : Botones avanzados, cambio de perfil y de apariencia para usuarios avanzados, menus llenos de opciones...
####Uso en proyectores y segundos monitores
Muchos de los usuarios de LliureX lo usan con ordenadores conectados a proyectores. En el momento de diseñar esta aplicacion hay que tener en cuenta lo que implica : se forzara a la menor resolucion disponible a no ser que el usuario lo haya cambiado, se puede usar para tener dos ventanas la aplicacion de forma que una se usa para mostrar en el proyector y la otra se usa desde el monitor principal. No son casos tan comunes pero tambien pueden haber usuarios con dos monitores conectados y beneficiarse de esas ventajas / inconvenientes. **Importante** Se debe de tener en cuenta tambien cuando se diseña la aplicacion que el usuario mayormente tendra solo un monitor y que este tendra una resolucion de 1024x768 en la mayoria de los casos. De esta forma debemos recordar que aunque tengamos equipos mas potentes y con mayor resolucion no estamos diseñando aplicaciones para nuestros ordenadores, sino para otros mucho mas modestos.
#### Uso e implementacion de tecnologias comunes
LliureX ya dispone de muchas herramientas y librerias pensadas para el desarrollo de aplicaciones. Prioritariamente se debe de hacer uso de estas, ya que se fomenta la deteccion de errores que no se han producido/contemplado aun en otras interfaces, se evita el caer en casos que no se hayan podido pensar, se aumenta la funcionalidad de dicha libreria con la mejora correspondiente en otras interfaces y se ahorra tiempo en el desarrollo. Para ello se debe utilizar/crear el framework de Lliurex que debe ofrecer:

 * Un punto de partida para desarrollo de aplicaciones
 * Un conjunto de librerias con funciones mas usadas o que tengan cierta dificultad de desarrollo ( cliente de N4D, consulta de informacion del sistema, traduccion, ...)

#### Ahorra tiempo al usuario
Las aplicaciones deben de trabajar para el usuario, ofreciendole a este todo tipo de facilidades para que el pueda realizar su tarea lo mas rapido posible:
 
 * Rellena campos con valores ( si tiene que poner el nombre del usuario trata de leerlo del sistema; valores predefinidos que cuando se pincha en los componentes se borra y deja espacio para que el usuario pueda indicar el suyo)
 * Implementa atajos de teclados o acciones de confirmacion al presionar Enter ( Si un usuario presiona enter en un campo de texto es porque ya esta conforme con lo que esta visualizando y quiere que se realize la accion) 

#### Jerarquiza la importancia de la interfaz
La mayoria de usuarios visualizan una aplicacion como si fuera un libro. De esa forma siempre empiezan de arriba a la izquierda y van bajando con la mirada hasta llegar hasta abajo a la derecha. Esto nos da ciertas pistas de donde deberemos de posicionar los elementos mas importantes de la aplicacion. De esta forma los elementos mas importantes  o que queremos que se les preste mas atencion siempre estaran en las posiciones mas altas, mientras que aquellos elementos que no son tan importantes estan en las posiciones mas bajas.

#### Prevencion de errores
Ninguna aplicacion esta exenta de errores, pero muchas veces los usuarios no acaban de entender como funciona exactamente nuestra aplicacion y pueden producir ciertos errores. Por esta razon se debe de realizar de forma proactiva correcciones / validaciones de errores antes de que puedan pasar a mayores. Por poner un ejemplo: si tenemos un campo que sea un telefono no deberiamos permitir que se puedan escribir letras, o al menos cuando el elemento pierda el foco se deberia marcar como incorrecto. Otro ejemplo seria si se esta creando un usuario, detectar si ese nombre de usuario ya existe antes de que se accione el boton de crear usuario, de esta forma el usuario no tiene que rellenar todos los campos pensando en un valor que ya de entrada es incorrecto.

#### El espectaculo ha de continuar
La aplicacion no deberia interrumpir el funcionamiento de esta de forma innecesaria. Si se ha de informar al usuario, este aviso no deberia de interrumpir el flujo de la aplicacion, a no ser que sea extrictamente necesario. Si lo que se desea es notificar al usuario se debe de usar una barra de notificaciones o las notificaciones del sistema, algo que se pueda consultar dichas notificaciones, pero que no interrumpan el funcionamiento de este.

#### Ante todo, un poco de humor
Un error nunca es agradable para nadie, pero en esos casos es importante relajar el ambiente. Por ello se puede utilizar un poco de humor para relajar el ambiente y hacer menos critico el problema.

Tambien es importante pensar que el usuario cuando llega a nuestra aplicacion se sentira solo ante el peligro, por eso es importante hacer que el usuario se sienta mas acogido por la propia aplicacion. Por esta razon en el caso de aplicaciones que puedan ser mas complejas puede ayudar unos mensajes de bienvenida que le puedan ayudar a utilizar la aplicacion tal como si estubieramos con el usuario. 

# Definicion de aplicacion
Antes de empezar, hemos de pensar que estamos realizando una aplicación ( tanto grafica como por consola ) para solucionar un problema existente o para mejorar la solucion actual. Dicho esto, las aplicaciones que se realicen tiene que mejorar de una forma u otra la situacion actual de una forma objetiva, por esto es bueno que se comparta la idea y/o el diseño con otras personas para que puedan darte su punto de vista y poder ver aquellos problemas que inicialmente no has podido ver, detectar problemas de comprension de la aplicacion o incluso ver si lo que se esta desarrollando no le es de utilidad para nadie.

#### Captacion de requisitos o esbozo inicial
Esta es la tarea mas importante que se ha de realizar ( al menos a corto plazo ). Todos los implicados en el desarrollo del producto deben tener claro cuales son los objetivos que se quieren conseguir con el desarrollo de la aplicacion. Esto no quiere decir para nada que la aplicacion no pueda mutar y transformarse en otra cosa, pero es importante detectar el objetivo comun a solucionar, el resultado que se espera y los medios que se usaran. *En este punto se deberian de obtener los objetivos principales y realizar algun esbozo tanto a nivel grafico como a nivel logico de como se comportara la aplicacion*.

Pero como se ha citado antes, esto no sera un guion sobre el cual no se podra modificar el desarrollo, ya que pueden surgir nuevas necesidades, o comprobar que el desarrollo que se esta siguiendo no terminara bien ( de nada vale seguir desarrollando una apliacion que vemos que nadie va a usar). Esto no quiere decir que se haya desarrollado mal por mal entendimiento del problema, sino porque ha cambiado la situacion.

#### Relacion con otras aplicaciones para su funcionamiento
No todas las aplicaciones se comportan de forma totalmente autonoma. Muchas de estas aplicaciones estan relacionadas entre ellas: unas pueden usar los recursos que otra a generado; otras pueden estar generando resultados comunes y deberian de acordar un formato comun para mejorar el entendimiento y la compatibilidad; Otras pueden ser submodulos de otras aplicaciones.

El objetivo de este punto es observar el ecosistema que tiene LliureX. Esto limitara muchas veces las tecnologias que se van a utilizar, como se van a ofrecer los resultados o incluso la apariencia que deberia tener la propia aplicacion.

Por ejemplo si el Llum ha de realizar una exportacion de usuarios, tal vez podria ser compatible con el formato que usa el PMB para importar usuarios. O si vamos a realizar un script que se encarge de crear sites en apache se puede realizar por N4D para que cualquier otra aplicacion pueda beneficiarse de esta funcion y aumentar las facilidades que ofrezca la aplicacion.

#### Requisitos minimos a cumplir
Aqui se cogeria el resultado que se haya obtenido con la captacion de requisitos y se le daria mas forma para que las aplicaciones que se realicen tengan los elementos basicos de una forma comun.

##### Aplicaciones de linea de comandos
 * Comando help en el cual se explique todo lo que ofrece. 
 * Bash-completion para que sea mas facil de utilizar

##### Aplicaciones graficas
 * Deben de disponer de un About, desde el cual el usuario pueda ver la version de la aplicacion, datos de contacto para notificar errores, arquitectura donde se esta ejecutando, licencia que tiene la aplicacion, 
 * Disponer de algun tipo de ayuda para conocer el flujo de la aplicacion o los elementos que la forman. Esto puede ser o bien enlaces a una wiki, o una ayuda offline en formato redactado.

#### Nombrando nuestra aplicacion
El nombre de la aplicacion en LliureX siempre ha sido un momento de disputas. Todo el mundo quiere que la aplicacion se llame como el quiere, pero lo que debemos recordar que es solo un nombre. Obviamente no debemos llamar nuestra aplicacion de una forma confusa ( usar nombres que todo el mundo reconoce para realizar una aplicacion que no tiene ninguna funcionalidad relacionada con esta ) o aplicaciones que son impronunciables. 

Algunos recomiendan a la hora de establecer nombres para las aplicaciones crear un patron para organizar tipos de aplicaciones . Por ejemplo hace tiempo las aplicaciones de configuracion empezaban con llxcfg mientras que el resto de  aplicaciones empezaban con lliurex.

Otras recomendaciones son crear nombres totalmente agnosticos del entorno. De esta forma el proyecto no esta ligado a ninguna estructura ni organizacion y puede crecer sin ataduras.

Algo que siempre se suele buscar es usar nombres relacionados con las tareas que van a desempeñar, que sean faciles de entender y descriptivos. No deberian ser nombres demasiado largos para que se pueda mostrar de forma correcta en los menus.

Estos son algunos ejemplos de aplicaciones
 * *MrPDI* : Aplicacion relacionada con las Pizarras Digitales Interactivas
 * *Zero-server-wizard* :  Wizard relacionado con el servidor

# Arquitectura de aplicacion
 * Disponer siempre que sea posible de una version en CLI para facilitar la administracion remota o scriptable.
 * Ventanas de carga
 * Pantallas de identificacion y de seguridad.
     * Pantalla inicial
     * Uso de aplicacion sin necesidad de identificacion y peticion cuando se le requiere
 * Ventana "Acerca de"
 * Configuraciones
 * Onboarding
 * Ventanas modales ( Opcion de no volver a mostrar, Icono de identificacion )
     * Alerta 
 * Restauracion de estado de la aplicacion en el momento del cierre.
 * Disposiciones :
     * Columnas 
     * Paneles superpuestos con overlay translucido
     * Vistas partidas https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/split-views/
     * Vistas pocos componentes https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/image-views/


# Dopamina
* Animaciones
* Transparencias
* Autosalvado


# Patrones de Controles:
 * Menu contextual 
 * Menu de barra de aplicaciones
 * Sidebars
 * Barras  de aplicacion
 * Barras de notificacion
 * Paneles de configuración
 * Intercambiadores de seccion ( tabs, buttons switch, slides )
 * Wizards
 * Buscadores
 * Componentes de listados (definir modo de seleccion, botones para la gestion de elementos - ordenacion, creacion, eliminacion -)
    * listados simples ( tablas )
    * listados visuales ( listado de imagenes, de iconos de carpetas )
 * Ventanas de dialogos
    * Yes / No 
    * Informacion 
    * Seleccion de ficheros / Carpetas 
    * Guardado de ficheros / Carpetas 
 * Ventanas de Descargas
 * Ayuda para los controles o para la aplicacion
    * Boton de ayuda
     
 * Controles de gestion de tiempo.
 * Drag and Drop
    * Soporte
    * añadir informacion durante el drag and drop

# Componentes de creacion de interfaces


    Definir su finalidad, su uso,
    Deshabilitar componentes 
    Barras de scroll

    Label
    Button
        - Iconos a usar
        - Tamaños
        - Estilos para botones destructivos o constructivos
    Boton de Ayuda
    Toggle Button
    Switches
    Combobox
    Tooltip
    Radiobuttons
    Checkboxes
    Sliders
    Text input ( una sola linea )
    TextArea ( multiples lineas )
    pull-down buttons / 
    Selectores
        - Color
        - Fecha
        - Incrementos
        - Estados ( vista en iconos , listas, filtros a aplicar )
    Componentes de progreso:
        - Barras de progreso
        - Circulos de progreso
        - Barra de pasos realizados / Pendientes
    Barras de importancia
    Barras de valoracion



Distribucion visual en la aplicacion
    - Definir puntos de alineacion donde los elemengos tocaran estos puntos y que estas guias sean las menores posibles.
    - Uso de grupos para organizar controles e informacion relacionadas. 
        - Elementos con marco o sin marco
        - Uso de tabulaciones para definir jerarquias entre elementos

    - Separacion minima entre componentes relacionados de 6 px e incrementar cuando tengan menos relacion
    - Distancia entre etiquetas y entradas de 12 px horizontales
    - Distancia entre grupos de componentes de X pixeles
    - Distancia entre componentes / grupos con la ventana de X pixeles
    - Sangrado de los elementos de X pixeles
    - Uso / prohibicion de marcos para delimitar grupos de componentes.
    - Justificacion de etiquetas (Preferible justificacion a derecha siempre que no exista sangrado de elementos)
    - Jerarquias visuales . Elementos mas fuertes arriba a la izquierda. Elementos menos importantes abajo derecha.
    - Preferible el uso de barra de menus frente a otros elementos para acciones para mejorar compatibilidad con otros sistemas (Gnome / KDE / Xfce )

    - Definir distintos modelos de interfaces graficas

Textos
    - Textos cortos y descriptivos ( aumento hasta del 30 % en otros idiomas )
    - Tono neutral ( No usar usted ni tu). Alternativamente usar su.
    - Uso de mayusculas:
    - Uso de tooltips
    - Textos largos
    - Usar ... Si la accion va a requerir de una confirmacion del usuario
Tipografia
    - Tipografia determinada
    - Tamaños predefinidos o escalas entre los tamaños
    - Uso de colores en las tipografias
    - Minimizar la cantidad de variantes
    - Visualizacion de texto sobre imagenes
    - Evitar italic
    - Uso de bold 
iconos, baners, logos
    - formato de los iconos ( Definir estructura, colores, margenes, formas, sombras, tamaños, orientacion, perspectiva )
    - formato de los banners ( Definir estructura, colores, margenes, formas, sombras, tamaños, orientacion, perspectiva )
    - Iconos en botones junto con texto o solos
    - Usar solo iconos en casos que se conozcan como convenios
    - Uso de iconos dependendiendo del contexto (boton de parar junto otros botones multimedia; Botones de flechas al lado de una 
        lista para conseguir ordenacion ...)
    - Uso de iconos de Stock sobre iconos personalizados
    - Iconos monocromo vs Iconos a todo color
    - Esfuerzo para ilustraciones en svg( iconos, banners, logos, ...)

paleta de colores
    - Ofrecer paletas de colores teniendo en cuenta cuales son los tonos y ofrecer alternativas para el uso en distintos rangos de color.


Soporte de pantallas
    - Soporte a HiDpi
    - Resoluciones minimas
    - Ventanas redimensionables
    - Aplicaciones pensadas para ocupar la mitad de la pantalla ( Con resoluciones bajas no tiene ningun sentido)


Accesibilidad
    - Soporte de las funciones solo desde el teclado ( Al pulsar intro debe de entrar en pantallas de login)
    - Navegacion por los componentes de una interfaz mediante tab con una ordenacion logica
    - Acceso a botones mediante la tecla Alt + X donde X es una letra subrayada en el componente
    - Ctrl + C , Ctrl + V , Ctrl + Z, Ctrl + P
    - Los atajos que se pueden usar fácilmente con una sola mano son preferibles para las operaciones habituales. 
    - Lista de atajos a tener en cuenta:
        https://developer.gnome.org/hig/stable/keyboard-input.html.es
