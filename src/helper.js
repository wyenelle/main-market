export const calculate_total_cart_items = (items_obj) => {
    return Object.values(items_obj).reduce((acc,val) => acc + val, 0)
  }