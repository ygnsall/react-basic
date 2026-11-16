import './App.css'
import Myheader from "./components/Myheader"
import Nav from "./components/Nav"
import MyArtcile from "./components/MyArticle"
function App() {
  return (
  <>
    <Myheader />
    <Nav />
    <MyArtcile
      title="UI/UX 개발"
      desc="사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현"
    />
  </>
  )
}

export default App
