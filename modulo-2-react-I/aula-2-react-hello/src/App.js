import { dateCalc } from "./Helpers/DateCalc";
import { useEffect, useState } from "react";
import { getNewId } from "./Services/IdService";
import DataInput from "./components/DataInput";
import Header from "./components/Header";
import Main from "./components/Main";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";

export default function App() {
  //const state = useState('Flavio');
  //const name = state[0];
  //const setName = state[1];
  const [name, setName] = useState("Flávio");
  const [birthDate, setDate] = useState();
  const [showTimer, setShowTimer] = useState(false);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleDateChange(newBirthDate) {
    console.log(typeof newBirthDate, newBirthDate);
    setDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentShowtimer) => !currentShowtimer);
  }

  const age = dateCalc(birthDate);

  useEffect(() => {
    document.title = `react-hello-${name}`;
  }, [name]); // segundo parâmetro indica quando a página carrega novamente

  return (
    <>
      <Header size="large"> Projeto react-hello </Header>

      <Main>
        {showTimer && (
          <div className="text-right pt-3">
            <Timer />
          </div>
        )}

        <CheckboxInput
          inputId={getNewId()}
          dataType="checkbox"
          labelDescription="Mostrar cronômetro: "
          inputValue={name}
          onCheckboxChange={toggleShowTimer}
          autoFocus={true}
        />

        <DataInput
          inputId={getNewId()}
          dataType="text"
          labelDescription="Digite seu nome: "
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus={true}
        />

        <DataInput
          inputId={getNewId()}
          dataType="date"
          labelDescription="Digite sua data de nascimento: "
          inputValue={birthDate}
          onInputChange={handleDateChange}
          autoFocus={false}
        />

        <p>
          Seu nome é {name}, com {name.length} caracteres, e você possui {age}{" "}
          anos.
        </p>
      </Main>
    </>
  );
}

/*
<Test number={10} string="Texto" visible={false} objeto={{nome: "Flávio", cidade: "Porto Alegre"}}/>
*/
