import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { getContactsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhoneBook />
      <Filter />
      <ContactList />
      <div>{isLoading && 'Request in progress...'}</div>
    </>
  );
}
