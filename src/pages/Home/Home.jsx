import React from 'react'
import Header from '../../components/Header/HeaderHome/Header'
import Card1 from '../../components/Cards/Card1/Card1'
import Card2 from '../../components/Cards/Card2/Card2'
import './Home.css'
import { Link } from 'react-router-dom'
import CardAvRestaurante from '../../components/Cards/CardAvRestaurante/CardAvRestaurante'
import Footer from '../../components/Footer/Footer'


function Home() {
    return (
        <div className="home">
            <Header/>
            <main className="main-home">
                <div>
                    <h1 className="h1-home">Comes&#38;bebes</h1>
                    <p className="p1-home">O serviço que tem a cara da sua fome!</p>
                </div>

                <div className="display-cards-home">
                    <div><Card1/></div>
                    <div><Card2/></div>
                </div>

                <hr className="hr-home"/>

                <h3 className="h3-home">Conheça nossos restaurantes</h3>

                <div className="cards-restaurant-group-home">
                    <CardAvRestaurante/>
                    <CardAvRestaurante/>
                    <CardAvRestaurante/>
                </div>
                <Footer/>
            </main>

            
        </div>
    )
}

export default Home