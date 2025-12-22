import { Link, Links } from "react-router-dom"
import styles from "./RecipeCard.module.css";
const RecipeCard = (props) => {
    const { id, title, image_url, category, description, ingredients, instructions } = props.recipe
    console.log(props.recipe);

    return (
        <Link 
        to={`/recipes/details/${id}`}
        className={styles.videoCard}>

            <div className={styles.thumbnailWrapper}>
                <img src={image_url} alt={title} />
            </div>

            <div className={styles.videoInfo}>
                <h1 className={styles.videoTitle}>{title}</h1>
                <h3 className={styles.videoCategory}>{category}</h3>

                <p className={styles.videoDesc}>
                    {description.slice(0, 100)}...
                    <span className={styles.more}>more</span>
                </p>

            </div>
        </Link>
    )
}

export default RecipeCard