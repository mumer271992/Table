import React, { useState, useEffect } from 'react';
import PaginationItem from '../PaginationItem/PaginationItem.js';

const WINDOW_SIZE = 5;

const Pagination = ({ pageData, setPageNumber }) => {
  const totalPages = pageData.totalPages;
  const pageNumber = parseInt(pageData?.number);
  const [range, setRange] = useState({ from: 0, to: WINDOW_SIZE });
  const [visiblePages, setVisiblePages] = useState([]);

  const generatePageNumbers = (from, to) => {
    const pages = [];
    if (to > totalPages) {
      debugger
      to = totalPages;
    }
    for (let i = from; i < to; i++) {
      pages.push(i);
    }
    console.log(pages);
    return pages;
  };

  const moveToNextPage = () => {
    console.log(pageNumber + 1);
    if (range.to + 1 <= totalPages) {
      setRange((currentValue) => ({
        from: currentValue.from + 1,
        to: currentValue.to + 1,
      }));
    }
    setPageNumber(pageNumber + 1);
  };

  const moveToPrevPage = () => {
    if (range.from - 1 >= 0) {
      setRange((currentValue) => ({
        from: currentValue.from - 1,
        to: currentValue.to - 1,
      }));
    }
    setPageNumber(pageNumber - 1);
  };

  const moveToFirstPage = () => {
    setPageNumber(0);
    setRange((currentValue) => ({ from: 0, to: WINDOW_SIZE }));
  };

  const moveToLastPage = () => {
    const data = {
      from: totalPages - 5,
      to: totalPages,
    };
    if (totalPages < WINDOW_SIZE) {
      data.from = 0;
    }
    setPageNumber(totalPages - 1);
    setRange((currentValue) => data);
  };

  useEffect(() => {
    setVisiblePages(generatePageNumbers(range.from, range.to));
  }, [range.from, range.to, pageData.totalPages]);

  return (
    <nav aria-label="Page navigation">
      <ul class="pagination mb-0">
        <PaginationItem disabled={pageNumber === 0} onClick={moveToPrevPage}>Previous</PaginationItem>
        {visiblePages.length >= 1 &&
          visiblePages.map((e, i) => (
            <PaginationItem
                key={i}
                active={pageNumber === e ? true : false}
                onClick={() => setPageNumber(e)}
              >
                {e + 1}
              </PaginationItem>
          ))}
        <PaginationItem disabled={pageNumber + 1 >= totalPages} onClick={moveToNextPage}>Next</PaginationItem>
      </ul>
    </nav>
  )
};

export default Pagination;

// const PaginationButtonGroup = ({
//   setPageNumber,
//   pageNumber,
//   usersPerPage,
//   count,
// }) => {
//   const totalPages = Math.ceil(count / usersPerPage);
//   if (isNaN(totalPages)) {
//     return null;
//   }
//   const [range, setRange] = useState({ from: 0, to: WINDOW_SIZE });
//   const [visiblePages, setVisiblePages] = useState([]);

//   const generatePageNumbers = (from, to) => {
//     const pages = [];
//     if (to > totalPages) {
//       to = totalPages;
//     }
//     for (let i = from; i < to; i++) {
//       pages.push(i);
//     }
//     console.log(pages);
//     // debugger;
//     return pages;
//   };

//   const moveToNextPage = () => {
//     // debugger;
//     console.log(pageNumber + 1);
//     if (range.to + 1 <= totalPages) {
//       setRange((currentValue) => ({
//         from: currentValue.from + 1,
//         to: currentValue.to + 1,
//       }));
//     }
//     setPageNumber(pageNumber + 1);
//   };

//   const moveToPrevPage = () => {
//     // debugger;
//     if (range.from - 1 >= 0) {
//       setRange((currentValue) => ({
//         from: currentValue.from - 1,
//         to: currentValue.to - 1,
//       }));
//     }
//     setPageNumber(pageNumber - 1);
//   };

//   const moveToFirstPage = () => {
//     setPageNumber(0);
//     setRange((currentValue) => ({ from: 0, to: WINDOW_SIZE }));
//   };

//   const moveToLastPage = () => {
//     const data = {
//       from: totalPages - 5,
//       to: totalPages,
//     };
//     if (totalPages < WINDOW_SIZE) {
//       data.from = 0;
//     }
//     setPageNumber(totalPages - 1);
//     setRange((currentValue) => data);
//   };

//   useEffect(() => {
//     setVisiblePages(generatePageNumbers(range.from, range.to));
//   }, [range.from, range.to]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       {count ? (
//         <Pagination aria-label="Pages navigation">
//           <PaginationItem>
//             <PaginationLink first onClick={moveToFirstPage} />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink
//               previous
//               disabled={pageNumber <= 0}
//               onClick={moveToPrevPage}
//             />
//           </PaginationItem>
//           {visiblePages.length > 1 &&
//             visiblePages.map((e, i) => (
//               <PaginationItem key={i} active={pageNumber === e ? true : false}>
//                 <PaginationLink
//                   disabled={pageNumber === e ? true : false}
//                   onClick={() => setPageNumber(e)}
//                 >
//                   {e + 1}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}
//           <PaginationItem>
//             <PaginationLink
//               next
//               disabled={pageNumber + 1 >= totalPages}
//               onClick={moveToNextPage}
//             />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink last onClick={moveToLastPage} />
//           </PaginationItem>
//         </Pagination>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default PaginationButtonGroup;