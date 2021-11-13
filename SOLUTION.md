- Antes de empezar a codear, hice un bosquejo a mano del diseño que debo implementar, el layout que haría(diseño que se repetiria en cada vista),luego busqué un template que fuera similar a este y que este hecho en MaterialUI.

- Con el diseño de componentes , haré que dentro de cada componente se encuentre un archivo ,el cual tenga los estilos para separar cada concepto(css de js).

- La carpeta commons, en el archivo api.js cree una constante donde guarda la url de la api, para no repetir código

- Observando la parte de la lógica,consumiré primero el endpoint PropertyTypes, el cual tiene los items de apartment,studio,etc. Luego consumire solo apartment , sus items se veran en cards en el componente Main como es un componente independiente ,compartiré la información por props por medio de la desestructuración.

- En el componente search:

* En el primer Input (What will you do?) obtendré el endpoint transactions,inicializaré su estado en 1 para obtener su id, pero mostraré en pantalla el slug que este contiene
* En el segundo Input(Type house) utilizaré metodos de array anidados, usaré un useEffect ya que este tendra un efecto secundario en transactionTypeField, teniendo esta como dependencia, se obtendrá un nuevo aray llamado activeProperties,utilizando el metodo find , para que cuando encuentre lo que queremos se detenga,dentro de transactions hay una propiedad llamada propertyTypes, este es un array que solo nos muestra numeros, pero lo que se espera son strings(slugs) , por ende utilizamos nuevamente find para que recorra , encuentre lo que buscamos dentro de properties( que es donde se encuentra cada slug que quiero) y me muestre un nuevo array, dependiendo si es buy o rent. Otra opcion podria haber sido filter, pero este me recorreria todo el array, en cambio find, no se espera a que recorra todo el array ,si no que al momento de encuentrar el elemento,se detiene,y hace lo que le asigno.
* En el tercer input usé un componente de materialUI Autocomplete, el cual me permitirá ,que al momento de escribir alguna palabra o letra me muestre el valor que busco.

- En el botón Search usaré useRouter (es un hook, que me ayuda como enrutador de páginas en Nextjs), agrego la url de una manera dinámica con el metodo push de useRouter .

- Con el botón ver todas las propiedades, usaría un estado que se inicialice en false, en la parte de renderizado escribiria una condicional , y al momento del usuario dar click , pase a true y muestre todas los elementos que hay en Main(las cards y la navegacion dinámica)

- Las limitaciones que tuve fue al momento de implementar los métodos de array,con el segundo input, no se debia mostrar en pantalla numeros, si no los slugs, sin embargo, busqué en google y pude llegar a la conclusión de usar los métodos de array anidados que ayudaran a crear un nuevo array para lo que necesitaba.

- Si hubiera tenido más tiempo , le daria más estética, lo haría responsive(implementando los breakpoints de materialUI) y más dinamico,uniria el tab apartments con las cards, el cual en materialUi hay un componente Tab donde es posible hacer ello ,mostrar los demás items(studio,cabin,etc) y unirlos a las cards(navegación dinamica del main),agregaría el botón ver todas las propiedades e implmentaria la lógica que escribí para su funcionalidad.

- Con el tiempo, me tomó dos horas empezar a buscar soluciones,hacer bosquejos , diseños acordes, la otra hora empecé a diseñar , llevandome una hora el banner y el header. Las demás horas que utilicé fueron 8 horas En total fueron 11 horas.
