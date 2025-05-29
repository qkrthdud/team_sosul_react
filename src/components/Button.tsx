import React from 'react';

interface BTDataObj {
    tit:string,
    position:string,
    hv: {bg:string, color:string};
    br:string;
    color:string;
}
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    btdataobj: BTDataObj;
  }


const Button: React.FC<ButtonProps> = ({ btdataobj, onClick }) => {
    return (
        
        <button onClick={onClick} className={`all-btn point_txt ${btdataobj.color} ${btdataobj.position} ${btdataobj.hv.bg} ${btdataobj.hv.color} ${btdataobj.br}`}>
            {btdataobj.tit}
        </button>
    );
};

export default Button;