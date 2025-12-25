import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid'
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const { register, handleSubmit, reset } = useForm();

    const navigat = useNavigate();

    const { data, setData } = useContext(recipecontext);
    const submitHandler = (FormData) => {
        FormData.id = nanoid();

        const copydata = [...data];
        copydata.push(FormData);
        setData(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        
        toast.success("🎉Recipe created successfully")
        reset();
        navigat("/recipes");
    }
    return (

        <div className='w-full flex flex-col items-center my-10'>
            <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-xl p-8 text-white">

                <h2 className="text-2xl mb-6 text-center font-thin text-amber-400">
                    🍽️ Create New Recipe
                </h2>

                <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">

                    {/* Image URL */}
                    <div>
                        <input
                            {...register("image_url")}
                            type="url"
                            placeholder="Image URL"
                            className="w-full border-b outline-0 p-3 
                       focus:outline-none  focus:ring-amber-400"
                        />
                        <small className="text-red-400">error is here</small>
                    </div>

                    <div className='flex justify-between'>
                        {/* Category */}
                        <div>
                            <select
                                {...register("category")}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
                            >
                                <option value="">Select Category</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                            <small className="text-red-400">error is here</small>
                        </div>
                        <div className='w-[60%]'>
                            <input
                                {...register("title")}
                                type="text"
                                placeholder="Recipe Title"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <small className="text-red-400">error is here</small>
                        </div>
                    </div>
                    {/* Title */}


                    {/* Description */}
                    <div>
                        <textarea
                            {...register("description")}
                            placeholder="Start writing description..."
                            rows="3"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                        />
                        <small className="text-red-400">error is here</small>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <textarea
                            {...register("ingredients")}
                            placeholder="Ingredients (comma separated)"
                            rows="3"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                        />
                        <small className="text-red-400">error is here</small>
                    </div>

                    {/* Instructions */}
                    <div>
                        <textarea
                            {...register("instructions")}
                            placeholder="Instructions (comma separated)"
                            rows="3"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                        />
                        <small className="text-red-400">error is here</small>
                    </div>



                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-amber-500 text-gray-900 font-semibold py-3 
                     rounded-lg hover:bg-amber-400 transition-all duration-200
                     active:scale-95 shadow-lg"
                    >
                        Save Recipe
                    </button>

                </form>
            </div>
        </div>

    )
}

export default Create