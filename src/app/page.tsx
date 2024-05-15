'use client';

import Title from "@/components/title/title";
import Item from "@/components/item/item";
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });
import Question from "@/components/question/question";
import dynamic from "next/dynamic";
import Logo from "@/assets/logo";
import { Dropdown, Menu } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Card from "@/components/card";
import Car from '../assets/car.png';
import Moto from '../assets/moto.png';
import Utilitarios from '../assets/utilitarios.png';
import Truck from '../assets/truck.png';

export default function Home() {
  const items = [
    "Roubo , Furto , Colisão e incêndio ",
    "Fenômenos naturais",
    "Terceiros",
    "Condutor livre",
    "Regulamentada pela SUSEP",
    "Guincho ilimitado para sinistro",
    "Terceiros"
  ];

  const questions = [
    {
      question: 'Você sabe que é SUSEP?',
      response: 'SUSEP é o Órgão regulador de seguros, ou seja uma Garantia de que você realmente vai ser indenizado caso precise.'
    },
    {
      question: 'E qual a diferença da Bem Protege Seguros e outras seguradoras?',
      response: 'Nós da Bem Protege te proporcionamos a segurança de uma asseguradora com SUSEP, e sem análise de perfil e condutor.'
    }
  ];

  function sendMessageSpeed() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AGostaria+de+fazer+uma+cota%C3%A7%C3%A3o."
    );
  }

  function sendMessageRacer() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+no+desconto+para+motorista+de+aplicativo."
    );
  }

  function sendMessageHelp() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1%2C+quero+tirar+uma+d%C3%BAvida."
    );
  }
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+na+prote%C3%A7%C3%A3o+para+meu+carro+de+passeio."
    );
  }
  const cards = [
    {
      title: 'CARROS',
      infos: [
        'Carros de passeio',
        'Carros de leilão',
        'Carros de aplicativo'
      ],
      handleAction: sendMessage,
      img: Car
    },
    {
      title: 'MOTOS',
      infos: [
        'Todas as cilindradas',
        'Motos de aplicativo',
        'Motos de delivery'
      ],
      handleAction: sendMessage,
      img: Moto
    },
    {
      title: 'UTILITÁRIOS',
      infos: [
        'SUV',
        'Caminhonetes',
        'Vans de carga'
      ],
      handleAction: sendMessage,
      img: Utilitarios
    },
    {
      title: 'CAMINHÕES',
      infos: [
        'Cavalo mecâcnico',
        'Agregados',
        'Implementos'
      ],
      handleAction: sendMessage,
      img: Truck
    }
  ]

  return (
    <main className="home">
      <header className="header">
        <Logo />
        <Button>FALAR AGORA</Button>
      </header>

      <section className="section-presentation dark-blue padding-df">
        <p>o SEGURO que conquistou o Brasil</p>
        <Title>
          <b><i className="blue-title">SEGURO<br /> AUTOS BP</i> <br /></b>
          Simples, Justo e sem Burocracia
        </Title>
        <p className="section-presentation_subtitle">
          Já são mais de <b>15 anos</b> oferecendo seguro e a melhor assistência 24 hrs em todo território nacional
        </p>
        <p className="for-autos">Carro, moto, vans e caminhão 100% da tabela Fipe</p>

        <ul>
          {items.map((item) => {
            return <Item key={item} text={item} />
          })}
        </ul>
      </section>

      {/* <section className="section-susep padding-df">
        <Title size="md">
          Segurança da SUSEP e preço Justo.
        </Title>
        <p className="description">
          Você já imaginou ter um seguro veicular <b>autorizado pela SUSEP</b>
          e que realmente pensa no seu bolso?
          <br />
          <br />
          A Bem Protege existe pra isso, unir o melhor dos dois mundos.
        </p>

        <ul className="questions">
          {questions.map(({ question, response }, index) => {
            console.log({ index })
            return <Question className={`${index == 1 ? 'isLargeQuestion' : ''}`} key={question} question={question} response={response} />
          })}
        </ul>
      </section> */}

      {/* <section className="section-app-racer padding-df">
        <Title size="md">
          Desconto especial pra motorista de aplicativo
        </Title>
        <p className="description">
          Nós da Bem Protege pensamos no seu bolso.
        </p>

        <div className="section-app-racer_apps">
          <App99 />
          <AppUber />
          <App99 />
          <AppUber />
          <App99 />
          <AppUber />
          <App99 />
          <AppUber />
        </div>

        <Button onClick={sendMessageRacer}>COTAÇÃO MOTORISTA APP</Button>
      </section> */}
      <h2 className="title-autos-section">Seguro veicular <span className="txt_dark-blue">para todos os perfis</span></h2>
      <section className="autos-section">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} infos={card.infos} img={card.img} handleAction={card.handleAction} />
        ))}

      </section>
      {/* <SectionCar />
      <SectionMotorcycle />
      <SectionTruck />
      <SectionOldCar />
      <SectionFleet />
      <SectionClients /> */}
    </main>
  );
}