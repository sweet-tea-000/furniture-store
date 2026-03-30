/**
 * Загружает корзину из localStorage
 * @returns {Array} Массив товаров в корзине
 */
export const loadCartFromStorage = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
      return [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  };
  
  /**
   * Сохраняет корзину в localStorage
   * @param {Array} cart - Массив товаров в корзине
   */
  export const saveCartToStorage = (cart) => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  };
  
  /**
   * Очищает корзину в localStorage
   */
  export const clearCartStorage = () => {
    try {
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error);
    }
  };