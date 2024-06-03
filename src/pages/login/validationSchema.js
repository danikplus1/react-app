import { object, string } from "yup";

export const validationSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
});
