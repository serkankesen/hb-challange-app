import React, { useContext, useState } from "react";
import ShopContext from "../context/shop-context.js";

export default function Pagination(props) {
    const context = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);
    const { totalCount, pageSize } = props;
    const pageCount = Math.ceil(totalCount / pageSize);

    const onNext = () => {
        setCurrentPage(currentPage + 1);
        context.onProductPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        setCurrentPage(currentPage - 1);
        context.onProductPageChange(currentPage - 1);
    };
    return (
        <div className="pagination">
            <ul>
                {
                    <li
                        onClick={() => pageCount > 1 && onPrevious()}
                        className={
                            currentPage === 1
                                ? "pagination-item disabled"
                                : "pagination-item"
                        }
                    >
                        {"<"}
                    </li>
                }
                {[...Array(pageCount)].map((_, i) => (
                    <li
                        className="pagination-item"
                        key={i}
                        onClick={() => {
                            setCurrentPage(i + 1);
                            context.onProductPageChange(i + 1, pageSize);
                        }}
                    >
                        {i + 1}
                    </li>
                ))}
                <li
                    className={
                        !(currentPage <= pageCount - 1)
                            ? "pagination-item disabled"
                            : "pagination-item"
                    }
                    onClick={() => currentPage <= pageCount - 1 && onNext()}
                >
                    {">"}
                </li>
            </ul>
        </div>
    );
}
