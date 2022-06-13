export default function DataInput({
    inputId = 'ID do input',
    dataType = 'text',
    labelDescription = 'Descrição do label: ', 
    inputValue = 'Valor padrão do input',
    onInputChange = null,
    autoFocus = false
}) {
  
    function handleInputChange({currentTarget}){
        if (onInputChange){
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }

    return (
        <div className="flex flex-col my-4" >
            <label htmlFor={inputId} className="mb-2">
                {labelDescription}
            </label>
            <input 
                id={inputId} 
                type={dataType} 
                className="border p-1 " 
                value={inputValue} 
                onChange={handleInputChange}
                autoFocus = {autoFocus}
            />
        </div>

  );
}
