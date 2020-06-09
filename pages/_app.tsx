import Router from "next/router";
import Head from "next/head";
import { AppProps } from "next/app";
// redux
import { Provider } from "react-redux";
import store from "../store";
import NProgress from "nprogress";

// 路由器事件
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
// beforeHistoryChange(url) -在更改浏览器的历史记录之前触发



// 全局样式
export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
