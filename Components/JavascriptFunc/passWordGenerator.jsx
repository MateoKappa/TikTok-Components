export default function passWordGenerator() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = Math.floor(Math.random() * 16 + 8);
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return <div>{password}</div>;
}
