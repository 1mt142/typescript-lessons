export const addID = (givenValue) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, givenValue), { id });
};
