import React from 'react';
import './FillInYourDetails.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const parseDateString = (value, originalValue) => {
  const parsedDate = originalValue.split('/').reverse().join('-');
  return new Date(parsedDate);
};

const FillInYourDetails = () => {
  const initialValues = {
    name: '',
    username: '',
    mobile: '',
    dateOfBirth: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    mobile: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Required'),
    dateOfBirth: Yup.date()
      .transform(parseDateString)
      .typeError('Invalid date format. Use dd/mm/yyyy')
      .required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setSubmitting(false);
  };

  return (
    <section className="lg-bg-color fillinyourdetails min-h-[100vh]">
      <div className="container mx-auto relative">
        {/* <div className="flex py-6">
          <img src="src/assets/cooasis.svg" alt="" />
          <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
        </div>
        <div>
          <img src="images/ManAvatar.svg" alt="" className="absolute top-0 right-0 py-6 max-w-[42px] max-h-[42px] rounded-full" />
        </div> */}
        <div className="bg-[#FFFFFF80] border-[1px] border-[#014F5917] rounded-[30px] py-4 px-6 xxl:p-6">
          <div>
            <h2 className="f-PowerGrotesk text-[40px] xxl:text-[53px] text-[#014F59] leading-[64.18px]">Fill in your details</h2>
            <p className="f-HelveticaNeueLight max-w-[700px] xxl:max-w-[820px] text-[18px] xxl:text-[24px] text-[#014F59B0] leading-[25px] xxl:leading-[35.18px] mt-1">Provide us your personal details so that our AI can assign you work based on your expertise and interests</p>
          </div>
          <div className="grid grid-cols-10 gap-12 mt-6">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FillInYourDetails
