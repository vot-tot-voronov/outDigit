import React from 'react'

interface modalProps {
    active: boolean;
    setActive: Function;
}

const Modal: React.FC<modalProps> = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={() => setActive(false)}></button>
                <h1 className="modal__title">Налоговый вычет</h1>
                <p className="modal__text">
                    Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
                    Размер налогового вычета составляет не более 13% от своего официального годового дохода.
                </p>
                <div className="modal__rubBlock">
                    <label htmlFor="modal__rub" className="modal__labelRub">Ваша зарплата в месяц</label>
                    <input 
                        type="text"
                        id="modal__rub"
                        className="modal__inputRub"
                        name="rub"
                        placeholder="Введите данные"
                    />
                    <p className="modal__error">Поле обязательно для заполнения</p>
                </div>
                <button className="modal__calc">Рассчитать</button>
                <div className="modal__decrease">
                    <p className="modal__decreaseText">Что уменшьшаем?</p>
                    <button className="modal__decreaseBtn modal__decreaseBtn--active">Платёж</button>
                    <button className="modal__decreaseBtn">Срок</button>
                </div>
                <button className="modal__add">Добавить</button>
            </div>
        </div>
    )
}

export default Modal
