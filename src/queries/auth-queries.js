import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(credentials: { email: $email, password: $password }) {
      user {
        id
        prenom
        email
        role
      }
      accessToken
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($password: String!, $confirmPassword: String!) {
    changePassword(password: $password, confirmPassword: $confirmPassword) {
      id
    }
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($token: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(token: $token, password: $password, confirmPassword: $confirmPassword)
  }
`;

export const REGISTER_SUPER_ADMIN_MUTATION = gql`
  mutation RegisterSuperAdmin($userData: CreateUserInput!) {
    registerSuperAdmin(userData: $userData) {
      id
      prenom
      email
      cin
      role
    }
  }
`;

export const REGISTER_CLIENT_MUTATION = gql`
  mutation RegisterClient($userData: CreateUserInput!) {
    registerClient(userData: $userData) {
      id
      prenom
      email
      cin
      role
    }
  }
`;