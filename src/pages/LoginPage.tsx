import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { login } from "../features/authSlice";
import {
  GlobalError,
  ButtonSpinner,
  ErrorText,
  PageWrapper,
  Layout,
  SidePanel,
  SideTitle,
  SideText,
  StatsRow,
  StatCard,
  Dot,
  Badge,
  Card,
  StatValue,
  StatLabel,
  StyledField,
  FormGroup,
  SubmitButton,
  StyledForm,
  FooterHint,
  HelperText,
  Label,
  LabelRow,
  Title,
} from "../styledComp/login";


const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error , initialized , isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(()=>{
 if (initialized && isAuthenticated) {
    navigate("/employees");
  }
  },[initialized, isAuthenticated]);

 

  return (
    <PageWrapper>
      <Layout>
        <SidePanel>
          <div>
            <SideTitle>Employee Management System</SideTitle>
            <SideText>
              Track performance, manage roles, and keep your team organized from
              a single, secure dashboard.
            </SideText>
            <StatsRow>
              <StatCard>
                <StatLabel>Active Employees</StatLabel>
                <StatValue>240+</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Teams</StatLabel>
                <StatValue>12</StatValue>
              </StatCard>
            </StatsRow>
          </div>
       
        </SidePanel>

        <Card>
          <Badge>
            <Dot />
            <span>Secure Admin Access</span>
          </Badge>

          <Title>Employee Management</Title>

          <Formik
            initialValues={{ email: "test@example.com", password: "12345678" }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const result = await dispatch(login(values));
              setSubmitting(false);
              if (login.fulfilled.match(result)) {
                navigate("/employees");
              }
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <FormGroup>
                  <LabelRow>
                    <Label htmlFor="email">Email</Label>
                    <HelperText>Use your work email</HelperText>
                  </LabelRow>
                  <StyledField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => <ErrorText>{msg}</ErrorText>}
                  />
                </FormGroup>

                <FormGroup>
                  <LabelRow>
                    <Label htmlFor="password">Password</Label>
                    <HelperText>Min 6 characters</HelperText>
                  </LabelRow>
                  <StyledField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <ErrorMessage
                    name="password"
                    render={(msg) => <ErrorText>{msg}</ErrorText>}
                  />
                </FormGroup>

                {error && <GlobalError>Invalid email or password</GlobalError>}

                <SubmitButton type="submit" disabled={loading || isSubmitting}>
                  {(loading || isSubmitting) && <ButtonSpinner />}
                  {loading || isSubmitting ? "Signing in…" : "Sign In"}
                </SubmitButton>
              </StyledForm>
            )}
          </Formik>

          <FooterHint>
            Tip: for testing, use <span>yousef@gmail.com / 11111111</span>
          </FooterHint>
        </Card>
      </Layout>
    </PageWrapper>
  );
};

export default LoginPage;
