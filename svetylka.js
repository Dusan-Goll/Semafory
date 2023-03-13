'use strict'
const { useState } = React;

function Semafor() {

  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < 3) {
      setIndex(index + 1);
    } else {
    setIndex(0);
    }
  }

  const faze = [
    {
      proAuta:   {cervena: false , zluta: false , zelena: true },
      proChodce: {cervena: true  , zelena: false}
    },
    {
      proAuta:   {cervena: false , zluta: true  , zelena: false},
      proChodce: {cervena: true  , zelena: false}
    },
    {
      proAuta:   {cervena: true  , zluta: false , zelena: false},
      proChodce: {cervena: false , zelena: true }
    },
    {
      proAuta:   {cervena: true  , zluta: true  , zelena: false},
      proChodce: {cervena: true  , zelena: false}
    },
  ];

  let sviti = faze[index];

  let chodiciPostava = "./svgs/jde.svg";
  let stojiciPostava = "./svgs/stoji.svg";

  return (
    <div className="scena">
      <div className="semafory">
        <div className="semafor" id="pro-auta">
          <Svetlo 
            barva="var(--cervena)" 
            sviti={sviti.proAuta.cervena} 
            chodec={false}
          />
          <Svetlo 
            barva="var(--zluta)"   
            sviti={sviti.proAuta.zluta}   
            chodec={false}
          />
          <Svetlo 
            barva="var(--zelena)"  
            sviti={sviti.proAuta.zelena}  
            chodec={false}
          />
        </div>

        <div className="semafor" id="pro-chodce">
          <Svetlo
            barva="var(--cervena)"
            sviti={sviti.proChodce.cervena}
            chodec={stojiciPostava}
          />
          <Svetlo
            barva="var(--zelena)"
            sviti={sviti.proChodce.zelena}
            chodec={chodiciPostava}
          />
        </div>
      </div>

      <button onClick={handleClick}>
        změň světla
      </button>
    </div>
  );
}

function Svetlo({ barva, sviti, chodec }) {
  let backColor = sviti? barva: 'var(--seda)';
  let shadow = sviti?
    `-5px 8px 10px ${barva}, 5px 8px 10px ${barva}`
    : 'none';

  return (
    <div
      className="svetlo"
      style={{
        backgroundColor: backColor,
        boxShadow: shadow,
      }}
    >
      {chodec? sviti? <img src={chodec} alt="panáček"/> : null : null}
    </div>
  );
}


const rootNode = document.getElementById('semafor-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<Semafor />);
