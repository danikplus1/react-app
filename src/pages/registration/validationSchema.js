import { object, string, ref } from "yup";

export const validationSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required(),
});
