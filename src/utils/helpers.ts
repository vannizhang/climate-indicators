/**
 * Converts a number to a string representation with commas for better readability.
 * @param {number} x - The number to be formatted.
 * @returns {string} The formatted string representation of the number with commas.
 */
export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  