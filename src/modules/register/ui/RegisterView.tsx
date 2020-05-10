import React from "react";
import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  withFormik,
  FormikProps,
  Field,
  Form as FForm,
  FormikErrors,
} from "formik";
import * as yup from "yup";
import { inputField } from "../../shared/inputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues>> | null;
}

const MyForm = (props: FormikProps<FormValues> & Props) => {
  return (
    <FForm style={{ width: 300, margin: "auto" }}>
      <Field
        name="email"
        placeholder="Username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        component={inputField}
      />

      <Field
        name="password"
        type="password"
        placeholder="Password"
        prefix={<LockOutlined className="site-form-item-icon" />}
        component={inputField}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>{" "}
        Or <a href="">login now!</a>
      </Form.Item>
    </FForm>
  );
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .min(8, "Email not long enough!")
    .max(255)
    .required(),
  password: yup
    .string()
    .min(3, "Password not long enough!")
    .max(255)
    .required(),
  //name: yup.string().required(),
  //age: yup.number().required().positive().integer(),

  //website: yup.string().url(),
  /* createdOn: yup.date().default(function () {
    return new Date();
  }), */
});

const RegisterView = withFormik<Props, FormValues>({
  validationSchema,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  handleSubmit: async (values, { props }) => {
    //do somethings
    const errors = await props.submit(values);
  },
})(MyForm);

export default RegisterView;
