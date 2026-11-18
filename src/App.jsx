import "./App.css";
import Header from "./componntas/Header";
import Card from "./componntas/Card";
import Footer from "./componntas/Footer";
function App() {
  

  return (
    <> 
    <Header />
      <div className="cards">
      <Card name="דנה" description="חברה מהצבא" type="friend" />
      <Card name="מר כהן" description="מורה למתמטיקה" type="teacher" />
      <Card name="רון" description="סטודנט שנה א׳" type="student" />
      </div>
      <Footer/>
    </>
  );
}

export default App;
