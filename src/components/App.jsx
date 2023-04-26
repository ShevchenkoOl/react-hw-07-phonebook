
import { useDispatch } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import { Container, Title } from "./ContactForm/ContactForm.styled";
import  ContactList  from "./ContactList/ContactList";
import { Filter } from "./Fiter/Filter";
import { GlobalStyle } from "./GlobalStyle";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contacts-operation";



export const App = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (

      <Container>
            <ContactForm title="Phonebook"/>
         <Title>Contacts
            <Filter />
            <ContactList title="Contacts" />
          </Title>
          <GlobalStyle/>
      </Container>        
    );
}