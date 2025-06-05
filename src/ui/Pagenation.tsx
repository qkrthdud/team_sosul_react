interface Props {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalItems: number;
    itemsPerPage: number;
  }

  const Pagenation: React.FC<Props> = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handleClick = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
    return (
        <div className="paging flex">
            <div className="prev">
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M38 40L28 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M28 29.9814L38 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M30 40L20 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M20 29.9814L30 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M34 40L24 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M24 29.9814L34 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
            </div>
           
            <div className="number flex">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                key={i + 1}
                onClick={() => handleClick(i + 1)}
                className={currentPage === i + 1 ?  'active num' : 'num'}
                >
                {i + 1}
                </button>
            ))}
            </div>
            <div className="next">
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M26 20L36 30.0186" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M36 30.0186L26 40.0001" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M22 20L32 30.0186" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M32 30.0186L22 40.0001" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M30 20L40 30.0186" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M40 30.0186L30 40.0001" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Pagenation;