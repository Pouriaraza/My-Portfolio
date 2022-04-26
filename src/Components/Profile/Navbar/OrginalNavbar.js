import Draggable from "react-draggable";
import profilee from '../../../Assets/images/Profilee.jpg';
const OrginalNavbar = () =>{
    return(
        <Draggable>
        <section className="Navbars">
        <section className="Navbar">
          <div className="NavbarBottom">
            <div className="NavbarButtons">
            <div className="NavbarClose"></div>
            <div className="NavbarMinimize"></div>
            <div className="NavbarRestoreDown"></div>
            </div>
          </div>
          <div className="Navbars-body">
          <div className="Title">
          <h2>Who I am ?</h2>
        <img src={profilee}/>
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta asperiores in, illum corporis omnis facere itaque officiis sit ut ex sunt, labore maiores laudantium natus praesentium, recusandae quos esse.
          </p>
          </div>
        </section>
      </section>
      </Draggable>
    );
}


export default OrginalNavbar;