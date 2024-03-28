import styles from './ImageCard.module.css';

export default function ImageCard({ photo, openModal }) {
    const { urls } = photo;

    return (
        <div className={styles.imageCard}>
            <img src={urls.small} alt="" className={styles.image} onClick={() => openModal(photo)}/>
        </div>
    );
}