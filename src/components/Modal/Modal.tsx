import React, { useRef, useState, useEffect } from 'react'

interface modalProps {
    active: boolean;
    setActive: Function;
}

const Modal: React.FC<modalProps> = ({active, setActive}) => {
    const [checked, setChecked] = useState<boolean[]>([]);
    const [inputErr, setInputErr] = useState<boolean>(false)
    const [rubValue, setRubValue] = useState<string>("");
    const [tuxElem, setTuxElem] = useState<number[]>([]);
    const [whatDecrease, setWhatDecrease] = useState<boolean>(true);
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current?.setSelectionRange(ref.current?.value.length - 2, ref.current?.value.length - 2);
    }, [rubValue]);
    
    const rubSign = (str: string)=> {
        const regexp1 = /\d+/;
        if (str.match(regexp1) === null) {
            setRubValue("")
        } else {
            setRubValue(`${str.match(regexp1)} ₽`)
        }
    }
    const tuxDeduction = (str: string): number[] => {
        const regexp1 = /\d+/;
        const arr: number[] = [];
        const tuxDeducPerYear: number = parseInt(str.match(regexp1)!.join(""))* 12 * 0.13;
        if (tuxDeducPerYear >= 260000) {
            arr.push(260000);
            setChecked(new Array(arr.length).fill(false));
            return arr;
        }
        const divTux: number = Math.trunc(260000 / tuxDeducPerYear);
        const modTux: number = (260000 % tuxDeducPerYear !== 0) ? 260000 - (tuxDeducPerYear * divTux) : 0;
        for (let i = 0; i < divTux; i++) {
            arr.push(tuxDeducPerYear);
        }
        if (modTux !== 0) arr.push(modTux);
        setChecked(new Array(arr.length).fill(false));
        return arr;
    }
    const handleOnChange = (position: number) => {
        console.log(position)
        const updatedCheckedState = checked.map((item, index) =>
            index === position ? !item : item
        );
        setChecked(updatedCheckedState);
    }
    
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
                        ref={ref}
                        type="text"
                        id="modal__rub"
                        className={inputErr ? "modal__inputRub modal__inputRub--error" : "modal__inputRub"}
                        name="rub"
                        placeholder="Введите данные"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => rubSign(e.target.value)}
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
                        setTuxElem(tuxDeduction(rubValue));
                    }
                    }}>
                        Рассчитать
                </button>
                {tuxElem.length === 0 ?
                    <></>
                    :
                    <div className="modal__sum">
                        <p className="modal__sumTitle">Итого можете внести в качестве досрочных:</p>
                        {tuxElem.map((elem, index) => {
                            return (
                                <div key={index} className="modal__checkbox-line">
                                    <input 
                                        type="checkbox"
                                        id={`modal__checkbox${index + 1}`}
                                        className="modal__checkbox"
                                        name={`year: ${index + 1}`}
                                        value={index+1}
                                        onChange={() => handleOnChange(index)}
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
    )
}

export default Modal
