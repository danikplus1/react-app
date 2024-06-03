import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import {
  UserTemplate,
  Btn,
  Title,
  StyledTextField,
} from "../../styledElements";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";

export const ForgotPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (formData) => {
    console.log(formData.email);
    console.log(formData.password);
  };

  return (
    <UserTemplate>
      <Box className="container">
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      mb: 1,
                      width: "100%",
                    },
                  }}
                >
                  <StyledTextField
                    {...field}
                    type="email"
                    label="E-mail"
                    placeholder="Put your e-mail"
                    variant="filled"
                    size="small"
                    error={!!fieldState.error}
                    helperText={fieldState?.error?.message}
                  />
                </Box>
              </div>
            )}
          />
          <Box
            component="div"
            sx={{
              "& > :not(style)": { mb: 1, width: "100%" },
            }}
          >
            <Btn
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid || isSubmitting}
            >
              Reset password
            </Btn>
          </Box>
        </form>
      </Box>
    </UserTemplate>
  );
};
