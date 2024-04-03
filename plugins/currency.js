// plugins/currency.js
export default (context, inject) => {
 inject('formatCurrency', (value) => {
   const formatter = new Intl.NumberFormat('th-TH', {
     style: 'currency',
     currency: 'THB'
   });
   return formatter.format(value);
 });
};
