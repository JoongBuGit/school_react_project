import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

// javascript는 single thread다.
// synchronous(동기), Asynchronous(비동기) => 따라서 아래 코드는 비동기 함수를 선언
async function fetchRepos() {
  // javascript는 const, let, var로 변수를 선언함.
  // const는 변하지 않는 값, 재할당 불가
  const username = 'bradtraversy'

  // await 함수는 async 함수에서만 사용가능
  // fetch 함수는 두개인자가 들어감 => 1.api주소(필수), 2. 요청옵션(선택)
  // 3가지 랜더링 방식중 SSG:Static Site Generation 방식을 사용함
  // 역따옴표가 아니라서 계속 안됬음
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  // Promise라는 걸 사용함 => 비동기와 관련있음
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const repos = await response.json()

  return repos
}

const ReposPage = async () => {
  const username = 'bradtraversy'
  const repos = await fetchRepos()

  return (
    <div>
      <h2>깃허브 리포지터리 of {username}</h2>
      {/* <h5>repos = {repos}</h5> */}

      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage
