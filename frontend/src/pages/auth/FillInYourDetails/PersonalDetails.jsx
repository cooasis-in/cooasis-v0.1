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
            <div className="col-span-3">
              <div className="bg-[#FFFFFFC2] border-[1px] border-[#014F5921] rounded-[40px] px-6 py-4 xxl:p-6">
                <div>
                  <img src="images/ManAvatar.svg" alt="" className="rounded-full mx-auto max-w-[40%] xxl:max-w-[100%]" />
                  <p className="f-HelveticaNeueLight text-[14px] xxl:text-[16px] text-[#014F59] leading-[19.38px] text-center bg-[#FFFFFF80] max-w-[136px] mt-2 mx-auto py-2 px-4 rounded-full">Change Avatar</p>
                </div>
                <div className="mt-6 xxl:mt-10">
                  <ul>
                    <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
                      <span><img src="images/icon-1.svg" alt="" className="mr-3 w-[24px] h-[24px]" /></span>
                      Personal Details
                      <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
                    </li>

                    <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
                      <span><img src="images/icon-2.svg" alt="" className="mr-3" /></span>
                      Professional Details
                      <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
                    </li>

                    <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
                      <span><img src="images/icon-3.svg" alt="" className="mr-3" /></span>
                      Expertise
                      <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
                    </li>

                    <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
                      <span><img src="images/icon-4.svg" alt="" className="mr-3" /></span>
                      Availability
                      <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
                    </li>

                    <li className="f-HelveticaNeueLight relative mt-3 xxl:mt-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
                      <span><img src="images/icon-5.svg" alt="" className="mr-3" /></span>
                      Portfolio
                      <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-7">

              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid grid-cols-2 max-w-[700px] gap-7">
                      <div>
                        <label htmlFor="name" className="input-form ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Name</label>
                        <Field type="text" id="name" name="name" className="input-form font-extralight mt-2 text-[15px] xxl:text-[17px] text-[#000000] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="Eg. Jeff Bezos" />
                        <ErrorMessage name="name" component="div" />
                      </div>

                      <div className="icon-adj">
                        <label htmlFor="username" className="input-form ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Username</label>
                        <Field type="text" id="username" name="username" className="input-form mt-2 text-[15px] xxl:text-[17px] text-[#000000] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="@thecreativeguy" />
                        <ErrorMessage name="username" component="div" />
                        <img src="images/username.svg" alt="" className="absolute right-6 top-[47px]" />
                        <p class="f-HelveticaNeueLight flex items-start ml-3 pt-4 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px]"><span className="mr-2"><img src="images/icon.svg" alt="" className="max-w-[14px] max-h-[13px]" /></span> Did not liked the username ? Shuffle and get another one !</p>
                      </div>
                      </div>

                     <div className="grid grid-cols-2 max-w-[700px] gap-7 mt-4">
                     <div className="icon-adj">
                        <label htmlFor="mobile" className="input-form ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Mobile</label>
                        <Field type="text" id="mobile" name="mobile" className="input-form font-extralight mt-2 text-[15px] xxl:text-[17px] text-[#000000] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="+91" />
                        <ErrorMessage name="mobile" component="div" />
                        <button className="f-HelveticaNeueRoman py-2 px-4 text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full absolute right-5 bottom-3">verify</button>
                      </div>

                      <div className="icon-adj">
                        <label htmlFor="dateOfBirth" className="input-form ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Date of Birth</label>
                        <Field type="text" id="dateOfBirth" name="dateOfBirth" className="input-form font-extralight mt-2 text-[15px] xxl:text-[17px] text-[#000000] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="dd/mm/yyyy" />
                        <ErrorMessage name="dateOfBirth" component="div" />
                        <img src="images/DateOfBirth.svg" alt="" className="absolute right-6 top-[47px]" />
                      </div>
                     </div>
                    

                    <button type="submit" disabled={isSubmitting} className="f-PowerGrotesk text-[18px] xxl:text-[24px] text-[#E1FF26] leading-[19.94px] bg-[#014F59] max-w-[287px] max-h-[83px] rounded-full py-5 xxl:py-6 px-10 mt-10 xxl:mt-14">Save and proceed</button>
                  </Form>
                )}
              </Formik>









              <form className='hidden'>
                <div className="grid grid-cols-2 max-w-[700px] gap-7">
                  <div>
                    <label for="name" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Name</label>
                    <input type="name" id="name" aria-describedby="helper-text-explanation" class="f-HelveticaNeueUltraLight mt-2 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="Eg.  Jeff Bezoz" />
                  </div>

                  <div className="icon-adj">
                    <label for="username" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Username</label>
                    <input type="username" id="username" aria-describedby="helper-text-explanation" class="f-HelveticaNeueLight mt-2 text-[15px] xxl:text-[17px] text-[#014F59] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="@thecreativeguy" />
                    <img src="images/username.svg" alt="" className="absolute right-6 top-[47px]" />
                    <p class="f-HelveticaNeueLight flex items-start ml-3 pt-4 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px]"><span className="mr-2"><img src="images/icon.svg" alt="" className="max-w-[14px] max-h-[13px]" /></span> Did not liked the username ? Shuffle and get another one !</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 max-w-[700px] gap-7 mt-2">
                  <div className="icon-adj">
                    <label for="name" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Mobile</label>
                    <input type="name" id="name" aria-describedby="helper-text-explanation" class="f-HelveticaNeueUltraLight mt-2 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="+91" />
                    <button className="f-HelveticaNeueRoman py-2 px-4 text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full absolute right-5 bottom-4">verify</button>
                  </div>

                  <div className="icon-adj">
                    <label for="username" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Date of Birth</label>
                    <input type="username" id="username" aria-describedby="helper-text-explanation" class="f-HelveticaNeueUltraLight mt-2 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="dd/mm/yyyy" />
                    <img src="images/DateOfBirth.svg" alt="" className="absolute right-6 top-[47px]" />
                  </div>
                </div>
                <button className="f-PowerGrotesk text-[18px] xxl:text-[24px] text-[#E1FF26] leading-[19.94px] bg-[#014F59] max-w-[287px] max-h-[83px] rounded-full py-5 xxl:py-6 px-10 mt-10 xxl:mt-14">Save and proceed</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FillInYourDetails
