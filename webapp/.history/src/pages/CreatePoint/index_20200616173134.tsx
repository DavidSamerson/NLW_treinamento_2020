import React, {useEffect, useState} from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker} from 'react-leaflet';
import api from '../../services/api';

interface Item {
    id: number;
    titulo: string;
    image_url: string;
}

const CreatePoint = () => {

    const [items, setItems] = useState<Array<Item>>([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);

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
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={[-3.71839,  -38.5434]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-3.71839,  -38.5434]} />
                    </Map>

                    <div className="field-group">

                        <div className="field">
                            <label htmlFor="uf">
                                Estado (UF)
                            </label>
                            <select name="uf" id="uf">
                            <option value="0">Selecione uma UF</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">
                                Cidade
                            </label>
                            <select name="city" id="city">
                            <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de Coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>
                    <ul className="items-grid">
                    {items.map(item => {
                        return (
                            <li key={item.id}>
                                <img src={item.image_url} alt={item.titulo} />
                                <span>{item.titulo}</span>
                            </li>
                        );
                    })}
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
};

export default CreatePoint;