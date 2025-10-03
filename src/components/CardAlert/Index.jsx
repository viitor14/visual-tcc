import { CardContainer, CardAlertTitle, CardResult, CardProblematicCode } from './styled';

import CodeSnippet from '../CodeSnippet/Index';

export default function CardAlert({
  icon: IconComponent,
  title,
  severity,
  level,
  description,
  problematicCode,
  suggestedCode
}) {
  return (
    <CardContainer>
      <CardAlertTitle level={level}>
        <span>
          <IconComponent />
        </span>
        <p>{title}</p>
        <span level={level}>{severity}</span>
      </CardAlertTitle>

      <CardResult>
        <p>{description}</p>

        <CardProblematicCode>
          <p>Código problemático:</p>
          <CodeSnippet codeText={problematicCode} />
        </CardProblematicCode>

        <CardProblematicCode>
          <p>Sugestão de correção:</p>
          <CodeSnippet codeText={suggestedCode} />
        </CardProblematicCode>
      </CardResult>
    </CardContainer>
  );
}
