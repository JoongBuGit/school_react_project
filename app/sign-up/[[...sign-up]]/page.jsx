import { SignIn, SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  // 이 코드에서  SignUp은 clerk에서 제공하는 함수
  // 따라서 이 함수의 결과값으로 SignUp 페이지가 뿌려지는 것 같음
  return <SignUp />
}

export default SignUpPage
