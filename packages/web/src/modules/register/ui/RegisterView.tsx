import React, { PureComponent } from 'react';
import { Button, Form, Input, Icon } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';

interface FormValues {
   email: string;
   password: string;
}

interface Props {
   submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends PureComponent<FormikProps<FormValues> & Props> {
   render() {
      const { values, handleChange, handleBlur, handleSubmit } = this.props;

      return (
         <form onSubmit={handleSubmit}>
            <div style={{ width: 400, margin: 'auto' }}>
               <Form.Item>
                  <Input
                     name="email"
                     prefix={
                        <Icon
                           type="user"
                           style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                     }
                     placeholder="Email"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </Form.Item>
               <Form.Item>
                  <Input
                     name="password"
                     prefix={
                        <Icon
                           type="lock"
                           style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                     }
                     type="password"
                     placeholder="Password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </Form.Item>
               <Form.Item>
                  <a href="" className="login-form-forgot">
                     Fortgot password
                  </a>
               </Form.Item>
               <Form.Item>
                  <Button
                     type="primary"
                     htmlType="submit"
                     className="login-form-button"
                  >
                     Register
                  </Button>
               </Form.Item>
               <Form.Item>
                  Or <a href="">login now!</a>
               </Form.Item>
            </div>
         </form>
      );
   }
}

export const RegisterView = withFormik<Props, FormValues>({
   mapPropsToValues: () => ({ email: '', password: '' }),
   handleSubmit: async (values, { props, setErrors }) => {
      const errors = await props.submit(values);
      if (errors) {
         setErrors(errors);
      }
   }
})(C);
