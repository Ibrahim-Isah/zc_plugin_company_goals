/* eslint-disable import/prefer-default-export */

async function getMissions() {
  const response = await fetch('http://127.0.0.1:4000/api/v1/mission/1')
    .then((res) => res.json())
    .then((data) => console.log(data.data));

  return response;
}

export default getMissions;
