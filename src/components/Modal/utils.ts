export const handleOnChange = (position: number, checked: boolean[], setChecked: Function) => {
    const updatedCheckedState = checked.map((item, index) =>
        index === position ? !item : item
    );
    setChecked(updatedCheckedState);
};
export const taxDeduction = (str: string, setChecked: Function): number[] => {
    if (str.split('')[0] === "0") return [];
    const regexp1 = /\d+/;
    const arr: number[] = [];
    const taxDeducPerYear: number = parseInt(str.match(regexp1)!.join(""))* 12 * 0.13;
    if (taxDeducPerYear >= 260000) {
        arr.push(260000);
        setChecked(new Array(arr.length).fill(false));
        return arr;
    }
    const divTux: number = Math.trunc(260000 / taxDeducPerYear);
    const modTux: number = (260000 % taxDeducPerYear !== 0) ? 260000 - (taxDeducPerYear * divTux) : 0;
    for (let i = 0; i < divTux; i++) {
        arr.push(taxDeducPerYear);
    }
    if (modTux !== 0) arr.push(modTux);
    setChecked(new Array(arr.length).fill(false));
    return arr;
};
export const rubSign = (str: string, setRubValue: Function)=> {
    const regexp1 = /\d+/;
    if (str.match(regexp1) === null) {
        setRubValue("")
    } else {
        setRubValue(`${str.match(regexp1)} ₽`)
    }
};