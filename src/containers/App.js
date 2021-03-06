import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {addToCart} from '../actions';
import Header from '../components/Header';
import ItemList from '../components/Item-list';

import '../styles/main.css';
import './app.css';

class App extends Component {
    static propTypes = {
        // Injected by React Redux
        addToCart: PropTypes.func.isRequired,
        // Injected by React Router
        children: PropTypes.node
    }

    render() {
        const {children, inputValue, addToCart} = this.props;
        let items = [
            {
                "id": 0,
                "sku": 1838419,
                "title": "Smart TV LED 32” Samsung 32J4300 com Conversor Digital 2 HDMI 1 USB Wi-Fi Integrado",
                "brand": "Samsung",
                "image": "//static.wmobjects.com.br/imgres/arquivos/ids/4289414-220-220/smart-tv-led-32--samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado.jpg",
                "listPrice": "1.399,00",
                "price": "1.249,00",
                "currency": "R$",
                "rating": 4,
                "installments": [
                    {
                        "installmentAmount": 2,
                        "currency": "R$",
                        "valuePerInstallment": "624,50"
                    },
                    {
                        "installmentAmount": 3,
                        "currency": "R$",
                        "valuePerInstallment": "416,33"
                    },
                    {
                        "installmentAmount": 4,
                        "currency": "R$",
                        "valuePerInstallment": "312,25"
                    },
                    {
                        "installmentAmount": 5,
                        "currency": "R$",
                        "valuePerInstallment": "249,80"
                    },
                    {
                        "installmentAmount": 6,
                        "currency": "R$",
                        "valuePerInstallment": "208,17"
                    },
                    {
                        "installmentAmount": 7,
                        "currency": "R$",
                        "valuePerInstallment": "178,43"
                    },
                    {
                        "installmentAmount": 8,
                        "currency": "R$",
                        "valuePerInstallment": "156,12"
                    }
                ]
            },
            {
                "id": 1,
                "sku": 3374952,
                "title": "Smart TV LED 40” Samsung 40K5300 Full HD com Conversor Digital 2 HDMI 1 USB Wi-Fi Integrado",
                "brand": "Samsung",
                "image": "//static.wmobjects.com.br/imgres/arquivos/ids/9787997-220-220/smart-tv-led-40%E2%80%9D-samsung-40k5300-full-hd-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado.jpg",
                "listPrice": "2.499,00",
                "price": "1.799,90",
                "currency": "R$",
                "rating": 5,
                "installments": [
                    {
                        "installmentAmount": 2,
                        "currency": "R$",
                        "valuePerInstallment": "899,95"
                    },
                    {
                        "installmentAmount": 3,
                        "currency": "R$",
                        "valuePerInstallment": "599,97"
                    },
                    {
                        "installmentAmount": 4,
                        "currency": "R$",
                        "valuePerInstallment": "499,98"
                    },
                    {
                        "installmentAmount": 5,
                        "currency": "R$",
                        "valuePerInstallment": "359,98"
                    },
                    {
                        "installmentAmount": 6,
                        "currency": "R$",
                        "valuePerInstallment": "299,98"
                    },
                    {
                        "installmentAmount": 7,
                        "currency": "R$",
                        "valuePerInstallment": "257,13"
                    },
                    {
                        "installmentAmount": 8,
                        "currency": "R$",
                        "valuePerInstallment": "224,99"
                    }
                ]
            },
            {
                "id": 2,
                "sku": 2970452,
                "title": "Smart TV LED Curva 55” Ultra HD 4K Samsung 55KU6300 com HDR Conversor Digital 3 HDMI 2 USB Wi-Fi Integrado",
                "brand": "Samsung",
                "image": "//static.wmobjects.com.br/imgres/arquivos/ids/10009347-220-220/smart-tv-led-curva-55--ultra-hd-4k-samsung-55ku6300-com-hdr-conversor-digital-3-hdmi-2-usb-wi-fi-integrado.jpg",
                "listPrice": "4.499,00",
                "price": "3.999,00",
                "currency": "R$",
                "rating": 3,
                "installments": [
                    {
                        "installmentAmount": 2,
                        "currency": "R$",
                        "valuePerInstallment": "1.999,50"
                    },
                    {
                        "installmentAmount": 3,
                        "currency": "R$",
                        "valuePerInstallment": "1.333,00"
                    },
                    {
                        "installmentAmount": 4,
                        "currency": "R$",
                        "valuePerInstallment": "999,75"
                    },
                    {
                        "installmentAmount": 5,
                        "currency": "R$",
                        "valuePerInstallment": "799,80"
                    },
                    {
                        "installmentAmount": 6,
                        "currency": "R$",
                        "valuePerInstallment": "666,50"
                    },
                    {
                        "installmentAmount": 7,
                        "currency": "R$",
                        "valuePerInstallment": "571,29"
                    }
                ]
            },
            {
                "id": 3,
                "sku": 2584606,
                "title": "Smart TV LED 43” LG 43LH5700 Full HD Conversor Digital 2 HDMI 1 USB Painel IPS Wi-Fi integrado",
                "brand": "LG",
                "image": "//static.wmobjects.com.br/imgres/arquivos/ids/8451141-220-220/smart-tv-led-43--lg-43lh5700-full-hd-conversor-digital-2-hdmi-1-usb-painel-ips-wi-fi-integrado.jpg",
                "listPrice": "2.399,00",
                "price": "1.949,90",
                "currency": "R$",
                "rating": 4,
                "installments": [
                    {
                        "installmentAmount": 2,
                        "currency": "R$",
                        "valuePerInstallment": "974,95"
                    },
                    {
                        "installmentAmount": 3,
                        "currency": "R$",
                        "valuePerInstallment": "649,97"
                    },
                    {
                        "installmentAmount": 4,
                        "currency": "R$",
                        "valuePerInstallment": "487,48"
                    },
                    {
                        "installmentAmount": 5,
                        "currency": "R$",
                        "valuePerInstallment": "389,98"
                    },
                    {
                        "installmentAmount": 6,
                        "currency": "R$",
                        "valuePerInstallment": "324,98"
                    },
                    {
                        "installmentAmount": 7,
                        "currency": "R$",
                        "valuePerInstallment": "278,56"
                    }
                ]
            },
            {
                "id": 4,
                "sku": 1390316,
                "title": "Smart TV LED 43” Samsung 43J5200 Full HD com Conversor Digital 2 HDMI 1 USB Wi-fi integrado",
                "brand": "Samsung",
                "image": "//static.wmobjects.com.br/imgres/arquivos/ids/4708553-220-220/smart-tv-led-43--samsung-43j5200-full-hd-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado.jpg",
                "listPrice": "2.499,00",
                "price": "1.949,90",
                "currency": "R$",
                "rating": 5,
                "installments": [
                    {
                        "installmentAmount": 2,
                        "currency": "R$",
                        "valuePerInstallment": "974,95"
                    },
                    {
                        "installmentAmount": 3,
                        "currency": "R$",
                        "valuePerInstallment": "649,97"
                    },
                    {
                        "installmentAmount": 4,
                        "currency": "R$",
                        "valuePerInstallment": "487,48"
                    },
                    {
                        "installmentAmount": 5,
                        "currency": "R$",
                        "valuePerInstallment": "389,98"
                    },
                    {
                        "installmentAmount": 6,
                        "currency": "R$",
                        "valuePerInstallment": "324,98"
                    },
                    {
                        "installmentAmount": 7,
                        "currency": "R$",
                        "valuePerInstallment": "278,56"
                    },
                    {
                        "installmentAmount": 8,
                        "currency": "R$",
                        "valuePerInstallment": "243,74"
                    }
                ]
            },
            {
                "id": 5,
                "sku": 808229,
                "title": "Smart TV LED 58” Samsung UN58H5203AGXZD Full HD com Conversor Digital 2 HDMI 1 USB Wi-Fi Integrado Função Futebol",
                "brand": "Samsung",
                "image": "//static.wmobjects.com.br/imgres/arquivos/ids/10555277-220-220/smart-tv-led-58--samsung-un58h5203agxzd-full-hd-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado-funcao-futebol.jpg",
                "listPrice": "4.199,00",
                "price": "3.399,90",
                "currency": "R$",
                "rating": 4,
                "installments": [
                    {
                        "installmentAmount": 2,
                        "currency": "R$",
                        "valuePerInstallment": "1.699,50"
                    },
                    {
                        "installmentAmount": 3,
                        "currency": "R$",
                        "valuePerInstallment": "1.133,00"
                    },
                    {
                        "installmentAmount": 4,
                        "currency": "R$",
                        "valuePerInstallment": "849,75"
                    },
                    {
                        "installmentAmount": 5,
                        "currency": "R$",
                        "valuePerInstallment": "679,80"
                    },
                    {
                        "installmentAmount": 6,
                        "currency": "R$",
                        "valuePerInstallment": "566,50"
                    },
                    {
                        "installmentAmount": 7,
                        "currency": "R$",
                        "valuePerInstallment": "485,57"
                    }
                ]
            }
        ];

        return (
            <div className="app">
                <Header></Header>
                <div className="main">
                    <ItemList items={items} addMethod={addToCart}></ItemList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {
    addToCart
})(App)
