'use client';

import Title from "@/components/title/title";
import Item from "@/components/item/item";
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });
import Question from "@/components/question/question";
import dynamic from "next/dynamic";
import Image from 'next/image';

import Logo from "@/assets/logo";
import { Button as AntButton, Menu, Carousel } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Card from "@/components/card";
import Car from '../assets/car.png';
import Moto from '../assets/moto.png';
import Utilitarios from '../assets/utilitarios.png';
import Truck from '../assets/truck.png';
import Frota from '../assets/frota.png';
import Guincho from '../assets/guincho.png';
import Assistencia from '../assets/assistencia.png';
import CardInfo from "@/components/cardInfo/cardInfo";
import Furto from "@/assets/furto.png";
import Pane from "@/assets/pane.png";
import Protecao from "@/assets/protecao.png";
import Guinchado from "@/assets/guinchado.png";
import Cadastro from "@/assets/cadastro.png";
import Isac from "@/assets/isac.png";
import CheckIcon from "@/assets/check";
import LineTitle from "@/assets/LineTitle";
import Footer from "@/components/footer/footer";


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
    },
    {
      title: 'FROTA',
      infos: [
        'Frota de caminhões',
        'Frota de carros',
        'Frota de motos',
        'Frota para locações',
        'Condutor Livre',
      ],
      handleAction: sendMessage,
      img: Frota
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


      <section className="autos-section bgGray">
        <h2 className="title-autos-section">Seguro veicular <span className="txt_dark-blue">para todos os perfis</span></h2>

        {cards.map((card) => (
          <Card key={card.title} title={card.title} infos={card.infos} img={card.img} handleAction={card.handleAction} />
        ))}

      </section>

      <section className="section-institution">
        <h2>Vídeo institucional</h2>
        <iframe className="video" src="https://www.youtube.com/embed/j839KvpY36Q?si=1GhTlBB7h4FAfvhz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <h2 className="section-institution_title-info">
          São mais de 15 anos de mercado, a Bem Protege é um grupo que possui mais de 20 empresas. <span className="txt_dark-blue">Somos líder em Seguro Autos</span>.
        </h2>

        <p className="section-institution_description-info">
          Pensando em situações que motoristas enfrentam diariamente, criamos um serviço de seguro que se adapta às necessidades individuais dos beneficiários.
          <br />
          <br />

          Desde o início, estamos comprometidos em entregar qualidade, com preços acessíveis.
          Em 2020, iniciamos a nossa parceria com o <b>Gusttavo Lima</b>. Hoje, o Embaixador é sócio e um dos donos da BEM PROTEGE
          <br />
          <br />

          Com a qualidade dos nossos produtos e a confiança do Embaixador, a Bem Protege não para de crescer. Somos a marca que conquistou o Brasil!
        </p>
        <p className="show-me-details txt_dark-blue">CONFIRA TODOS OS BENEFÍCIOS</p>

        <div className="containerCardsInfo">

          <CardInfo
            img={{ src: Furto, alt: 'imagem de homem tentando furtar  carro' }}
            title="Furto e roubo"
            text="Com a BP, você pode se sentir protegido em todo lugar, a qualquer momento"
          />
          <CardInfo
            img={{ src: Guincho, alt: 'imagem de homem tentando furtar  carro' }}
            title="Guincho ilimitado (sinistro)"
            text="Você pode ter um serviço de até 1000km (somando a ida com a volta) em todo o território nacional"
          />
          <CardInfo
            img={{ src: Assistencia, alt: 'imagem de homem tentando furtar  carro' }}
            title="Assistência 24 horas"
            text="Nossa equipe conta com especialistas para atender você 24 horas por dia"
          />
          <CardInfo
            img={{ src: Pane, alt: 'imagem de homem tentando furtar  carro' }}
            title="Pane elétrica e mecânica"
            text="Evite estresse desnecessário, escolha a BP e garanta sua tranquilidade"
          />
        </div>
      </section>

      <section>
        <div className="carr-protection padding bgGray">
          <Image src={Protecao} alt="Carro com proteção" />

          <div className="carr-protection_container-title">
            <LineTitle />
            <h2 className="carr-protection_title">SEGURO(RCF) PARA TERCEIROS</h2>
          </div>
          <h3 className="carr-protection_subTitle">Seguro(RCF) para terceiros <span className="txt_dark-blue">até 100 mil</span></h3>

          <p className="carr-protection_description">Quer ficar despreocupado com custos inesperados e dar a si mesmo a tranquilidade que você merece? O nosso seguro para terceiros possui cobertura de até 100 mil reais!</p>

          <ul>
            <li>
              <CheckIcon /> <p>Conserto rápido</p>
            </li>
            <li>
              <CheckIcon /> <p>Melhores oficinas</p>
            </li>
            <li>
              <CheckIcon />  <p>Assistência por telefone e aplicativo</p>
            </li>
            <li>
              <CheckIcon /> <p>Até R$ 100.000</p>
            </li>
          </ul>

          <Button onClick={sendMessage}>FAÇA UMA COTAÇÃO AGORA</Button>
        </div>
      </section>

      <section>
        <div className="carr-protection padding">
          <Image style={{ marginBottom: '18px' }} src={Guinchado} alt="Carro com proteção" />

          <div className="carr-protection_container-title">
            <LineTitle />
            <h2 className="carr-protection_title">ASSISTÊNCIA 24 HORAS</h2>
          </div>
          <h3 className="carr-protection_subTitle"><span className="txt_dark-blue">Assistência 24h</span> em todo o território nacional</h3>

          <p className="carr-protection_description">Oferecemos uma assistência completa e disponível 24 horas por dia, em todo o território nacional. Isso significa que você pode contar com ajuda profissional e imediata em qualquer lugar do país, não importa a hora ou situação.</p>

          <ul>
            <li>
              <CheckIcon /> <p>Cobertura completa</p>
            </li>
            <li>
              <CheckIcon /> <p>Atendimento humanizado</p>
            </li>
            <li>
              <CheckIcon />  <p>Assistência rápida</p>
            </li>
          </ul>

          <Button onClick={sendMessage}>FAÇA UMA COTAÇÃO AGORA</Button>
        </div>
      </section>

      <section>
        <div className="carr-protection padding bgGray">
          <Image src={Cadastro} alt="Carro com proteção" quality={100} />

          <div className="carr-protection_container-title">
            <LineTitle />
            <h2 className="carr-protection_title">CADASTRO FÁCIL</h2>
          </div>
          <h3 className="carr-protection_subTitle">Cadastro fácil, rápido e <span className="txt_dark-blue">sem análise</span> de perfil  do condutor</h3>

          <p className="carr-protection_description">Não levamos em consideração o histórico do condutor para a contratação do seguro.
            <br />
            <br />
            Tudo é feito de forma prática e rápida, sem burocracia e enrolação!
          </p>

          <ul>
            <li>
              <CheckIcon /> <p>Sem análise de perfil</p>
            </li>
            <li>
              <CheckIcon /> <p>Sem análise ao SPC/SERASA</p>
            </li>
          </ul>

          <Button onClick={sendMessage}>FAÇA UMA COTAÇÃO AGORA</Button>
        </div>
      </section>

      <section className="consultant padding">
        <h2 className="consultant_title txt_dark-blue">Alô Corretor / Consultor</h2>
        <p className="consultant_info">
          Você sabia que pode ser dono do seu <b>próprio negócio</b>, no mercado que mais cresce no Brasil?
          <br />
          <br />
          Com a BEM PROTEGE você pode conquistar sua <b>independência financeira</b>, com flexibilidade de horários e possibilidade de aumento de ganhos todos os meses!
          <br />
          <br />
          SEJA UM CONSULTOR <br />
          PARTICIPE DO MELHOR TIME DE CONSULTORES DO BRASIL</p>

        <iframe className="video" src="https://www.youtube.com/embed/jN1-2CGGVWQ?si=0osnoSVMEqQvthyL" title="YouTube video player" />
        <Button onClick={sendMessage}>SEJA UM CONSULTOR BP</Button>
      </section>

      <section className="padding insta bgGray">
        <div className="insta_bg-img-container">
          <Image src={Isac} alt="Isac Arena" quality={100} />
          <div className="bgGradient" />
          <h2 className="insta_title">Acompanhe nosso trabalho no Instagram Já são mais de <span className="blue">100 mil seguidores</span> e mais de <span className="blue">2700 feedbacks</span></h2>
          <Button className="BtnInsta" onClick={sendMessage}>arenabemprotege</Button>
        </div>
      </section>

      <Footer />
    </main >
  );
}