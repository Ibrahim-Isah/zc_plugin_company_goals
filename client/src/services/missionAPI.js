/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserToken() {
  return axios
    .post('https://api.zuri.chat/auth/login', {
      email: 'creator@goals.com',
      password: 'Password123##',
    })
    .then((res) => res.data.data.user.token)
    .catch((error) => console.log(error));
}

export async function setNewMission() {
  const token = await getUserToken();
  const mission = {'mission' : 'I fucking dont know what is happening'}
  const headers = {
    'Authorization' : `Bearer ${token}`
  }


  return axios
    .put('https://goals.zuri.chat/api/v1/mission/update/61433d7ad028bc6a92233bb', mission, { headers })
    .then((response) => response)
    .catch((error) => console.log(error));
}
