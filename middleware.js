// 이 Middleware 파일이 있어야 app/components/Header.jsx에서 쓰이는 auth() 메소드를 사용 할 수 있는 것 같다.

import { authMiddleware } from '@clerk/nextjs'

//루트페이지 이외에는 접근할 수 없고 <- 교수님 자료출처
//로그인 페이지로 전환됨

//publicRoutes로 설정된 루트페이지는
//로그인하지 않아도 접근 가능

export default authMiddleware({
  publicRoutes: ['/'],
})

//
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
