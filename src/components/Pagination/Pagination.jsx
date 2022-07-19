import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';



function Pagination({ orignalData, setCurrentData, itemsPerPage }) {
    const [pageCount, setPageCount] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % orignalData.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
        console.log(orignalData, setCurrentData, itemsPerPage)
        if (orignalData?.length > 0) {
            const endOffset = itemOffset + itemsPerPage;
            const newData = orignalData?.slice(itemOffset, endOffset);
            console.log(newData, '----');
            setCurrentData(newData);
            console.log('newOffset', orignalData, itemsPerPage);
            setPageCount(Math.ceil(orignalData.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, orignalData]);
    return (
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel={<GrFormNext />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel={<GrFormPrevious />}
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination