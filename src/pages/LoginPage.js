import React from "react";
import photo1 from "../images/image1.png";
import photo2 from "../images/image2.png";
import photo3 from "../images/image3.png";
import photo4 from "../images/image4.png";
import photo5 from "../images/image5.png";
import photo6 from "../images/image6.png";
import photo7 from "../images/image7.png";
import photo8 from "../images/image8.png";
import aldridge from "../images/aldridge.png";
//import styles later

function Login() {
  return (
    <div>
      <div class="relative h-screen">
        <img class="absolute top-0 left-0 w-1/2 h-1/2 object-cover" src={photo1} />
        <img class="absolute top-0 right-0 w-1/2 h-1/2 object-cover" src={photo2} />
        <img class="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover" src={photo3} />a
        <img class="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover" src={photo4} />
      </div>
      <form>
        <input type="text" name="Login"></input>
        <input type="text" name="Password"></input>
        <input type="button" onclick="" value="Submit"></input>
      </form>
    </div>
  );
}

export default Login;
