import axios from "axios";

//axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'https://64459dec0431e885f0014375.mockapi.io/react-hw-07-phonebook';

export function fetchContacts() {
  return axios.get('/contacts');
}

export function addContact(contact) {
  return axios.post('/contacts', contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}