export default function CheckboxInput({
    inputId = 'ID do input',
    dataType = 'checkbox',
    labelDescription = 'Descrição do label: ', 
    inputValue = 'Valor padrão do input',
    onCheckboxChange = null,
    autoFocus = false
}) {
  
    function handleInputChange(){
        if (onCheckboxChange){
            onCheckboxChange();
        }
    }

    return (
        <div className="flex flex-row items-center space-x-2 my-4" >
            <input 
                id={inputId} 
                type={dataType} 
                className="border p-1 " 
                value={inputValue} 
                onChange={handleInputChange}
                autoFocus = {autoFocus}
            />
            <label htmlFor={inputId} >
                {labelDescription}
            </label>
        </div>

  );
}
