import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { motion, AnimatePresence } from 'framer-motion';
//import { variants } from '../../utils/motionVar';
import ErrorView from '../ErrorView';
import { List, Item, Button } from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      {contacts.length > 0 && !error && (
        <List>
          <AnimatePresence>
            {visibleContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <p>
                  {name}: {number}
                </p>
                <Button
                  type="button"
                  onClick={() => dispatch(contactsOperations.deleteContact(id))}
                >
                  Delete
                </Button>
              </Item>
            ))}
          </AnimatePresence>
        </List>
      )}
      {!contacts.length && !error && !isLoading && (
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            //variants={variants}
          >
            Your phonebook is empty. Please add contact.
          </motion.p>
        </AnimatePresence>
      )}

      {error && <ErrorView message={error.message} />}
    </>
  );
}

export default ContactList;
