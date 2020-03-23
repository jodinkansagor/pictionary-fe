export const getCard = () => {
  return fetch('http://localhost:7891/api/v1/card')
    .then(res => res.json());
};
