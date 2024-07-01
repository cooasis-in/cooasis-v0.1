import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const parseDateString = (value, originalValue) => {
  const parsedDate = originalValue.split('/').reverse().join('-');
  return new Date(parsedDate);
};

const ProfessionalDetails = () => {
  const initialValues = {
    month: '',
  };

  const validationSchema = Yup.object({
    month: Yup.string().required('Required'),
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
                        <label htmlFor="name" className="input-form ml-2 block text-[14px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">How many years of full time experience do you have ?</label>
                        <Field type="text" id="month" name="month" className="input-form font-extralight mt-2 text-[15px] xxl:text-[17px] text-[#000000] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="in months" />
                        <ErrorMessage name="name" component="div" />
                        <p class="f-HelveticaNeueLight flex items-start ml-3 pt-4 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px]"><span className="mr-2"><img src="images/icon.svg" alt="" className="max-w-[14px] max-h-[13px]" /></span> This information can not be changed later.</p>
                      </div>
                    </div>
                    <div className='mt-5 xxl:mt-6 ml-4'>
                      <p className="f-HelveticaNeueLight text-[17px] text-[#014F59] leading-[20.59px]">What is your freelance experience ? whatever it is, we will make it work !</p>
                      <div className="flex items-center gap-3 mt-5 xx:mt-6">
                      <div className="max-w-[242px] max-h-[158px] border-[1px] border-[#014F5917] rounded-[35px] py-3 xxl:py-4 px-6 xxl:px-7">
                        <h4 className="f-PowerGrotesk text-[22px] xxl:text-[24px] text-[#014F59] leading-[29.06px]">I’m a Beginner</h4>
                        <p className="f-HelveticaNeueLight text-[14px] xxl:text-[17px] text-[#014F59] leading-[20.59px] mt-1 xxl:mt-2">I have just started doing freelance.</p>
                      </div>
                      <div className="max-w-[242px] max-h-[158px] border-[1px] border-[#014F5917] rounded-[35px] py-3 xxl:py-4 px-6 xxl:px-7">
                        <h4 className="f-PowerGrotesk text-[22px] xxl:text-[24px] text-[#014F59] leading-[29.06px]">It’s been a while</h4>
                        <p className="f-HelveticaNeueLight text-[14px] xxl:text-[17px] text-[#014F59] leading-[20.59px] mt-1 xxl:mt-2">I have been freelancing for 2 years now!</p>
                      </div>
                      <div className="max-w-[242px] max-h-[158px] border-[1px] border-[#014F5917] rounded-[35px] py-3 xxl:py-4 px-6 xxl:px-7">
                        <h4 className="f-PowerGrotesk text-[22px] xxl:text-[24px] text-[#014F59] leading-[29.06px]">I’m a pro !!</h4>
                        <p className="f-HelveticaNeueLight text-[14px] xxl:text-[17px] text-[#014F59] leading-[20.59px] mt-1 xxl:mt-2">That’s what i am doing from last 5 years.</p>
                      </div>
                      </div>
                    </div>
                    <div className="mt-8 xxl:mt-14">
                    <button type="submit" disabled={isSubmitting} className="f-PowerGrotesk text-[18px] xxl:text-[24px] text-[#E1FF26] leading-[19.94px] bg-[#014F59] max-w-[287px] max-h-[83px] rounded-full py-5 xxl:py-6 px-10">Save and proceed</button>
                    <button className="f-PowerGrotesk text-[24px] text-[#014F5954] leading-[19.94px] ml-6">Go back</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
      </div>
    </section>
  )
}

export default ProfessionalDetails
