import { mensajeAlerta, saludo } from './modulos/mensajeAlerta';
import Persona from './modulos/clasePersona';

//mensajeAlerta("Hello World");
//saludo();
const ric = new Persona('Ricardo', 33);
ric.mostrarInfo();