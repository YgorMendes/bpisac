'use client';

import Title from "@/components/title/title";
import Item from "@/components/item/item";
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });
import Question from "@/components/question/question";
import dynamic from "next/dynamic";
import Image from 'next/image';
import Logo from "@/assets/logo";
import { InstagramFilled, QuestionCircleOutlined, WhatsAppOutlined } from "@ant-design/icons";
import Card from "@/components/card";
import Car from '../assets/car.png';
import Motocicle from '../assets/motocycle.webp';
import Utilitarios from '../assets/utilitarios.png';
import Truck from '../assets/truck.png';
import Frota from '../assets/frota.png';
import Guincho from '../assets/guincho.webp';
import Assistencia from '../assets/callcenter.jpg';
import CardInfo from "@/components/cardInfo/cardInfo";
import Furto from "@/assets/furto.jpg";
import Pane from "@/assets/pane.jpg";
import Protecao from "@/assets/protecao.png";
import Guinchado from "@/assets/guinchado.png";
import Cadastro from "@/assets/cadastro.png";
import Isac from "@/assets/isac.png";
import CheckIcon from "@/assets/check";
import LineTitle from "@/assets/LineTitle";
import Footer from "@/components/footer/footer";
import ZapIcon from "@/assets/ZapIcon";
import { useRef } from "react";


export default function Home() {
  const targetRef: any = useRef(null);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    "Roubo , Furto , Colisão e incêndio ",
    "Fenômenos naturais",
    "Terceiros",
    "Condutor livre",
    "Regulamentada pela SUSEP",
    "Guincho ilimitado para sinistro",
    "Terceiros"
  ];

  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0APreciso+de+SEGURO+para+minha+CONQUISTA%21"
    );
  }

  function sendMessageCar() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0APreciso+de+SEGURO+para+minha+CONQUISTA%21+🚗"
    );
  }

  function sendMessageMotocycle() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0APreciso+de+SEGURO+para+minha+CONQUISTA%21+🏍️"
    );
  }

  function sendMessageUtilities() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0APreciso+de+SEGURO+para+minha+CONQUISTA%21+%F0%9F%9A%90%F0%9F%9B%BB"
    );
  }

  function sendMessageTruck() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0APreciso+de+SEGURO+para+minha+CONQUISTA%21+%F0%9F%9A%9B"
    );
  }

  function sendMessageFrota() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0APreciso+de+SEGURO+para+minha+FROTA%21+%F0%9F%9A%9B%F0%9F%9A%9B%F0%9F%9A%90%F0%9F%9A%90%F0%9F%9A%97%F0%9F%9A%97%F0%9F%9B%B5%F0%9F%9B%B5"
    );
  }

  function sendMessageConsultant() {
    window.open(
      "https://api.whatsapp.com/send?phone=5511965618576&text=Ol%C3%A1+Arena%0A%0AGostaria+de+saber+mais+sobre+essa+OPORTUNIDADE+%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB%0A%23querovoarnabp"
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
      handleAction: sendMessageCar,
      img: Car
    },
    {
      title: 'MOTOS',
      infos: [
        'Todas as cilindradas',
        'Motos de aplicativo',
        'Motos de delivery'
      ],
      handleAction: sendMessageMotocycle,
      img: Motocicle
    },
    {
      title: 'UTILITÁRIOS',
      infos: [
        'SUV',
        'Caminhonetes',
        'Vans de carga'
      ],
      handleAction: sendMessageUtilities,
      img: Utilitarios
    },
    {
      title: 'CAMINHÕES',
      infos: [
        'Cavalo mecâcnico',
        'Agregados',
        'Implementos'
      ],
      handleAction: sendMessageTruck,
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
      handleAction: sendMessageFrota,
      img: Frota
    }
  ]

  return (
    <main className="home">
      <header className="header">
        <Logo />
        <Button onClick={sendMessage}>
          <WhatsAppOutlined className="header_icon" />
          FALAR AGORA
        </Button>
      </header>

      <section className="section-presentation dark-blue padding-df">
        <video
          className="bg-video"
          src="https://www.bemprotege.com.br/video/video-gusttavo-lima.mp4"
          autoPlay
          loop
          muted
          style={{ height: '100%' }}
        />
        <div className="presentation-contant">
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
        </div>
      </section>


      <section className="autos-section bgGray">
        <h2 className="title-autos-section">Seguro veicular <span className="txt_dark-blue">para todos os perfis</span></h2>

        {cards.map((card) => (
          <Card key={card.title} title={card.title} infos={card.infos} img={card.img} handleGoToSection={scrollToSection} handleAction={card.handleAction} />
        ))}

      </section>

      <section className="section-institution" ref={targetRef}>
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
        <Button onClick={sendMessageConsultant}>SEJA UM CONSULTOR BP</Button>
      </section>

      <section className="padding insta bgGray">
        <div className="insta_bg-img-container">
          <Image src={Isac} alt="Isac Arena" quality={100} />
          <div className="bgGradient" />
          <h2 className="insta_title">Acompanhe nosso trabalho no Instagram Já são mais de <span className="blue">100 mil seguidores</span> e mais de <span className="blue">2700 feedbacks</span></h2>
          <Button className="btnInsta" onClick={() => window.location.href = 'https://www.instagram.com/arenabemprotege/'}>
            <InstagramFilled className="insta-icon" />
            arenabemprotege</Button>
        </div>
      </section>

      <Footer />
    </main >
  );
}