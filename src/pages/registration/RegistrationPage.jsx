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

export const RegistrationPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
    <UserTemplate>
      <Box className="container">
        <Title>Sing Up</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            rules={{
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
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
            rules={{
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
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
            rules={{
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
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
