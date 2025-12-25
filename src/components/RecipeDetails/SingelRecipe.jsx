import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../../context/RecipeContext'
import styles from "./SingelRecipe.module.css";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingelRecipe = () => {
    const naviget = useNavigate();

    const { data, setData } = useContext(recipecontext);

    const params = useParams();

    const recipe = data.find((recipe) => recipe.id == params.id);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: recipe?.title,
            cuisine: recipe?.cuisine,
            category: recipe?.category,
            image_url: recipe?.image_url,
            description: recipe?.description,
            ingredients: recipe?.ingredients,
            instructions: recipe?.instructions,
        },
    });

    const submitHandler = (recipe) => {

        const index = data.findIndex((recipe) => params.id == recipe.id);

        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...recipe };
        setData(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));

        console.log(data);

        toast.success("🎉Updated Successfully")
        reset();
    }

    const deleteHandler = () => {

        const filterdata = data.filter((recipe) => recipe.id != params.id);
        setData(filterdata);
        localStorage.setItem("recipes", JSON.stringify(filterdata))
        toast.error("🎉Deleted Successfully")
        naviget("/recipes");
    }

    
    const [favroite, setFavroite] = useState(
        JSON.parse(localStorage.getItem('fav')) || []
    )

    const FavHandler = () => {
        setFavroite([...favroite, recipe])
        localStorage.setItem('fav', JSON.stringify([...favroite, recipe]))
        toast.success("🎉Recipe Added to Favroite")
    }

    const UnFavHandler = () => {
        const filterfav = favroite.filter((elm) => elm.id != recipe?.id);
        setFavroite(filterfav);
        localStorage.setItem('fav',JSON.stringify(filterfav));

        toast.error("🎉Recipe Deleted from Favroite")
    }

    return (
        recipe ?
            <div className={styles.layout}>
                <article className={styles.recipePage}>
                    {/* Header */}
                    <header className={styles.header}>
                        <div className=' flex items-center justify-between gap-10'>
                            <h1 className={styles.title}>{recipe.title}</h1>
                            <h1 className=' text-2xl text-red-500 cursor-pointer'>
                                {favroite.find((f) => f.id == recipe?.id)?(
                                    <i onClick={UnFavHandler} className="ri-heart-3-fill "></i>
                                ):(
                                    <i onClick={FavHandler} className="ri-heart-3-line "></i>
                                )}
                                {/* <i onClick={FavHandler} className="ri-heart-3-line "></i>
                                <i onClick={UnFavHandler} className="ri-heart-3-fill "></i> */}
                            </h1>
                        </div>

                        <p className={styles.meta}>
                            <span>{recipe.cuisine}</span> • <span>{recipe.category}</span>
                        </p>
                    </header>

                    {/* Image */}
                    <div className={styles.imageWrapper}>
                        <img src={recipe.image_url} alt={recipe.title} />
                    </div>

                    {/* Description */}
                    <section className={styles.section}>
                        <p className={styles.description}>{recipe.description}</p>
                    </section>

                    {/* Ingredients */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Ingredients</h2>
                        <ul className={styles.ingredients}>
                            {recipe.ingredients.map((item, index) => (
                                <li key={index}>
                                    {item.name} – {item.quantity} {item.unit}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Instructions */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Instructions</h2>
                        <ol className={styles.instructions}>
                            {recipe.instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </section>

                    {/* Nutrition */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Nutrition</h2>
                        <div className={styles.nutrition}>
                            <span>🔥 {recipe.nutrition.calories} kcal</span>
                            <span>💪 {recipe.nutrition.protein_g}g Protein</span>
                            <span>🍞 {recipe.nutrition.carbs_g}g Carbs</span>
                            <span>🧈 {recipe.nutrition.fat_g}g Fat</span>
                        </div>
                    </section>

                    {/* Tags */}
                    <footer className={styles.tags}>
                        {recipe.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                #{tag}
                            </span>
                        ))}
                    </footer>
                </article>
                <aside className={styles.sidebar}>
                    <h2 className={styles.formTitle}>Edit Recipe</h2>

                    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                        <input {...register("title")} placeholder="Title" />
                        <input {...register("category")} placeholder="Category" />
                        <input {...register("cuisine")} placeholder="Cuisine" />
                        <input {...register("image_url")} placeholder="Image URL" />

                        <textarea
                            {...register("description")}
                            rows="4"
                            placeholder="Description"

                        />

                        <button type="submit">Update Recipe</button>
                        <button className={styles.deleteButton} onClick={deleteHandler} >Delete</button>
                    </form>
                </aside>
            </div> : <h1>Loding...</h1>
    )
}

export default SingelRecipe