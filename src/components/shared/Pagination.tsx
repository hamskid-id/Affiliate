"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";

interface IPagination {
  totalPageNumber: number;
  activePage: string;
  setPageNumber: React.Dispatch<React.SetStateAction<any>>;
}

const NextPagination = () => (
  <div className="border rounded-md flex items-center gap-2 py-2 px-4 justify-center cursor-pointer">
    Next <ChevronRight className="w-4 h-4" />
  </div>
);

const PrevPagination = () => (
  <div className="border rounded-md flex items-center gap-2 py-2 px-4 justify-center cursor-pointer">
    <ChevronLeft className="w-4 h-4" /> Prev
  </div>
);

const pagination_Style = {
  nextLabel: <NextPagination />,
  previousLabel: <PrevPagination />,
  containerClassName:
    "flex text-xs rounded-lg  ms-auto items-center bg-thick-purple-5 justify-between w-full py-1",
  activeClassName: "shadow bg-white",
  previousClassName: "w-fit px-2",
  nextClassName: "w-fit px-2",
  pageClassName:
    "gap-2 px-2 md:px-4 py-2 text-xs md:text-sm rounded-lg text-center md:w-auto w-[1.5rem] text-thick-purple",
};

export const Pagination: React.FC<IPagination> = ({
  totalPageNumber,
  activePage,
  setPageNumber,
}) => {
  const handlePageClick = (event: any) => {
    const page_number = event.selected + 1;
    setPageNumber(page_number);
  };

  // Divide total page number by 10 and convert to whole number
  const adjustedPageCount = Math.floor(totalPageNumber / 10);

  // Ensure we have at least 1 page
  const finalPageCount = Math.max(adjustedPageCount, 1);

  if (totalPageNumber < 2) return null;

  return (
    <div
      className={
        "flex flex-wrap-reverse justify-end items-end mt-auto md:flex-wrap-nowrap gap-2 px-4 pb-4 pt-6"
      }
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel={pagination_Style.nextLabel}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={finalPageCount}
        initialPage={(activePage ? parseInt(activePage) : 1) - 1}
        disableInitialCallback={true}
        previousLabel={pagination_Style.previousLabel}
        renderOnZeroPageCount={null}
        containerClassName={pagination_Style.containerClassName}
        activeClassName={pagination_Style.activeClassName}
        previousClassName={pagination_Style.previousClassName}
        nextClassName={pagination_Style.nextClassName}
        pageClassName={pagination_Style.pageClassName}
      />
    </div>
  );
};
