import casthacker from "../assets/projects/casthacker.png";
import expenseControl from "../assets/projects/expense-control.png";
import calorieTracker from "../assets/projects/calorie-tracker.png";
import tipCalculator from "../assets/projects/tip-calculator.png";
import guitarla from "../assets/projects/guitarla.png";
import salonApp from "../assets/projects/salon-app.png";
import type { Contact, Experience, Project } from "../types";

export const HERO_CONTENT: string = `Soy un programador con 1.3 años de experiencia en el área web. Mi objetivo es aprovechar mi experiencia y conocimientos para crear soluciones innovadoras que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "1 Diciembre 2020 – 1 Marzo 2022",
    role: "Programador Web",
    company: "Sitius",
    description: "Conectar los sitios web con el CMS de la empresa para que el contenido sea dinámico, así como también replicar y adecuar tiendas virtuales. Construir secciones de sitios web usando CSS o Bootstrap basándome en un diseño predefinido. Crear, corregir y actualizar funcionalidades de sistemas hechos a la medida.",
    technologies: ["PHP", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Casthacker",
    image: casthacker,
    description:
      "Aplicación que te permite ver y escuchar distintos podcasts de programación",
    technologies: ["Laravel 11", "React", "TypeScript", "Bootstrap 5", "MySQL"],
    url: "https://nobtoqa.nyc.dom.my.id/podcasts"
  },
  {
    title: "Control de Gastos",
    image: expenseControl,
    description:
      "Aplicación que te ayuda a administrar gastos. Tiene las siguientes funcionalidades: definir un presupuesto; agregar, editar y eliminar un gasto; visualización de % de presupuesto gastado mediante una gráfica; filtrar gastos por categoría; resetear app, y almacenamiento de datos en localStorage.",
    technologies: ["React", "useReducer", "Context API", "TypeScript", "Tailwind CSS", 'Headless UI'],
    url: "https://maeb-control-de-gastos.netlify.app"
  },
  {
    title: "Rastreador de Calorías",
    image: calorieTracker,
    description:
      "Una aplicación que te da un resumen de las calorías consumidas, quemadas y netas. Con funciones como: agregar, editar y eliminar comida o actividad; reiniciar aplicación, y almacenamiento de datos en localStorage.",
    technologies: ["React", "useReducer", "Context API", "TypeScript", "Tailwind CSS"],
    url: "https://maeb-rastreador-calorias.netlify.app"
  },
  {
    title: "Calculadora de Propinas",
    image: tipCalculator,
    description:
      "Una aplicación que calcula el subtotal, propina y total en base al consumo y % de propina del cliente.",
    technologies: ["React", "useReducer", "TypeScript", "Tailwind CSS"],
    url: "https://maeb-calculadora-propinas.netlify.app"
  },
  {
    title: "Guitarla",
    image: guitarla,
    description:
      "Carrito de compras, con funciones como: agregar y eliminar productos; sumar y restar cantidad; vaciar el carrito, y almacenamiento de datos en localStorage.",
    technologies: ["React", "useReducer", "TypeScript", "Bootstrap 5"],
    url: "https://maeb-guitarla.netlify.app"
  },
  {
    title: "App Salón",
    image: salonApp,
    description:
      "Aplicación de reservación de citas de una barbería, con funcionalidades como crear una cuenta, confirmar cuenta, iniciar sesión, recuperar contraseña, una pequeña API y un panel de administración.",
    technologies: ["PHP", "JavaScript", "CSS", "MySQL"],
    url: "https://maeb.alwaysdata.net/"
  },
];

export const CONTACT: Contact = {
  email: "mario.ezqueda1@gmail.com",
  linkedin: "https://www.linkedin.com/in/mario-ezqueda-525563240"
};
