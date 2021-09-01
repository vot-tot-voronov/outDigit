import React, { useRef, useState, useEffect } from 'react'
import {handleOnChange, taxDeduction, rubSign} from './utils';
interface modalProps {
    active: boolean;
    setActive: Function;
}
const Modal: React.FC<modalProps> = ({active, setActive}) => {
    // checkbox managment
    const [checked, setChecked] = useState<boolean[]>([]); // checking - was some checkbox clicked or not
    const [taxElem, setTaxElem] = useState<number[]>([]); // an array of tax for every year
    // checkbox managment
    const [inputErr, setInputErr] = useState<boolean>(false) // if the input is empty the user will see the error message
    const [rubValue, setRubValue] = useState<string>(""); //input value
    
    const [whatDecrease, setWhatDecrease] = useState<boolean>(true); // toggle of buttons "Платеж" and "Срок"
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current?.setSelectionRange(ref.current?.value.length - 2, ref.current?.value.length - 2);
    }, [rubValue]);
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {
            setActive(false);
            setTaxElem([]);
            setChecked([]);
            setRubValue("");
        }}>
            <div className="modal__wrapper">
                <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                    <button className="modal__close" onClick={() => {
                        setActive(false);
                        setTaxElem([]);
                        setChecked([]);
                        setRubValue("");
                    }}></button>
                    <h1 className="modal__title">Налоговый вычет</h1>
                    <p className="modal__text">
                        Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
                        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
                    </p>
                    <div className="modal__rubBlock">
                        <label htmlFor="modal__rub" className="modal__labelRub">Ваша зарплата в месяц</label>
                        <input 
                            ref={ref}
                            type="text"
                            id="modal__rub"
                            className={inputErr ? "modal__inputRub modal__inputRub--error" : "modal__inputRub"}
                            name="rub"
                            placeholder="Введите данные"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => rubSign(e.target.value, setRubValue)}
                            value={rubValue}
                        />
                        <p className={inputErr ? "modal__error modal__error--true" 
                                : "modal__error modal__error--false"}>
                            Поле обязательно для заполнения
                        </p>
                    </div>
                    <button className="modal__calc" onClick={() => {
                        if(rubValue === '') {
                            setInputErr(true);
                        } else {
                            if (inputErr) setInputErr(false);
                            setTaxElem(taxDeduction(rubValue, setChecked));
                        }
                        }}>
                            Рассчитать
                    </button>
                    {taxElem.length === 0 ?
                        <></>
                        :
                        <div className="modal__sum">
                            <p className="modal__sumTitle">Итого можете внести в качестве досрочных:</p>
                            {taxElem.map((elem, index) => {
                                return (
                                    <div key={index} className="modal__checkbox-line">
                                        <input 
                                            type="checkbox"
                                            id={`modal__checkbox${index + 1}`}
                                            className="modal__checkbox"
                                            name={`year: ${index + 1}`}
                                            value={index+1}
                                            onChange={() => handleOnChange(index, checked, setChecked)}
                                            checked={checked[index]}
                                        />
                                        <label htmlFor={`modal__checkbox${index + 1}`}>
                                            {elem.toLocaleString()} рублей<span className="modal__checkbox--span">&#160;в {index + 1}-ый год</span>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    }
                    <div className="modal__decrease">
                        <p className="modal__decreaseText">Что уменшьшаем?</p>
                        <div className="modal__decreaseBlock">
                            <button 
                                onClick={() => setWhatDecrease(true)} 
                                className={whatDecrease ? "modal__decreaseBtn modal__decreaseBtn--active" :
                                    "modal__decreaseBtn"}
                                >
                                Платёж
                            </button>
                            <button 
                                onClick={() => setWhatDecrease(false)} 
                                className={whatDecrease ? "modal__decreaseBtn" :
                                    "modal__decreaseBtn modal__decreaseBtn--active"}
                                >
                                Срок
                            </button>
                        </div>
                    </div>
                    <button className="modal__add">Добавить</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal
