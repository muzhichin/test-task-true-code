type PaginationProps = { totalPages: number, currentPage: number, setPage: (n: number) => void }
const CONST_DISPLAY_LIMIT = 3;

export const Pagination = ({totalPages, currentPage, setPage}: PaginationProps) => {

    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    const getPaginationItems = () => {
        if (totalPages <= CONST_DISPLAY_LIMIT * 2 + 2) {
            return pages;
        }

        const result = [];

        result.push(1);
        currentPage > (CONST_DISPLAY_LIMIT + 1) && result.push('...');

        const startPage = Math.max(2, currentPage - CONST_DISPLAY_LIMIT);
        const endPage = Math.min(totalPages - 1, currentPage + CONST_DISPLAY_LIMIT);

        for (let i = startPage; i <= endPage; i++) {
            result.push(i);
        }

        if (totalPages > CONST_DISPLAY_LIMIT * 2 + 2) {
            if (endPage < totalPages - 1) {
                result.push('...');
            }
            result.push(totalPages);
        }

        return result;
    };

    const paginationItems = getPaginationItems();

    return (
        <ul className="pagination">
            <li className="page-item">
                <a className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                   onClick={() => setPage(currentPage! - 1)}
                   href="#"
                   aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            {paginationItems.map((item, index) => (
                <li key={index} className="page-item">
                    {item === '...' ? (
                        <span className="page-link">...</span>
                    ) : (
                        <a
                            onClick={() => setPage(item as number)}
                            className={`page-link ${currentPage === item ? 'active' : ''}`}
                            href="#"
                        >
                            {item}
                        </a>
                    )}
                </li>
            ))}
            <li className="page-item">
                <a className={`page-link ${currentPage === totalPages ? "disabled" : ""}`} href="#"
                   onClick={() => setPage(currentPage! + 1)}
                   aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    );
};
