import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrorMessage, Form, FormField } from './ContactForm.styled';

// const ContactSchema = Yup.object().shape({
//   name: Yup.string().required('Required field!'),
 
// });

export const ContactForm = ({ onSave }) => {
    return (
      <Formik
        initialValues={{
            contacts: [],
            name: '',
        }}
        onSubmit={(values, actions) => {
          onSave({ ...values, id: nanoid() });
          actions.resetForm();
        }}
       >
        
        <Form>
          <FormField>
            Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
          </FormField>
          
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  };