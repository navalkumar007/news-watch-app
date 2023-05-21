import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Khand";
        font-style: normal;
        font-weight: 400;
        src: local("Khand"), local("Khand-Regular"), url("../public/fonts/Khand/Khand-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "Khand";
        font-style: bold;
        font-weight: 700;
        src: local("Khan Bold"), local("Khand-Bold"), url("../public/fonts/Khand/Khand-Bold.ttf") format("truetype");
    }
    
    @font-face {
        font-family: "Oooh Baby";
        src: local("Oooh Baby"), url("../public/fonts/OoohBaby/OoohBaby-Regular.ttf") format("truetype");
    }
    `}
  />
);

export default Fonts;
