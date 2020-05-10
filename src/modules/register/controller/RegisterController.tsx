interface Props {
  children: (data: {
    submit: (values: any) => Promise<any> | null;
  }) => JSX.Element | null;
}

const RegisterController = (props: Props) => {
  const submit = async (values: any) => {
    console.log("test", values);
    return null;
  };

  return props.children({ submit });
};

export default RegisterController;
