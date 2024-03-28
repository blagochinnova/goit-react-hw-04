import styles from '../LoadMoreBtn/LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick }) {
    return (
        <div className={styles.loadMoreContainer}>
            <button onClick={onClick} className={styles.loadMoreButton}>Load more</button>
        </div>
    );
}