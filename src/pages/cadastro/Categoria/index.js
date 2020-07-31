import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function Categoria() {
	const valoresIniciais = {
		nome: '',
		descricao: '',
		cor: ''
	}
	const [categorias, setCategorias] = useState([])
	const [values, setValues] = useState(valoresIniciais)

	function setValue(key, value) {
		setValues({
			...values,
			[key]: value
		})
	}

	function handleChange(infoDoEvento) {
		setValue(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value)
	}

	return (
		<PageDefault>
			<h1>Cadastro de Categoria: {values.nome}</h1>

			<form onSubmit={function handleSubmit(infosDoEvento) {
					infosDoEvento.preventDefault()
					
					setCategorias([
						...categorias, values.nome
					])

					setValues(valoresIniciais)
				}}>
				
				<div style={{background: values.cor}}>
					<FormField label='Nome da Categoria: ' type='text'  name='nome' value={values.nome} handleChange={handleChange} />

					<FormField label='Descrição da Categoria: ' type='text' name='descricao' value={values.descricao} handleChange={handleChange} />

					<FormField label='Cor: ' type='color' name='cor' value={values.cor} handleChange={handleChange} />
				</div>

				<ul>
					{categorias.map((categoria, indice) => {
						return (
							<li key={`${categoria}${indice}`}>{categoria}</li>
						)
					})}
				</ul>

				<button>
				  Cadastrar
				</button>
			</form>


			<Link to="/">
				Ir para home
			</Link>
		</PageDefault>
	)
}

export default Categoria