import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const maxPagesToShow = 5;

  const renderPages = () => {
    const pages = [];
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= halfMaxPagesToShow) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + halfMaxPagesToShow >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfMaxPagesToShow;
        endPage = currentPage + halfMaxPagesToShow;
      }
    }

    if (currentPage > halfMaxPagesToShow + 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`pagination-btn ${
            currentPage === 1 ? "active" : ""
          } border border-red-500`}
        >
          1
        </button>
      );
      if (currentPage > halfMaxPagesToShow + 2) {
        pages.push(
          <span key="startEllipsis" className="mx-1">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          disabled={i === currentPage}
          className={`pagination-btn ${
            i === currentPage ? "active" : ""
          } border border-red-500 w-10`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - halfMaxPagesToShow) {
      if (currentPage < totalPages - halfMaxPagesToShow - 1) {
        pages.push(
          <span key="endEllipsis" className="mx-1">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`pagination-btn ${
            currentPage === totalPages ? "active" : ""
          } border border-red-500 w-10`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">{renderPages()}</div>
  );
};

export default Pagination;
