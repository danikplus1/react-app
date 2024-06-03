import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  UserTemplate,
  Title,
  Btn,
  BtnWithoutHover,
  StyledTextField,
} from "../../styledElements";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegistrationPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData.email);
    console.log(formData.password);
    console.log(formData.confirmedPassword);
  };

  return (
    <UserTemplate>
      <Box className="container">
        <Title>Sing Up</Title>
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
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mb: 1, width: "100%" },
                  }}
                >
                  <StyledTextField
                    {...field}
                    type="password"
                    label="Password"
                    placeholder="Put your password"
                    variant="filled"
                    size="small"
                    error={!!fieldState.error}
                    helperText={fieldState?.error?.message}
                  />
                </Box>
              </div>
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mb: 1, width: "100%" },
                  }}
                >
                  <StyledTextField
                    {...field}
                    type="password"
                    label="Confirm password"
                    placeholder="Confirm your password"
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
            <Btn variant="contained" onClick={handleSubmit(onSubmit)}>
              Create an account
            </Btn>
          </Box>
          <Box
            component="div"
            sx={{
              marginBottom: "8px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <BtnWithoutHover
              variant="text"
              onClick={() => navigate("/login")}
              sx={{ textTransform: "none", textDecoration: "underline" }}
            >
              Log in
            </BtnWithoutHover>
          </Box>
        </form>
      </Box>
    </UserTemplate>
  );
};
