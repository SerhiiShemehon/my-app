function PostPagination({ onClick }) {
    return (
        <div className="posts-pagination">
            <button className="btn btn-big" type="button" onClick={onClick}>
                Load more
            </button>
        </div>
    );
}

export default PostPagination;
