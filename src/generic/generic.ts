export const addID =<T extends {name:string,age:number}> (givenValue:T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...givenValue, id };
};
