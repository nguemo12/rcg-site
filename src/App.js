import './App.css';
import logo from '../src/assets/images/logo.jpg'
import image1 from '../src/assets/images/image1.jpg'
import image2 from '../src/assets/images/image2.jpg'
import image4 from '../src/assets/images/image4.jpg'
import image5 from '../src/assets/images/image5.jpg'
import image6 from '../src/assets/images/image6.jpg'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <div className='navbar'>
          <div className='header-logo'>
            <img src={logo} style={{ width: "100%", height: "100%", marginLeft: 30, }} />
          </div>
          <div className='navlink'>
            <ul>
            <li><a href='#home'>Acceuil</a></li>
              <li><a href='#Services'>Services</a></li>
              <li><a href='#About'>About</a></li>
              <li><a href='#Contact'>Contact</a></li>
              <li><a href='#Job'>Job</a></li>
            </ul>
          </div>
        </div>
      </div>
      <section id='home' className='section1'>
        <div className='text-home'>
        <h1 className='headinghome' >Bienvenue a RCG Company</h1>
        <p className='texthome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      <button className='btn'>A propos de nous</button>
      </section>
      <section id='About' className='section2'>
        <div className='text-container'>
           <h1  >a propos de nous</h1>
           <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <button className='btn' >A propos de nous</button>
        </div>
        <div className='image-container'>
         <img src={image5} style={{width:"100%", height:"100%", borderRadius: 10,}}/>
        </div>
      </section>
      <h2 className='text-service'>Our Services</h2>
      <section id='Services' className='section3'>
        <div className='service-1'>
          <h2 style={{alignSelf:'center', marginTop: "60%",marginLeft:15,color:"#00B327"}}>Marketing Digital</h2>
          <p style={{alignSelf:'center', marginTop:8, color:"white",marginLeft:15,}}>Confiez nous vos projets et bénéficiez de la meilleure campagne marketing sur les réseau sociaux</p>
          <p style={{alignSelf:'center', marginTop:8, color:"#00B327", fontSize: 18,marginLeft:15,}}>En savoir plus</p>
        </div>
        <div className='service-2'>
        <h2 style={{alignSelf:'center', marginTop: "60%",marginLeft:15,color:"#00B327"}}>Design graphique</h2>
          <p style={{alignSelf:'center', marginTop:8, color:"white",marginLeft:15,}}>Notre équipe d’experts en graphisme vous aidera pour la conception de vos supports de communication</p>
          <p style={{alignSelf:'center', marginTop:8, color:"#00B327", fontSize: 18,marginLeft:15,}}>En savoir plus</p>
          </div>
          <div className='service-3'>
          <h2 style={{alignSelf:'center', marginTop: "60%",marginLeft:15,color:"#00B327"}}>Formations certifiante</h2>
          <p style={{alignSelf:'center', marginTop:8, color:"white",marginLeft:15,}}>Découvrez nos formations et choisissez celle qui convient à vos objectif</p>
          <p style={{alignSelf:'center', marginTop:8, color:"#00B327", fontSize: 18,marginLeft:15,}}>En savoir plus</p>
          </div>
      </section>


    </div>
  );
}

export default App;
