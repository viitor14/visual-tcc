import { useState } from 'react';
import { CodeBoxWrapper, CodeTag, CopyButton } from './styled';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeSnippet = ({ codeText }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Função que será chamada ao clicar no botão
  const handleCopy = () => {
    // API moderna do navegador para interagir com a área de transferência
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        // 1. Atualiza o estado para mostrar o feedback
        setIsCopied(true);

        // 2. Após 2 segundos, volta ao estado original
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Falha ao copiar texto: ', err);
      });
  };

  return (
    <CodeBoxWrapper>
      <CodeTag>{codeText}</CodeTag>
      <CopyButton onClick={handleCopy} title="Copiar código">
        {isCopied ? <FiCheck size={18} color="#2ecc71" /> : <FiCopy size={18} />}
      </CopyButton>
    </CodeBoxWrapper>
  );
};

export default CodeSnippet;
