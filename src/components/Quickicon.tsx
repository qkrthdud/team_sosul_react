import React, {useEffect, useState} from 'react';
import { supabase } from '../lib/supabaseClient';
import type { Category } from '../types/common';

import { Link, useLocation } from 'react-router-dom';
import '../scss/quickicon.hyuna.scss';

interface QuickiconProps {
    activetab?: string;
  }
  
const Quickicon: React.FC<QuickiconProps> = ({ activetab }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loding, setLoding] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        console.log('location.pathname 변경됨 →', location.pathname);
    }, [location.pathname]);
 

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
                        <li key={category.id} id={`category_${category.id}`} >
                            <Link to={`/product/list/${category.route}`} className={activetab === category.route ? 'active' : ''} >
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