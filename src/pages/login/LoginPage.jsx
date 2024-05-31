import { useForm, Controller } from "react-hook-form";
import { Button, Box, TextField, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData.email);
    console.log(formData.password);
  };

  return (
    <Container>
      <h1>Log in to App</h1>
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
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
              >
                <TextField
                  {...field}
                  type="email"
                  label="E-mail"
                  placeholder="Put your e-mail"
                  variant="filled"
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
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
              >
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  placeholder="Put your password"
                  variant="filled"
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
            "& > :not(style)": { m: 1, width: "100%" },
          }}
        >
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Log in
          </Button>
        </Box>
        <Box
          component="div"
          sx={{
            margin: "8px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            variant="text"
            onClick={() => navigate("/registration")}
            sx={{ textTransform: "none", textDecoration: "underline" }}
          >
            Create account
          </Button>
          <Button
            variant="text"
            sx={{ textTransform: "none", textDecoration: "underline" }}
          >
            Forgot password?
          </Button>
        </Box>
      </form>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-size: 1rem;
`;
