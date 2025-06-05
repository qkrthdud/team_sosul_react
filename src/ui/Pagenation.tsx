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
                <button onClick={() => handleClick(1)} title="맨앞으로">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD" />
                        <path d="M38 40L28 29.9814" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M28 29.9814L38 19.9999" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M30 40L20 29.9814" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M20 29.9814L30 19.9999" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    title="이전페이지"
                    disabled={currentPage === 1}
                    >
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD" />
                        <path d="M34 40L24 29.9814" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M24 29.9814L34 19.9999" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
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
            <div className="next" >
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    title="다음페이지"
                    disabled={currentPage === totalPages}
                >
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD" />
                        <path d="M26 20L36 30.0186" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M36 30.0186L26 40.0001" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <button onClick={() => handleClick(totalPages)} title="맨뒤로">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD" />
                        <path d="M22 20L32 30.0186" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M32 30.0186L22 40.0001" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M30 20L40 30.0186" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                        <path d="M40 30.0186L30 40.0001" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Pagenation;