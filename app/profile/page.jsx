// 프로필 메뉴를 누르면 프로필을 보여주는 페이지

import { UserProfile } from '@clerk/nextjs'

const ProfilePage = () => {
  return (
    // return값으로 Clerk에서 제공하는 프로필 값
    <div>
      <UserProfile />
    </div>
  )
}

export default ProfilePage
