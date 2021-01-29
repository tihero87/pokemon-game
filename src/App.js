import './App.css';
import Header from "./components/header";
import Layout from "./components/layout";
import Footer from "./components/footer";
import bg1Img from './img/bg1.jpg';
import bg3Img from './img/bg3.jpg'

function App() {
  return (
    <>
        <Header title="This is title" descr="This is Description!" />
        <Layout id={1} title='title1' descr="this is descr 1" urlBg={bg1Img} />
        <Layout id={2} title='title2' descr="this is descr 2" colorBg='#ffccff'/>
        <Layout id={3} title='title3' descr="this is descr 3" urlBg={bg3Img}/>
        <Footer/>
    </>
  );
}

export default App;
