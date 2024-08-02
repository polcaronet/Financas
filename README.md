
<h1 align="center";>Home</h1>
  
![Home](https://github.com/user-attachments/assets/a8f12385-3e73-4c42-a87a-a607e3f111fa)


 #### <center>Esse projeto foi pensado em facilitar o dia a dia do usuário lançando **↑**`receita` ou **↓**`despesa.`</center>

<h2 align="justify">
  Sobre o App Finanças 
</h2>

<h5 align="justify";>
<p>Pensando em melhorar a vida da familiar esse App foi desenvolvido com a tecnologia do <i>React JavaScript</i> por meio do <i>Visual Studio Code</i> com intuito de fazer o calculo da ↑receita ou ↓despesa, o qual gerencia e visualiza transações financeiras ou movimentos financeiros de um usuário. Além disso, possui Filtro de data por dia selecionado que permite guardar todos os lançamentos feito naquele dia. E no dia seguinte pode ser feito um novo registro no banco de dados.</i>
</p></h5>

<h2 align="justify";>
 Componentes e Bibliotecas Utilizadas na <i>Home</i>
</h2>
<h5 align="justify";>
<p> React e React Native: Biblioteca e framework para construir interfaces de usuário <i>useState</i> e <i>useEffect</i> são hooks do React usados para gerenciar estados e efeitos colaterias no componente.</h5>
 <h5 align="justify";> 
<p> @react-navigation/native: Usado para navegação entre telas na aplicação e <i>useIsFocused</i> é um hook que retorna retorna um booleanoindicando se a tela esta focada ou não.
</p></h5>
<h5 align="justify";>
  <p> @expo/vector-icons: Biblioteca de ícones que fornece ícones personalizáveis para uso em projeto com Expo.</p></h5>
<h5 align="justify";>
<p>date-fns: Biblioteca para manipulação de datas e afunção <i>format</i> é utilizada para formatar datas em formatos especificos.</p></h5>
<h5 align="justify";>
<p>axios (presuposto, através de uma <i>api</i>) Cliente HTTP usado para fazer requisições a um backend.</p></h5>
<h2 align="justify">
  Componentes Personalizados 
</h2>
<h5 align="justify";>
<p>Header: Um componente que carrega as informações de sua matriz para tela Home e recebe uma propriedade  <i>title</i> para exibir um título na Home.</p></h5>
<h5 align="justify";>
<p>HistoryList: Lista que mostra todos os itens de histório de transações ou movimentos. </p></h5>
<h5 align="justify";>
<p>BalanceItem: Componente que exibe informações de saldo ou balanço.</p></h5>
<h5 align="justify";>
<p>CalendarModal: Modal que exibe um calendário onde o usuário seleciona uma data de sua escola de registro.</p></h5>
<h2 align="justify";>
 Elementos Estilizados (Styled Components)
</h2>
 <h5 align="justify";>
 <p>Background, ListBalance, Area, Title, List: Estes são os componentes estilizados usando a biblioteca de de estilização(style-components/native). São utilizados para definir layouts e estilos dos elementos na tela. </p></h5>
 <h2 align="justify";>
  Funcionalidades
 </h2>
 <h3>Estado (State)</h3>
 <h5 align="justify";>
 <p>listBalance: Mantém a lista de saldo/balanço.</p></h5>
 <h5 align="justify";>
 <p>dateMovements: Armazena a data atualmente selecionada para filtrar movimentos.</p></h5>
 <h5 align="justify";>
 <p>movements: Armazena a lista de movimentos/recebimentos do usuário.</p></h5>
 <h5 align="justify";>
 <p>modalVisible: Controla a visibilidade do modal de calendário.</p></h5>
  <h3>useEffect Hook</h3>
  <h5 align="justify";>
  <p>Este hook é usado para buscar os movimentos e o balanço a partir da API quando a tela é focada <i>isFocused</i> ou quando a data de movimentos <i>dateMovements</i> muda. Ele define uma função assíncrona <i>getMovements</i> que faz requisições para buscar os dados de recebimentos e balanço para a data selecionada.
<i>isActive</i> é uma flag usada para evitar atualizações de estado quando o componente não está mais ativo, prevenindo possíveis erros.</p></h5>
<h3>handleDelete</h3>
<h5 align="justify";>
<p>Esta função é chamada quando o usuário deseja deletar um movimento específico. Ela faz uma requisição DELETE para a API e atualiza a data de movimentos para a data atual, o que provoca a atualização da lista de movimentos.</p></h5>
<h3>filterDateMovements</h3>
<h5 align="justify";>
 <p>Função usada para atualizar a data de movimentos, ela é chamada quando a data é selecionada no modal de calendário.</p></h5>
 <h3>UI Elements</h3>
 <h5 align="justify";>
 <p>Header: Mostra o título da página.</p></h5>
 <h5 align="justify";>
 <p>ListBalance: Mostra uma lista horizontal de itens de balanço.</p></h5>
 <h5 align="justify";>
 <p>Area: Contém um botão de calendário e o título "Ultimas movimentações".</p></h5>
 <h5 align="justify";>
 <p>List: Mostra a lista de movimentos em um scroll vertical.</p></h5>
 <h5 align="justify";>
 <p>Modal: Exibe o modal de calendário quando modalVisible é true.</p></h5>
 
 ***
<h1 align="center";>Login</h1>

![Login](https://github.com/user-attachments/assets/b2ec60b3-31b8-416f-95db-8bee75cf677f)


<h5 align="justify";>
<p>React e React Native : principais bibliotecas do React e do React Native que foi usado na tela <i>Login.</i></p></h5>
<h5 align="justify";>
<p>Feather: Biblioteca de ícones para os ícones de olho/olho-desligado.</p></h5>
<h5 align="justify";>
<p>useNavigation: Gancho <i>@react-navigation/native</i> para navegação.</p></h5>
<h5 align="justify";>
<p>AuthContext: Contexto personalizado para autenticação, definido em outro lugar na base de código.</p></h5>
<h5 align="justify";>
<p>Componentes estilizados: componentes personalizados (Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText) Criados usando styled-components.</p></h5>
<h2 align="justify";>CustomComponents</h2>
<h5 align="justify";>
<p>Background: Componente wrapper para a tela, estilizado com uma cor de fundo ou imagem.</p></h5>
<h5 align="justify";>
<p>Container: Contém todos os elementos na tela. O <i>behavior</i> propriedade que manipula interações de teclado no iOS e <i>enabled</i> permite que ele fique ativo.</p></h5>
<h5 align="justify";>
<p>Logo: Exibe o logotipo do aplicativo, originado da pasta de ativos.</p></h5>
<h5 align="justify";>
<p>AreaInput: Envolve os <i>Input</i> com componentes, adicionando margem ou preenchimento.</p></h5>
<h5 align="justify";>
<p>SubmitButton: Componente de botão para enviar o formulário.</p></h5>
<h5 align="justify";>
<p>SubmitText: Componente de texto dentro do <i>SubmitButton</i>.</p></h5>
<h5 align="justify";>
<p>Link: Componente tocável, usado para navegação para outras telas.</p></h5>
<h5 align="justify";>
<p>LinkText: Texto dentro do Link.</p></h5>
<h2 align="justify";>
Estado e Contexto
</h2>
<h3>useState Hooks</h3>
<h5 align="justify";>
<p>email e password: Armazena o e-mail e a senha inseridos pelo usuário.</p></h5>
<h5 align="justify";>
<p>showPassword: Alterna a visibilidade da senha.</p></h5>
<h3>useContext Hook</h3>
<h5 align="justify";>
<p>AuthContext: Fornece funções relacionadas à autenticação e estado. Neste caso, <i>signIn</i> é uma função para manipular o processo de login e <i>loadingAuth</i> indica se a solicitação de autenticação está em andamento.</p></h5>
<h4>Funcionalidades</h4>
<h4>toggleShowPassword</h4>
<h5 align="justify";>
<p>Esta função alterna o <i>showPassword</i> de estado. Ela alterna entre mostrar e ocultar o texto da senha alterando o valor de <i>secureTextEntry</i> no <i>Input</i> do componente.
</p></h5>
<h4>handleLogin</h4>
<h5 align="justify";>
<p>Esta função é chamada quando o usuário pressiona o botão de login. Ela aciona a <i>signIn</i> da função a partir do <i>AuthContext</i> com o e-mail e a senha inseridos pelo usuário.</p></h5>
<h4>Return</h4>
<h5 align="justify";>
<p>A declaração <i>return</i> contém o JSX que define a estrutura da tela. Os componentes são organizados dentro dos componentes <i>Background</i> e <i>Container</i>, com entradas para o e-mail e senha, um botão para enviar o formulário e um link para navegar até a tela de inscrição.</p></h5>
<h4>TouchableOpacity</h4>
<h5 align="justify";>
<p>Usado para elementos que podem ser pressionados. Aqui, é usado para o ícone de alternância de visibilidade de senha e o botão de envio.</p></h5>
<h4>ActivityIndicator</h4>
<h5 align="justify";>
<p>Exibe um spinner de carregamento enquanto a solicitação de autenticação que está em andamento for verdadeira. (<i>loadingAuth</i> is <i>true</i>) </p></h5>
<h4>Navigation</h4>
<h5 align="justify";>
<p>O <i>Link</i> componente usa o <i>navigation</i> objeto e <i>useNavigation</i> para navegar até a tela "Inscrição".</p></h5>
<h4>Fluxo geral</h4>
<h5 align="justify";>
<p>O usuário insere seu e-mail e senha.
 A <i>toggleShowPassword</i> permite ao usuário alternar a visibilidade da senha.
Quando o usuário pressiona o botão de envio, a <i>handleLogin</i> é chamada e ela usa a <i>signIn</i> do <i>AuthContext</i> para autenticar o usuário.
Se a autenticação estiver em andamento, o <i>ActivityIndicator</i> é exibido. Caso contrário, o botão exibe "Acessar".
O link "Criar uma conta!" permite a navegação até a tela de inscrição.</p></h5>

***
<h1 align="center";>CustomDrawer</h1>

![CustomDrawer](https://github.com/user-attachments/assets/191c61ff-c3d3-4836-9ee1-b3f721e378df)

<h4 align="justify">
  Importações
</h4>
<h5 align="justify";>
<p>React e useContext: Importa a biblioteca principal React e o hook <i>useContext</i>, que é usado para acessar o contexto.</p></h5>
<h5 align="justify";>
<p>React e useContext: Importa a biblioteca principal <i>React</i> e o hook <i>useContext</i>, que é usado para acessar o contexto.</p></h5>
<h5 align="justify";>
<p>View e Image: Componentes da biblioteca React Native para criar visualizações e imagens.</p></h5>
<h5 align="justify";>
<p>DrawerItemList e DrawerContentScrollView: Importados de <i>@react-navigation/drawer</i>, são usados para criar a estrutura de navegação dentro do drawer.</p></h5>
<h5 align="justify";>
<p>AuthContext: Importado de um arquivo de contexto (../../contexts/auth), é usado para obter o usuário autenticado.</p></h5>
<h5 align="justify";>
<p>TextName e TextWelcome: Componentes estilizados importados de um arquivo de estilos (./styles).</p></h5>
<h4>Componente CustomDrawer</h4>
<h5 align="justify";>
<p>O componente CustomDrawer é um componente funcional que renderiza um menu de navegação personalizado.</p></h5>
<h4>Props</h4>
<h5 align="justify";>
<p>props: São as propriedades passadas para o componente, que incluem as informações de navegação, como itens de menu e propriedades de estilo.</p></h5>
<h4>Lógica e Estrutura</h4>
<h5 align="justify";>
<p>useContext(AuthContext): Este hook é usado para acessar o <i>AuthContext</i>, que contém informações sobre o usuário atual. Aqui, extrai-se o objeto <i>user</i> do contexto.</p></h5>
<h5 align="justify";>
<p>DrawerContentScrollView: Um componente que envolve todo o conteúdo do drawer, permitindo que ele seja rolável se o conteúdo exceder a altura da tela.</p>
<h5 align="justify";>
<p>View: Um container que organiza outros componentes. No caso, é usado para centralizar e estilizar os componentes internos, como a imagem do logo e os textos de boas-vindas e nome do usuário.</p></h5>
<h5 align="justify";>
<p>Image: Mostra uma imagem específica (Logo.png) que serve como logotipo ou ícone do aplicativo.</p></h5>
<h5 align="justify";>
<p>TextWelcome:Exibe um texto de boas-vindas. O componente é estilizado para ter algum espaçamento horizontal.</p></h5>
<h5 align="justify";>
<p>TextName: Exibe o nome do usuário, que é extraído do objeto <i>user</i> obtido do <i>AuthContext</i>.</p></h5>
<h5 align="justify";>
<p>DrawerItemList: Exibe a lista de itens do drawer, usando os itens definidos na navegação.</p></h5>
<h4>Funcionamento</h4>
<h5 align="justify";>
<p>O <i>CustomDrawer</i> é utilizado para renderizar um menu de navegação lateral personalizado.
O contexto de autenticação <i>AuthContext</i> é acessado para obter informações sobre o usuário atual.
O componente renderiza uma imagem de logotipo, seguido de uma mensagem de boas-vindas e o nome do usuário.
Finalmente, o <i>DrawerItemList</i> é renderizado, listando os itens de navegação disponíveis.</p></h5>

***

<h1 align="center";>CalendarModal</h1>

![CalendarModal](https://github.com/user-attachments/assets/757c7a8d-5e0b-4fc0-9686-1c98435f4c17)

<h4>CalendarModal</h4>
<h5 align="justify";>
<p>O <i>CalendarModal</i> é um componente do React Native que renderiza um modal contendo um calendário para seleção de data. Ele usa a <i>react-native-calendars</i> uma biblioteca que exibi o calendário e permite que os usuários selecionem uma data.</p></h5>
<h4>Importações e configuração de localidade:</h4>
<h5 align="justify";>
<p>O componente importa os módulos necessários de <i>react-native</i> e <i>react-native-calendars</i>.Ele também importa componentes e estilos personalizados do projeto (<i>Container, ButtonFilterText, ButtonFilter, ModalContent</i>).
A configuração de localidade é definida para o calendário usando <i>LocaleConfig</i> o para exibi-lo em português (brasileiro) importando e definindo <i>ptBR</i> como localidade.
</p></h5>
<h4>Gestão do Estado:</h4>
<h5 aling="justify";>
<p>dateNow: Uma variável de estado que contém a data selecionada no momento. Ela inicializa com a data atual.
markedDates: Uma variável de estado que armazena as datas a serem marcadas no calendário. Este objeto é usado pelo calendário para saber quais datas são selecionadas e como elas devem ser estilizadas.</p></h5>
<h4>Manipuladores de eventos:</h4>
<h5 aling="justify";>
<p>handleOnDayPress(date): Esta função é acionada quando um dia no calendário é pressionado. Ela faz
atualizações no <i>dateNow</i> com a data selecionada. Depois
cria um <i>markedDay</i> objeto com a data selecionada, especificando o estilo (por exemplo, <i>selectedColor, textColor</i>).
Atualiza <i>markedDates</i> com novidades e o <i>markedDay</i> é usado para refletir visualmente a data selecionada no calendário.
handleFilterDate(): Esta função é chamada quando o botão "Filtrar" é pressionado. Ela:
Chama a <i>handleFilter</i> uma função passada como propriedade, enviando a data selecionada no momento para o <i>dateNow</i> de volta ao componente pai.
<i>setVisible()</i> fechar o modal um recurso padrão e comum para ocultar modais.</p></h5>
<h4>Método de renderização:</h4>
<h5 aling="justify";>
<p>O componente retorna uma estrutura JSX que consiste em:
Um <i>Container</i> que envolve todo o conteúdo modal.
Um <i>TouchableWithoutFeedback</i> componente que, quando pressionado, aciona <i>setVisible()</i>, provavelmente fechando o modal.
<i>ModalContent</i> que contém o <i>Calendar</i> componente e um botão de filtro.
O <i>Calendar</i> componente de <i>react-native-calendars</i> é configurado com:
<i>onDayPress</i> para lidar com a seleção do dia.
<i>markedDates</i> para destacar as datas selecionadas.
<i>theme</i> para estilizar o calendário (por exemplo, cores para hoje, dias selecionados).
Um <i>ButtonFilter</i> componente que aciona a <i>handleFilterDate</i> uma função que permite ao usuário 
 que confirme sua seleção.</p></h5>
 <h4>Funcionalidades</h4>
 <h5 align="justify";>
 <p>Quando um usuário abre o modal, ele vê o calendário exibido de acordo com o idioma português do Brasil.
O usuário pode selecionar uma data, que é marcada visualmente e armazenada no estado do componente.
O usuário pode então pressionar o botão "Filtrar" para confirmar a seleção. A data selecionada é passada para o componente pai por meio da <i>handleFilter</i>.
A <i>setVisible</i> controla a visibilidade do modal, permitindo que ele seja fechado quando o usuário toca fora do modal ou após confirmar a seleção.</p></h5>

***
<h1 align="center";>New</h1>

![New](https://github.com/user-attachments/assets/f2b01825-a705-4038-b6cd-40283dc78d04)

<h2>Componentes e Imports</h2>
<h4>React e Hooks (useState)</h4>
<h5 align="justify";>
<p><i>React</i> é a biblioteca principal para construir a interface de usuário.
 <i>useState</i> é um hook do <i>React</i> que permite adicionar estado a componentes funcionais.</p></h5>
 <h4>Componentes de Estilo (Background , Input , SubmitButton , SubmitText): </h4>
 <h5 align="justify";>
 <p>Estes componentes são importados de um arquivo de estilos (./styles). Eles são usados para estilizar elementos específicos da interface.</p></h5>
 <h4>Bibliotecas do React Native (SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert):</h4>
 <h5 align="justify";>
 <p>SafeAreaView: Garante que o conteúdo não seja ocultado por elementos como o "notch" ou barras de navegação.<br>
TouchableWithoutFeedback: Captura toques fora dos componentes para ações, como fechar o teclado.<br>
Keyboard: Fornece métodos para manipular o teclado virtual.<br>
Alert: Mostra alertas nativos do sistema operacional.</p></h5>
<h4>Componentes Customizados (Header, RegisterTypes)</h4>
<h5 align="justify";>
<p>Header: Um componente personalizado para exibir o cabeçalho.
RegisterTypes: Um componente para selecionar o tipo de registro (receita ou despesa).</p></h5>
<h4>Serviço API (api):</h4>
<h5 align="justify";>
<p>Utilizado para fazer requisições HTTP ao backend.</p></h5>
<h4>Outras Bibliotecas (date-fns, useNavigation, TextInputMask):</h4>
<h5 align="justify";>
<p>date-fns: Biblioteca para manipulação de datas.<br>
 useNavigation: Hook do React Navigation para navegação entre telas.<br>
 TextInputMask: Componente para entrada de texto com máscaras (como moeda).</p></h5>
<h2 align="justify";>Component State</h2>
<h5 align="justify";>
<p>labelInput: Armazena a descrição do registro inserida pelo usuário.<br>
 valueInput: Armazena o valor do registro, incluindo a máscara para formatação de moeda.<br>
 type: Armazena o tipo do registro (pode ser "receita" ou "despesa").</p></h5>
 <h2 align="justify";>Funções</h2>
 <h5 align="justify";>
 <p>handleSubmit: Fecha o teclado virtual.
 Verifica se todos os campos foram preenchidos corretamente.
 Mostra um alerta de confirmação com o tipo e valor do registro. Se o usuário confirmar, chama <i>handleAdd</i>.</p></h5>
 <h4>handleAdd:</h4>
 <h5 align="justify";>
 <p>Fecha o teclado virtual.
 Envia os dados do registro para o backend via uma requisição POST usando a função <i>api.post</i>.
 Reseta os campos de entrada (<i>labelInput, valueInput</i>) e navega para a tela <i>Home</i>.</p></h5>
 <h2 align="justify;">Renderização</h2>
 <h4>TouchableWithoutFeedback:</h4>
 <h5 align="justify";>
 <p>Envolve todos os componentes para permitir que o teclado seja fechado ao tocar fora dos campos de entrada. </p></h5>
 <h4>Background:</h4>
 <h5 align="justify";>
 <p>Um componente de fundo estilizado.</p></h5>
 <h4>Header:</h4>
 <h5 align="justify";>
 <p>Exibe o título "Registrando".</p></h5>
 <h4>Input:</h4>
 <h5 align="justify";>
 <p>Campo de entrada para a descrição do registro.</p></h5>
 <h4>TextInputMask:</h4>
 <h5 align="justify";>
 <p>Campo de entrada com máscara para valores monetários.</p></h5>
 <h4>RegisterTypes:</h4>
 <h5 align="justify";>
 <p>Componente para selecionar o tipo de registro.</p></h5>
 <h4>SubmitButton:</h4>
 <h5 align="justify";>
 <p>Botão para enviar o registro, que chama <i>handleSubmit</i> quando pressionado.</p></h5>
 <h4>SubmitText:</h4>
 <h5 align="justify";>
 <p>Texto dentro do botão de envio.</p></h5>

 ***
<h1 align="center";>Profile</h1>

![Profile](https://github.com/user-attachments/assets/63f981f7-dd33-4194-9757-a988358f71a5)

<h2 align="justify";>Importações</h2>
<h4>React e Hooks:</h4>
<h5 align="justify";>
<p>O <i>useContext</i> é usado para acessar o contexto do <i>Auth</i>, que contém informações e métodos de autenticação.</p></h5>
<h4>Navegação:</h4>
<h5 align="justify";>
<p>O <i>useNavigation</i> é um hook do React Navigation (@react-navigation/native) que fornece acesso à navegação de forma programática.</p></h5>
<h4>Estilos e Componentes:</h4>
<h5 align="justify";>Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText:
<p>Importação dos componentes (./styles) estilizados para estruturar a interface do usuário.</p></h5>
<h4>Header e Contexto de Autenticação:</h4>
<h5 align="justify";>
<p>O <i>Header</i> é um componente que exibe o título da tela, e o <i>AuthContext</i> fornece o estado de autenticação.</p></h5>
<h2 align="justify">Definição do Componente <i>Profile</i></h2>
<h4>Hook useNavigation:</h4>
<h5 align="justify";>
<p>Obtém a navegação para permitir redirecionamentos que no caso navegar para outra tela.</p></h5>
<h4>Desestruturação do Contexto de Autenticação:</h4>
<h5 align="justify";>
<p><i>user</i> contém informações do usuário atual e <i>signOut</i> é uma função para sair da conta.</p></h5>
<h4>Renderização do Componente:</h4>
<h5 align="justify;>
<p>Container: Componente principal que envolve todo o conteúdo.</p></h5>
<h5 align="justify;>
<p>Header: Componente que exibe o título "Meu perfil"</p></h5>
<h5 align="justify;>
<p>Message: Mensagem de boas-vindas.</p></h5>
<h5 align="justify;>
<p>Name: Exibe o nome do usuário logado, se disponível. O atributo</p></h5>
<h5 align="justify";>
<p>numberOfLines, que define o número máximo de linhas para o texto.</p></h5>
<h5 align="justify";>
<p>NewLink: Link para navegar para a tela de registro, acionado pelo onPress.</p></h5>
<h5 align="justify";>
<p>LogoutButton: Botão para sair da conta, que chama a função signOut do contexto de autenticação.</p></h5>
<h2 align="justify";>Funcionalidades</h2>
<h4>Autenticação e Contexto:</h4>
<h5 align="justify";>
<p>O componente utiliza o <i>AuthContext</i> para obter informações sobre o usuário e a função de logout. Isso facilita o acesso ao estado global de autenticação.</p></h5>
<h4>Navegação</h4>
<h5 align="justify";>
<p>Utilizando o <i>useNavigation</i>, o componente pode navegar para outras telas, como a tela de registro, através do método <i>navigate</i>.</p></h5>
<h4>Interface do Usuário:</h4>
<h5 align="justify";>
<p>A interface é construída com componentes estilizados (<i>Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText</i>), o que facilita a customização e manutenção.</p></h5>
<h4>Logout:</h4>
<h5 align="justify";>
<p>O botão de logout, quando pressionado, chama a função <i>signOut</i>, que é responsável por deslogar o usuário.
Esse é o fluxo básico do componente <i>Profile</i>. Ele fornece uma interface simples para exibir informações do usuário e realizar ações como navegação e logout.</p></h5>

***

<h1 align="center";>Pré-requisitos</h1>
<h4>Node.js</h4>
<h5 align="justify";>
<p>Instale o Node.js: Uma versão atual do Node.js baixado do site oficial.</p></h5>
<h4>Chocolate</h4> 
<h5 align="justify;>
<p>Atenção!!! Use uma versão do NodeJs compativel com a biblioteca chocolate.</p></h5>
 <h4>Phyton</h4> 
 <h5 align="justify;>
  Instale as versôes: phyton 2, 3 e o mais recente. e o Java SDK normal.
</p></h5>
<h4>Windows Power Shewll</h4>
<h5 align="justify";>
<p>Uma versão atualizada PowerShell disponível no site oficial</p></h5>
<h4>Visual Studio Code Atualizado</h4>
<h5 align="justify;>
<p>Baixe do site oficial de preferência a mais recente</p></h5>
<h4>Variaveis Ambiente</h4>
<h5 align="justify;>
<p>Configure as variáveis ambiente para o java e para Android Studio Instalado na máquina</p></h5>
<h1 align="center">Considerações finais</h1>
<h5 align="justify">
<p>O App Finanças foi desenvolvido pelo <i></i>Anselmo Polcaro</i> con intuito de facilitar a vida do usuário comum calculando seu rendimento e sua despesa todos os dias até ele ter uma noção de como vai ficar no fim de um <i>dia</i>, ou de uma <i>semamana</i>, ou de um <i>mês</i>, ou de 1 <i>ano</i>.</p></h5>













 
 
 





















