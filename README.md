# Weather App V2


Aplicação feita para consulta de tempo de cidades, países. A aplicação utiliza  [Meta Weather API](https://www.metaweather.com/api/) para consulta dos dados de tempo e a [Places API](https://developers.google.com/maps/documentation/places/web-service/overview?hl=vi) do goole para sugestão de lugares. Com a pesquisa é apresentado dados como temperaturas, visibilidade, pressão do ar, informações do clima para os proximos cinco dias.

<p align="center">
  <img src="/demo/weather-gif.gif" />
</p>


## Pré-requisitos
Ter uma versão atualizada do NodeJS instalada em sua maquina e um gerenciador de pacotes (yarn ou npm).

## Como executar
Vá até a paste do projeto e digite:
```
yarn ou npm install
```
para instalar as dependencias
```
yarn start ou npm start
```
para executar o projeto.

##Aviso
Pela API de consulta de tempo ser gratuita, não há todas as localidades diferente da api de sugestão de lugar do google. Por isso ao pesquisar algum lugar você pode selecionar uma localidade que a API do google sugeriu mas que a API de climas não terá disponível, assim mostrará a localidade mais proxima.

## Estudado
* React
* Styled Components
* Manipulação de dados de API
* Typescript
* Conexão com API do google
