/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Luca Pinto
 * @version 0.1
 * @since   23.08.2022
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code

  const celsius = Number(prompt('Temperature en celsius :'));
  let farehneit = celsius * 9 / 5 + 32;
  alert(`${celsius}°C = ${farehneit}°F`);
}()); // Main IIFE

