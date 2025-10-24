import { Container } from '../../styles/GlobalStyles';
import { DivCardsAlerts, ResultContainer, ResultProblems, BackPage, ArrowLeft } from './styled';

import ScoreDisplay from '../../components/ScoreDisplay/Index';
import CardAlert from '../../components/CardAlert/Index';

import { RiAlarmWarningFill } from 'react-icons/ri';
import { PiWarningFill } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';

import history from '../../services/history';

import logo from '/img/logo-white.png';

export default function Login() {
  // Dados estáticos para o ScoreDisplay
  const scoreData = {
    value: 67, // Pontuação - API
    problems: [
      {
        id: 1,
        numProblem: 1, //Número de problemas - API
        label: 'Problemas Críticos', //Titulo do problema - API/PADRÃO
        type: 'critical' //Tipo de problema usado para definir a cor
      },
      { id: 2, numProblem: 1, label: 'Avisos', type: 'warning' },
      { id: 3, numProblem: 1, label: 'Boas Práticas', type: 'good' }
    ]
  };

  // Dados estáticos para os alertas
  const alertsData = [
    {
      id: 1,
      icon: RiAlarmWarningFill,
      title: 'Imagem sem texto alternativo', //Titulo do problema - API
      severity: 'CRÍTICO', //Nivel de severidade - API
      level: 'critical', //Não mexer, usado para a cor
      description:
        'Leitores de tela não conseguem descrever o conteúdo desta imagem para usuários com deficiência visual.', //Descrição do problema - API
      problematicCode: '<img src="/banners/promo-setembro.png" />', //Código problemático - API
      suggestedCode: '<img src="/banners/promo-setembro.png" alt="Banner promocional..." />' //Código sugerido - API
    },
    {
      id: 2,
      icon: PiWarningFill,
      title: 'Links com texto genérico',
      severity: 'aviso',
      level: 'serious', //Não mexer, usado para a cor
      description:
        'Links como "Clique aqui" não são descritivos e prejudicam a navegabilidade para usuários de leitores de tela.',
      problematicCode: '<a href="/saiba-mais">Clique aqui</a>',
      suggestedCode: '<a href="/saiba-mais">Saiba mais sobre nossas promoções</a>'
    },
    {
      id: 3,
      icon: FaCheckCircle,
      title: 'Estrutura de heading correta',
      severity: 'boa prática',
      level: 'moderate', //Não mexer, usado para a cor
      description:
        'A hierarquia de títulos (H1, H2) está bem estruturada. Isso cria um "sumário" lógico da página, melhorandoa navegação via leitores de tela e o SEO.',
      problematicCode: 'Nenhum problema detectado',
      suggestedCode: 'Nenhum problema detectado'
    }
  ];

  function handleClick() {
    history.push('/');
  }

  return (
    <Container>
      <BackPage onClick={handleClick}>
        <ArrowLeft />
        <span>Voltar</span>
      </BackPage>
      <ResultContainer>
        <img src={logo} alt="Logo Acessibilidade" />
        <ResultProblems>
          <ScoreDisplay score={scoreData.value} problems={scoreData.problems} />

          <h2>Problemas Encontrados</h2>
          <DivCardsAlerts>
            {alertsData.map((alert) => (
              <CardAlert key={alert.id} {...alert} />
            ))}
          </DivCardsAlerts>
        </ResultProblems>
      </ResultContainer>
    </Container>
  );
}
