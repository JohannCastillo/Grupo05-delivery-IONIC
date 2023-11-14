import { Plato } from '../models/platos';
import { Menu } from '../models/menu';
import { Horario } from '../models/horario';
import { Detalle } from '../models/detalle';
import { Producto } from '../models/producto';
const newDate = new Date();
const today = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
// EXPORT JSON OF PLATOS
export const platos: Plato[] = [
    {
        idplatos: 8,
        nombre: "CHICHARON DE CERDO",
        tipo: "Segundos",
        grupoproducto: "PLATO ESPECIAL"
      },
      {
        idplatos: 9,
        nombre: "ENSALDA DE ESPARRAGOS",
        tipo: "Entrada",
        grupoproducto: "ALMUERZO VEGETARIANO"
      },
      {
        idplatos: 10,
        nombre: "ENSALDA DE SARDINA",
        tipo: "Entrada",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 11,
        nombre: "SOPA DE VERDURAS",
        tipo: "Sopas",
        grupoproducto: "ALMUERZO VEGETARIANO"
      },
      {
        idplatos: 12,
        nombre: "SOPA ANGELICAL",
        tipo: "Sopas",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 13,
        nombre: "SOPA DE ESPARRAGOS",
        tipo: "Sopas",
        grupoproducto: "ALMUERZO VEGETARIANO"
      },
      {
        idplatos: 14,
        nombre: "SOPA DE SEMOLA CON PAPAS",
        tipo: "Sopas",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 15,
        nombre: "MILANESA DE POLLO",
        tipo: "Segundos",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 16,
        nombre: "REVUELTO",
        tipo: "Segundos",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 17,
        nombre: "CUPIS DE TRIGO",
        tipo: "Segundos",
        grupoproducto: "ALMUERZO VEGETARIANO"
      },
      {
        idplatos: 18,
        nombre: "ALBONDIGAS VEGANAS",
        tipo: "Segundos",
        grupoproducto: "ALMUERZO VEGETARIANO"
      },
      {
        idplatos: 19,
        nombre: "GELATINA",
        tipo: "Postre",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 20,
        nombre: "COMPOTA DE PINA",
        tipo: "Postre",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 21,
        nombre: "FLAN DE CHOCOLATE",
        tipo: "Postre",
        grupoproducto: "ALMUERZO TRADICIONAL"
      },
      {
        idplatos: 22,
        nombre: "FLAN DE CHOCOLATE",
        tipo: "Postre",
        grupoproducto: "ALMUERZO VEGETARIANO"
      },{
        idplatos: 24,
        nombre: "FLAN DE COCO",
        tipo: "Postre",
        grupoproducto: "ALMUERZO TRADICIONAL"
      }
]

//Export json of menu

export const menu: Menu[] = [
    {
        idprodmen: 5,
        idproducto: 1,
        idempresa: 1,
        nombremenu: "ALMUERZO FAMILIAR VIERNES",
        fotomenu: "https://restaurantebaocom.files.wordpress.com/2021/07/menu-del-dia-a2.jpg",
        fecha: today, //now
        cantidad: 29,
        precio: 20,
        estado: "AC",
        adduss: "1"
    },
    {
        idprodmen: 8,
        idproducto: 2,
        idempresa: 1,
        nombremenu: "ALMUERZO FAMILIAR VIERNES",
        fotomenu: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vegetarian-menu-poster-template-0fa79cbb6eb6f363505e7ce88bf5c61c_screen.jpg?ts=1636975696",
        fecha: today,
        cantidad: 11,
        precio: 25,
        estado: "AC",
        adduss: "1"
    },
    {
        idprodmen: 9,
        idproducto: 3,
        idempresa: 1,
        nombremenu: "CHICHARRON DE CERDO DE CABANA",
        fotomenu: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq9x9Cib3NN5DXag00SxbvicKOigNttmrCpc4yO0Qb55adW5mngMEDQfGNbuIRIeGwTI&usqp=CAU",
        fecha: today,
        cantidad: 50,
        precio: 30,
        estado: "AC",
        adduss: "1"
    }
]

// Json of Horarios
export const horario : Horario[] = [
    {
        id: 1,
        dia: "Lunes",
        deh: "07:00:00",
        hastah: "8:00:00",
        estado: "AC"
    },
    {
        id: 2,
        dia: "Martes",
        deh: "00:00:00",
        hastah: "22:00:00",
        estado: "AC"
    },
    {
        id: 3,
        dia: "Miercoles",
        deh: "07:00:00",
        hastah: "20:00:00",
        estado: "AC"
    },
    {
        id: 4,
        dia: "Jueves",
        deh: "07:00:00",
        hastah: "23:59:00",
        estado: "AC"
    },
    {
        id: 5,
        dia: "Viernes",
        deh: "00:00:00",
        hastah: "23:27:00",
        estado: "AC"
    },
    {
        id: 6,
        dia: "Sabado",
        deh: "09:00:00",
        hastah: "18:00:00",
        estado: "AC"
    },
    {
        id: 7,
        dia: "Domingo",
        deh: "07:00:00",
        hastah: "18:00:00",
        estado: "AC"
    }
]

//JSON OF MENU DETAILS<

export const detalle : Detalle[] = [
    {
        idmendet: 1,
        idprodmen: 5,
        idplato: 10
    },
    {
        idmendet: 2,
        idprodmen: 5,
        idplato: 12
    },
    {
        idmendet: 3,
        idprodmen: 5,
        idplato: 15
    },
    {
        idmendet: 4,
        idprodmen: 5,
        idplato: 19
    },
    {
        idmendet: 5,
        idprodmen: 8,
        idplato: 9
      },
      {
        idmendet: 6,
        idprodmen: 8,
        idplato: 11
      },
      {
        idmendet: 7,
        idprodmen: 8,
        idplato: 17
      },
      {
        idmendet: 8,
        idprodmen: 8,
        idplato: 18
      },
      {
        idmendet: 9,
        idprodmen: 8,
        idplato: 24
      },
      {
        idmendet: 10,
        idprodmen: 9,
        idplato: 8
      },
      {
        idmendet: 13,
        idprodmen: 5,
        idplato: 18
      }
]

// Products

export const productos: Producto[] = [
    {
        idproducto: 1,
        idempresa: 1,
        descripcionprod: 'ALMUERZO TRADICIONAL',
        usuarioadd: 1
    },{
        idproducto: 2,
        idempresa: 2,
        descripcionprod: 'ALMUERZO VEGETARIANO',
        usuarioadd: 1
    },{
        idproducto: 3,
        idempresa: 3,
        descripcionprod: 'CHICHARON DE CERDO',
        usuarioadd: 1
    }
]