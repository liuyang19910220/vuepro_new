export const currency=(input,currency='$',digit=2)=>{
  return currency+Number(input).toFixed(digit)
};
