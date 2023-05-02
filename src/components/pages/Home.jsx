import React from "react";
import axios from "axios";
import qs from 'qs';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Categories} from "./Categories";
import {list, SortMenu} from "./SortMenu";
import {Pagination} from "../pagination/Pagination";
import {setCurrentPage, setFilters} from '../../redux/slices/filterSlice'
import {Skeleton} from "../pizzaBlock/Skeleton";
import {PizzaCard} from "../pizzaBlock/pizzaCard";

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.search.searchValue);
    const {categoryId, sort, currentPage} = useSelector(state => state.filter);
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const [pizzaData, setPizzaData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const pizzas = pizzaData.map((items) => <PizzaCard key={items.id} {...items}/>);
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);
    const fetchPizzas = () => {
        (async () => {
            try {
                setIsLoading(true)
                axios.get(`http://localhost:3000/pizzaData?_page=${currentPage}&_limit=4&${
                    categoryId > 0 ? `category=${categoryId}` : ''
                }&_sort=${sort.sortProperty}&${sort.sortProperty === `rating` ? `_order=desc` : `_order=asc`
                }&q=${searchValue}`)
                    .then(res => {
                        setPizzaData(res.data)
                        setIsLoading(false)
                    })
            } catch (error) {
                alert('Ошибка при загрузке данных')
            }
        })()
    }

    React.useEffect(()=> {
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find(obj=>obj.sortProperty === params.sortProperty)
            dispatch(
                setFilters({
                    ...params,
                    sort
                })
            )
            isSearch.current = true;
        }
    },[])
    React.useEffect(() => {
        if(!isSearch.current){
            fetchPizzas();
        }
        isSearch.current = false

    }, [searchValue, currentPage, categoryId, sort])git remote add origin https://github.com/Cisaray/GreatPizzas.git
    React.useEffect(()=>{
        if(isMounted.current){
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
    }, [currentPage, categoryId, sort])

    return (
        <div className="content">
            <div className="container">
                <div className='content__top'>
                    <Categories/>
                    <SortMenu/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeletons : pizzas}
                </div>
                <Pagination currentPage={currentPage} onChangePage={(num) => dispatch(setCurrentPage(num))}/>
            </div>
        </div>
    )
}


