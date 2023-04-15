// util para pasar un color y cambiar la opacidad
// 1. pasar la opacidad, al hexadecimal, hay que redondear, la opacidad (que es de cero a 1), x el numero de colores que hay en rgb
// 2. luego se convierte el valor numero a string, usando radix, si indicamos 16, lo pasa a hexadecimal
// 3. al color que teniamos le a;adimos, concatenamos el valor de la opacidad

export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
