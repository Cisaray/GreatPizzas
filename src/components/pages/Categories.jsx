import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice";

export const Categories = () => {
    const dispatch = useDispatch();
    const categoryId = useSelector(state => state.filter.categoryId);

    const categoriesData = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]
    return (
        <div className="categories">
            <ul>
                {categoriesData.map((categoryName, i) =>
                    <li className={categoryId === i ? "active" : null}
                        onClick={() => dispatch(setCategoryId(i))}
                        key={i}>
                        {categoryName}
                    </li>
                )}
            </ul>
        </div>
    )
}