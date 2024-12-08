import React, { memo,useState } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 在这里处理登录逻辑，例如发送登录请求到服务器
    console.log('登录用户名:', username);
    console.log('登录密码:', password);
  };


  return (
    <LoginWrapper className="sprite_02">
      <p className="desc">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      {/* <a href="#/login" className="sprite_02">
        老子要登录
      </a> */}
      <input
        type="text"
        placeholder="请输入用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="请输入密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>老子要登录</button>
    </LoginWrapper>
  )
}

export default memo(UserLogin)
