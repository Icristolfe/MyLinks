import React from 'react'

import { FaGithub,FaWhatsapp,FaLinkedin,FaFacebook } from 'react-icons/fa';

import {
  Body,
  Container
} from './styles'



function App() {

  return (
    <Body>

   

      <Container>
      <h1>My Links</h1>
      <div> 
      <button><a href="https://wa.me/+5527997679661" target="_blanked"><FaWhatsapp /><br/>Whatsapp</a></button>
      </div>

      <div> 
      <button><a href="https://www.linkedin.com/in/%C3%ADcaro-cristolfe-0b8104197/" target="_blanked"><FaLinkedin/><br/>LinkedIn</a></button>
      </div>
      
      <div> 
      <button><a href="https://github.com/cristolfe-prog" target="_blanked"><FaGithub/> <br/>Github</a></button>
      </div>

      <div> 
      <button><a href="https://www.facebook.com/icaro.cristolfe" target="_blanked"><FaFacebook/> <br/>Facebook</a></button>
      </div>

      </Container>
    </Body>
  );
}

export default App;
