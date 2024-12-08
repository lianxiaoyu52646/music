import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="我去，又卡了">
        {/* 动态路由,子类的位置 */}
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
