import styles from './SearchBlock.module.scss'
import React from "react";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/searchSlice";
import debounce from "lodash.debounce";


export const SearchBlock = () => {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch();
    const inputRef = React.useRef();

    const onClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus();
    }
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 400), []
    )
    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.root}>
            <svg className={styles.icon}
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title/>
                <g data-name="Layer 3" id="Layer_3">
                    <path className="cls-1"
                          d="M11,22A10,10,0,1,1,21,12,10,10,0,0,1,11,22ZM11,4a8,8,0,1,0,8,8A8,8,0,0,0,11,4Z"/>
                    <path className="cls-1"
                          d="M28,29.74a3,3,0,0,1-1.93-.7L19.94,23.9a3,3,0,0,1,3.86-4.6l6.13,5.14A3,3,0,0,1,28,29.74ZM21.87,20.6h-.09a1,1,0,0,0-.55,1.77l6.13,5.14a1,1,0,0,0,1.41-.12,1,1,0,0,0,.23-.73,1,1,0,0,0-.36-.68l-6.13-5.15A1,1,0,0,0,21.87,20.6Z"/>
                    <path className="cls-1"
                          d="M20,21a1,1,0,0,1-.64-.23L17,18.82a1,1,0,0,1,1.28-1.54l2.34,1.95a1,1,0,0,1,.13,1.41A1,1,0,0,1,20,21Z"/>
                </g>
            </svg>
            <input onChange={onChangeInput}
                   className={styles.input} type="text"
                   placeholder='Поиск пиццы...'
                   value={value}
                   ref={inputRef}
            />
            {value && < svg onClick={onClear}
                            className={styles.closeIcon}
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512">
                <linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="256" x2="256" y1="512"
                                y2="-9.094947e-013">
                    <stop offset="0"/>
                    <stop offset="1"/>
                </linearGradient>
                <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256"/>
                <path
                    d="M268.7,256l119.6-119.6c3.2-3.2,3.2-8.3,0-11.4c-3.2-3.2-8.3-3.2-11.4,0L257.2,244.6L135.1,122.5
                    c-3.2-3.2-8.3-3.2-11.4,0c-3.2,3.2-3.2,8.3,0,11.4L245.8,256L123.7,378.1c-3.2,3.2-3.2,8.3,0,11.4c1.6,1.6,3.7,2.4,5.7,2.4
                    c2.1,0,4.1-0.8,5.7-2.4l122.1-122.1l119.6,119.6c1.6,1.6,3.7,2.4,5.7,2.4c2.1,0,4.1-0.8,5.7-2.4c3.2-3.2,3.2-8.3,0-11.4L268.7,256z"
                    fill="#FFFFFF"/>
            </svg>}
        </div>

    )
}