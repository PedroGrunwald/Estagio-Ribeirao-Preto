function fibonacci(numero) {
    // Sequencia de Fibonacci
    const fibonacciSequence = [0, 1];
  
    // Gera a sequência de Fibonacci até o número informado
    for (let i = 2; i <= numero; i++) {
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
  
    // Verifica se o número informado está na sequência
    const numeroPertence = fibonacciSequence.includes(numero);
  
    // Mensagem de resposta
    const mensagem = numeroPertence
      ? `O número ${numero} pertence à sequência de Fibonacci.`
      : `O número ${numero} não pertence à sequência de Fibonacci.`;
  
    return mensagem;
  }
  
  // Exemplo de uso
  const numeroInformado = 13;
  const resultado = fibonacci(numeroInformado);
  
  console.log(resultado);
  