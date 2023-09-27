import Image from 'next/image'
import DashboardPage from './dashboard/page'
import Link from 'next/link'

export default function Home() {
  return (
    // fragment의 축약형
    <>
      <h1 className="text-2xl font-bold mb-4 p-4 m-4">홈화면입니다</h1>
      <div className="mb-4 bg-gray-300 p-4 m-6 rounded-lg">
        <Link
          href={'https://clerk.com'}
          className="text-xl text-blue-600 font-bold"
        >
          clerk.com
        </Link>
        <p>
          clerk을 소개합니다~ clerk은 단순히 로그인박스만을 의미하지 않습니다.
          <br />
          여러 웹페이지에서의 사용자 정보창등을 제공합니다.
        </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-6 rounded-lg">
        <Link
          href={'https://api.github.com'}
          className="text-xl text-blue-600 font-bold"
        >
          api.github.com
        </Link>
        <p>Fecth API를 통해서 깃허브 리포지터리를 explore해봐요</p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-6 rounded-lg">
        <Link
          href={'http://localhost:3000/api/courses'}
          className="text-xl text-blue-600 font-bold"
        >
          Backend API
        </Link>
        <p>웹에서 사용되는 백앤드 API 서비스를 제공합니다.</p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-6 rounded-lg">
        <Link href="/" className="text-xl text-blue-600 font-bold">
          깃허브 리포지터리
        </Link>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-6 rounded-lg">
        <Link href="/" className="text-xl text-blue-600 font-bold">
          vercel link
        </Link>
      </div>
    </>
  )
}
