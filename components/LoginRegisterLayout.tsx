import Head from "next/head";

interface LayoutProps {
  keys: string;
  children: React.ReactNode;
}

// 登录注册 基本模板
function Layout({ keys, children }: LayoutProps) {
  console.log(keys)
  return (
    <div className="main">
      <Head>
        <link rel="stylesheet" type="text/css" href="/login.css" />
      </Head>
      <div className="header">
        <a href="/">
          <img src="/public/img/logo3.png" alt="" />
        </a>
        <h1>用户登录</h1>
      </div>
      <form id="login_form">
        <div className="form-group">
          <label for="email">邮箱</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="password">密码</label>
          <a className="pull-right" href="">
            忘记密码？
          </a>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            记住我
          </label>
        </div>
        <button type="submit" className="btn btn-success btn-block">
          登录
        </button>
      </form>
      <div className="message">
        <p>
          没有账号? <a href="/register">点击创建</a>.
        </p>
      </div>
    </div>
  );
}

export default Layout;
