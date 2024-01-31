import React from 'react';
import {categories} from '../data/Data'
const Categories = () => {
    console.log(Categories)
    return (
        <div className='max-w-[1520px] m-auto px-4 py-4'>
             <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
                 Trendong Categorie</h1>
            <div className='grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2 flex justify-center items-center p-4'>
                {categories.map((item)=>{
                    return <div
                        key={item.id}
                        className=' hover:scale-105 duration-300'>
                        <img className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl'
                        src={item.image}
                             alt={item.name}
                        />
                    </div>
                })}
            </div>
        </div>
    );
};

export default Categories;