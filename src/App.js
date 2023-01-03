import './App.css';
import Photo from "./profile/photo.jpg";
import Profile from "./profile/Profile"

export default function App() {
  const fullName="Aziz Gabsi"
  const handleName=()=>{
    alert(`${fullName}`)
  }

  return (
    <div className="App">

      <Profile fullName ={fullName} bio = "22 year old male" profession = "Beginner Full-Stack Developer" handleName={handleName}>
        <img src={Photo} style={{width: "20vw", marginTop: "20px", border: "solid"}} />
        
      </Profile>
    </div>
  );
}

