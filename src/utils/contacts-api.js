import axios from 'axios';
 //import contacts from '../../db.json';

//axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'http://localhost:3000/react-hw-07-phonebook/contacts';

export function fetchContacts() {
  return axios.get('/contacts');
}

export function addContact(contact) {
  return axios.post('/contacts', contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}