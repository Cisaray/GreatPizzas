import styles from './NotFounfBlock.module.scss'

export const NotFoundBlock = () =>{
    return(
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br/>
                Ничего не найдено
            </h1>
            <p>Данная страница отсутствует в нашем интернет магазине :(</p>
        </div>
    )
}