import { Input, Label } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { AnimatePresence } from 'framer-motion';
//import { variants } from '../../utils/motionVar';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      {contacts.length > 0 && !error && (
        <AnimatePresence>
          <Label>
            Find contacts by name
            <Input
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              //variants={variants}
              type="text"
              value={filter}
              placeholder="Search ..."
              onChange={e =>
                dispatch(contactsActions.filterContact(e.target.value))
              }
            />
          </Label>
        </AnimatePresence>
      )}
    </>
  );
}
