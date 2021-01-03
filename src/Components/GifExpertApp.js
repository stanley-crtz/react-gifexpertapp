import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch Man']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {categories.map((val, i) => 
                    <GifGrid 
                        key={val}
                        category={val}
                    />
                )}
            </ol>
        </>
    )
}
