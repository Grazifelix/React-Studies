import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  //variaveis
  const NAME = "Graziela"
  const newName = NAME.toUpperCase()

  const url = "https://via.placeholder.com/150"

  //função
  function sum(num1, num2){
    return num1+num2
  }

  
  return (
    //No react o nome class é uma palavra reservada, desse modo se utiliza o className
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(2, 2)}</p>

      {/*Adicionando Imagem*/}
      <img src={url} alt="Minha imagem"/>
 
      <HelloWorld/>
    </div>
  );
}

export default App;
