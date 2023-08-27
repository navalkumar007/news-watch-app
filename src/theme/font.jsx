import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Khand";
        font-style: normal;
        font-weight: 400;
        src: local("Khand"), local("Khand-Regular"), url("/fonts/Khand/Khand-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "Khand";
        font-style: bold;
        font-weight: 700;
        src: local("Khand Bold"), local("Khand-Bold"), url("/fonts/Khand/Khand-Bold.ttf") format("truetype");
    }
    
    @font-face {
        font-family: "Oooh Baby";
        src: local("Oooh Baby"), url("/fonts/OoohBaby/OoohBaby-Regular.ttf") format("truetype");
    }
  
    
    @font-face {
        font-family: "Oooh Baby";
        src: local("Oooh Baby"), url("/fonts/OoohBaby/OoohBaby-Regular.ttf") format("truetype");
    }
  
    @font-face{
      font-family: "Mona Sans Black";
      src: local("Mona Sans Black"), local("Mona-Sans-Black"), url("/fonts/Mona Sans/Mona-Sans-Black.ttf") format("truetype");
    }
  
  
    @font-face{
      font-family: "Mona Sans Narrow";
      src: local("Mona Sans Black Narrow"), local("Mona-Sans-Black-Narrow"), url("/fonts/Mona Sans/Mona-Sans-BlackNarrow.ttf") format("truetype");
    }
  
    `}
  />
);

export default Fonts;
