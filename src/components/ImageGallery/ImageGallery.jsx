import styles from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, openModal }) {
    return (
        <div className={styles.galleryContainer}>
            <ul className={styles.gallery}>
            {photos.map(photo => (
                <ImageCard key={photo.id} photo={photo} openModal={openModal} />
            ))}
            </ul>
        </div>
    );
}