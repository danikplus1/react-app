import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  UserTemplate,
  Btn,
  BtnWithoutHover,
  StyledTextField,
  Title,
} from "../../styledElements";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import useUserStore from "../../store/useUserStore";

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = (formData) => {
    try {
      if (formData.email && formData.password) {
        setUser(formData.email);
        navigate("/dashboard");
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <UserTemplate>
      <Box className="container">
        <Title>Log in to App</Title>
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
              Log in
            </Btn>
          </Box>
          <Box
            component="div"
            sx={{
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <BtnWithoutHover
              variant="text"
              onClick={() => navigate("/registration")}
              sx={{ textTransform: "none", textDecoration: "underline" }}
            >
              Create account
            </BtnWithoutHover>
            <BtnWithoutHover
              variant="text"
              onClick={() => navigate("/forgot-password")}
              sx={{ textTransform: "none", textDecoration: "underline" }}
            >
              Forgot password?
            </BtnWithoutHover>
          </Box>
        </form>
      </Box>
    </UserTemplate>
  );
};
