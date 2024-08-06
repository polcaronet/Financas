


🚀 <h1 align="center">Construi um App de Finanças com React Native e persistência de login com Async Storage</h1>
Estou empolgado em compartilhar o progresso no meu projeto de aplicativo utilizando React Native. A seguir, explico os principais componentes do aplicativo:
Tela de Login e Home:
Funções: Implementa autenticação com Async Storage.
Componentes: Utiliza instyled-components com Input personalizado para entrada de email e senha mascarada, e ToutableOpacity com Icone do olho da biblioteca Expo para criar uma conta ou fazer login.
Recursos: Mostra um indicador de carregamento (ActivityIndicator) durante operações de autenticação e exibe mensagens de erro ou sucesso com Alert.
Navegação: Após autenticação bem-sucedida, o usuário é redirecionado para a Minhas Movimentações
Tela de Minhas Movimentações:
Funções: Mostra saldo atual, entradas de hoje e saidas de hoje em horizontal. e Na vertical lista em Ultimas movimentações, as movimentações do dia do usuário.
Componentes: Usa instyled-components com FlatList personalizado e redenizando BalaceItem para listar os balanços do dia existentes.
Recursos: Integra o Async Storage para permanência de login e um backend-finanças dentro do projeto usando a requisição da api da máquina interna. Gerenciando do finanças: inclui as operações como adicionar, atualizar e deletar.
Tela Registrando (New):
Componentes:
A labelInput armazena a descrição do registro inserida pelo usuário.
A valueInput armazena o valor do registro, incluindo a máscara para formatação de moeda. type: Armazena o tipo do registro (pode ser "receita" ou "despesa").
Considerações finais
Esse App Finanças foi desenvolvido pelo Anselmo Polcaro com intuito de facilitar a vida do usuário comum calculando seu rendimento e sua despesa todos os dias até ele ter uma noção de como vai ficar no fim de um dia, ou de uma semamana, ou de um mês, ou de 1 ano.
O video abaixo vai mostrar as outras telas e como ficou o App que está ele está e , futuramente, pretendo melhorá-lo colocando um banco de dados do MogoDb ou FireBase. Cada parte do código foi pensado de maria responsiva e objetiva.
 Estou empolgado para continuar desenvolvendo e aprimorando o aplicativo!
🔧 Tecnologias Utilizadas:
React Native para desenvolvimento mobile.
React Navigation para navegação entre telas.
CustomDrawer para um menu mais estilizado.
Styled Components para TextInput e ToutableOpacity.
