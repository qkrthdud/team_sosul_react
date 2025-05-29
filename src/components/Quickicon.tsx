import React, {useEffect, useState} from 'react';
import { supabase } from '../lib/supabaseClien';
import type { Category } from '../types/common';

import { Link } from 'react-router-dom';
import '../scss/quickicon.hyuna.scss';

const Quickicon:React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loding, setLoding] = useState<boolean>(true);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data, error } = await supabase
                    .from('categories')
                    .select('*')
                    .eq('is_active', true)
                    .order('decide', { ascending: true });

                if (error) {
                    throw error;
                }

                setCategories(data || []);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoding(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <ul className="h_main_quickmenu">
            {
                loding ? (
                    <li className="loading">Loading...</li>
                ) : (
                    categories.map((category) => (
                        <li key={category.id} id={`category_${category.id}`}>
                            <Link to={`/product/list/${category.route}`}>
                                {category.icon_svg ? (
                                    <span dangerouslySetInnerHTML={{ __html: category.icon_svg }} />
                                ) : (
                                    <img src={category.icon_url} alt={category.name} />
                                )}
                                <span>{category.name}</span>
                            </Link>
                        </li>
                    ))
                )
            }   
    
</ul>
    );
};

export default Quickicon;