export default interface ResetPasswordDto {
  userName: string;
  token: string;
  password: string;
  confirmPassword: string;
}
