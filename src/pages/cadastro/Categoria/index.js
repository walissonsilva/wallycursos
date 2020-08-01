import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infoDoEvento) {
    setValue(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setCategorias(data);
        }
    });
  }, [values.nome]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias, values.nome,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <div style={{ background: values.cor }}>
          <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} handleChange={handleChange} />

          <FormField label="Descrição da Categoria" type="textarea" name="descricao" value={values.descricao} handleChange={handleChange} />

          <FormField label="Cor" type="color" name="cor" value={values.cor} handleChange={handleChange} />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default Categoria;
