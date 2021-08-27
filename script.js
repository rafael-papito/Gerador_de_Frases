var frases = [
    'Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.  -  William Shakespare',
    'Este CD-ROM pode conter mais informação do que todo estes papéis abaixo de mim - Bill Gates, 1994',
    'A pior coisa que eu posso ser é igual a todo mundo. Eu odeio isso. - Arnold Schwarzenegger',
    'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir. - Steve Jobs ',
    'A História é um conjunto de mentiras sobre as quais se chegou a um acordo. - Napoleão Bonaparte ',
    'Você tem inimigos? Bom. Significa que você brigou por algo, alguma vez na vida. - Winston Churchill ',
    'Um pouco de filosofia inclina a mente humana para o ateísmo, mas o aprofundamento na filosofia reaproxima a mente humana da religião - Francis Bacon',
    'Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney',
    'Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ela vai gastar toda a sua vida acreditando que ele é estúpido. - Albert Einstein',
    'Se você nasce pobre, não é erro seu. Mas se se você morre pobre, a culpa é sua. - Bill Gates '
  ];
  function gerarFrase(){
    var aleatorio = Math.floor(Math.random()*(frases.length));
    document.getElementById('frases').innerHTML = frases[aleatorio];
  }