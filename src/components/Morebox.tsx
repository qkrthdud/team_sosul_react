import React from 'react';
import { Link } from 'react-router-dom'
import '../scss/morebox.hyuna.scss'

interface DataObj {
    bigtit:string;
    subtit:string;
    bg:string;
    br:string;
    hv: {bg:string, color:string};
    a:{text:string, link:string, color:string};
    color:string;
    img:{ src:string, alt:string}
}
interface BannerProps {
    dataobj: DataObj;
  }

const Morebox: React.FC<BannerProps> = ({ dataobj  }) => {
    return (
      
    
          <div className={`more_box flex flex-wrap lg:flex-nowrap items-center justify-between when ${dataobj.bg}`}>
            <ul className="more_info">
              <li className="more_txt_box">
                <div className="sub_tit">{dataobj.bigtit}</div>
                <div className="basic_txt">{dataobj.subtit}</div>
              </li>
              <li>
                <Link to={dataobj.a.link} className={`same_btn max-w-[230px] block ${dataobj.color} text-center ${dataobj.hv.bg} ${dataobj.hv.color} border ${dataobj.br}`}>{dataobj.a.text}</Link>
              </li>
            </ul>
            <img
              src={dataobj.img.src}
              alt={dataobj.img.alt}
            />
          </div>

       

    );
};

export default Morebox;