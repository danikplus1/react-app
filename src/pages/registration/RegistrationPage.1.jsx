import { Container } from "../../styledElements";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmedPassword: "",
    },
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData.email);
    console.log(formData.password);
    console.log(formData.confirmedPassword);
  };

  return (
    <Container>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller></Controller>
      </form>
    </Container>
  );
};
