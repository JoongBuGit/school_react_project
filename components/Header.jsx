// Header 파일이 메뉴창을 만드는 파일

import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  // userId와 auth() 함수 둘다 auth를 import해야 쓸 수 있다.
  const { userId } = auth() // 로그인 되면 유저 Id를 보여주는 코드라고 교수님이 수업때 말하심

  return (
    <>
      {/* 전체 배경과 설정들 */}
      <nav className="bg-red-700 py-4 px-8">
        <div className="flex items-center justify-between container">
          {/* Clerk Auth Home 부분 */}
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth Home</div>
            </Link>
          </div>

          {/* 로그인 안됬을 경우와 됬을 경우 */}
          <div className="flex items-center font-bold">
            {!userId ? (
              // 로그인 안된 경우 메뉴창
              <>
                {/* Login, Sign up 부분 */}
                <div className="flex items-center font-bold">
                  {/* Link href="/sign-in이 아니게 되면 clerk이 작동하지 않음 */}
                  <Link
                    href="/sign-in"
                    className="text-gray-300 hover:text-white mr-4"
                  >
                    Login
                  </Link>

                  {/* Link href="/sign-up이 아니게 되면 clerk이 작동하지 않음 */}
                  <Link
                    href="/sign-up"
                    className="text-gray-300 hover:text-white mr-4"
                  >
                    Sign Up
                  </Link>
                </div>
              </>
            ) : (
              // 로그인 된 경우 메뉴창
              <>
                {/* 외부 api를 활용하여 만든 페이지 */}
                <Link
                  href="/repos"
                  className="text-gray-300 hover:text-white mr-5"
                >
                  Repos
                </Link>

                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white mr-5"
                >
                  Courses
                </Link>

                {/* 대쉬보드 href가 /dashboard여야만 app/dashboard/page와 연결된다. */}
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white mr-5"
                >
                  Dashboard
                </Link>

                {/* 프로필 */}
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white mr-5"
                >
                  Profile
                </Link>

                {/* 프로필 이미지 */}
                <div className="ml-auto">
                  {/* 클럭에서 제공하는 프로필 버튼  */}
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

// components.Header.jsx 파일을 다른 파일에서 쓸 수 있게 만드는 코드
export default Header
