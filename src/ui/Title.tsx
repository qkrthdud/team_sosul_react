import React from 'react';
import Button from './Button';

interface DataObj {
    tit:string,
    btnshow :boolean,
    txtalign : string
}
interface TitleProps {
    dataobj: DataObj;
  }

const Title: React.FC<TitleProps> = ({dataobj}) => {
    return <div className="tit">
                <div className={`main_tit panBlack ${dataobj.txtalign}`}> <div dangerouslySetInnerHTML={{ __html: dataobj.tit }} /></div>
                {
                    dataobj.btnshow && 
                    <Button btdataobj= {{
                        tit:"전체보기",
                        position:"",
                        hv: {bg:"string", color:"string"},
                        br:"string",
                        color:"string"
                    }}>
                        전체보기
                    </Button>
                }
            </div>;
};

export default Title;