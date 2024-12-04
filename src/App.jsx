import "nprogress/nprogress.css";
import IndexRouter from "./router/IndexRouter";
import NProgress from "nprogress";
//进度条配置
NProgress.configure({
  minimum: 0.2,
  easing: "ease",
  speed: 500,
});

function App() {
  return (
    <div className="App">
      <IndexRouter />
    </div>
  );
}

export default App;
