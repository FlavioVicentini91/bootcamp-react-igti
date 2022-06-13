export default function TextInput({
    labelDescription = 'Descrição do label: ', 
    inputValue = 'Valor padrão do input',
    onInputChange = null,
}) {
  
    function handleInputChange({currentTarget}){
        if (onInputChange){
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }

    return (
        <div className="flex flex-col my-4" >
              <label htmlFor="iput-name" className="mb-2">
                {labelDescription}
                </label>
              <input 
                id="iput-name" 
                type="text" 
                className="border p-1 " 
                value={inputValue} 
                onChange={handleInputChange}
                />
        </div>

  );
}
