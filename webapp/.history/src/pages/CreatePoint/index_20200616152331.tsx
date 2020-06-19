import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para a home.
                </Link>
            </header>

            <form action="">
                <h1>Cadastro do <br /> ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">
                            Nome da entidade
                        </label>
                        <input 
                            id="name"
                            name="name"
                            type="text"
                        />
                    </div>

                    <div className="field-group">

                        <div className="field">
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="Whatsapp">
                            Whatsapp
                        </label>
                        <input 
                            id="Whatsapp"
                            name="Whatsapp"
                            type="text"
                        />
                    </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                    </legend>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de Coleta</h2>
                    </legend>
                </fieldset>
            </form>
        </div>
    )
};

export default CreatePoint;