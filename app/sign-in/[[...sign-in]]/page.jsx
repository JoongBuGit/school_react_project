import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  // 이 코드에서  SignIn은 clerk에서 제공하는 함수
  // 따라서 이 함수의 결과값으로 SignIn 페이지가 뿌려지는 것 같음
  return <SignIn />
}

export default SignInPage
