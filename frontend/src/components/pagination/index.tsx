import { useEffect, useState } from "react";

export type Paginable = {
    first: boolean;
    last: boolean;
    totalPages: number;
    totalElements: number;
    number: number;
}

type Props = {
    page: Paginable;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {

    const [paginationRange, setPaginationRange] = useState<number[]>([]);

    // const generatePaginationRange = (): number[] => {
    //     const paginationNumberOfOptions = (page.totalPages > 1) ? (page.totalPages / 10 < 1) ? page.totalPages : 10 : 1;        
    //     let firstOption = page.number - Math.floor(paginationNumberOfOptions / 2);                
    //     if (firstOption < 0) firstOption = 0;
    //     if (firstOption + paginationNumberOfOptions > page.totalPages) firstOption = page.totalPages - paginationNumberOfOptions;
    //     return Array.from({ length: paginationNumberOfOptions ?? 10 }, (v, k) => k + firstOption);
    // } 

    useEffect(() => {
        const paginationNumberOfOptions = (page.totalPages > 1) ? (page.totalPages / 10 < 1) ? page.totalPages : 10 : 1;
        let firstOption = page.number - Math.floor(paginationNumberOfOptions / 2);
        if (firstOption < 0) firstOption = 0;
        if (firstOption + paginationNumberOfOptions > page.totalPages) firstOption = page.totalPages - paginationNumberOfOptions;
        setPaginationRange(Array.from({ length: paginationNumberOfOptions ?? 10 }, (v, k) => k + firstOption));
    }, [page]);

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(0)}>Primeira</button>
                    </li>
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    {paginationRange.map(pageNumber => (
                        <li key={pageNumber} className={`page-item ${page.number === pageNumber ? 'disabled' : ''} `}>
                            <button className="page-link" onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
                        </li>
                    ))}
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.totalPages - 1)}>Última</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;