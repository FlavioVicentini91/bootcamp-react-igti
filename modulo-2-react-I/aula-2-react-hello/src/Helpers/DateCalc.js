export function dateCalc(date){

    if (!date){
        return "?";
    }

    console.log(date);
    const [birthYear, birthMonth, birthDay] = date.split("-");
    
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // the month is 0-indexed
    const day = today.getDate();
    
    console.log(`Birthday = ${birthYear}-${birthMonth}-${birthDay}`);
    console.log(`Today = ${year}-${month}-${day}`);
    
    if (month > parseInt(birthMonth, 10)){
        return year - parseInt(birthYear, 10);
    }

    if (day < parseInt(birthDay, 10) && month <= parseInt(birthMonth, 10)){
        return (year - parseInt(birthYear)) -1;
    }

    return year - parseInt(birthYear, 10);
}
