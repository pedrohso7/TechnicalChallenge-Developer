# TesteSemantix
Teste p/ avaliação linkAPI - Pleno. 
Foi desenvolvida esta API em um processo seletivo cujo a vaga infelizmente foi cancelada. Entretanto como, de fato, tentei inovar com conceitos que eu ainda não estava tão familiarizado, julguei pertinente utilizar em meu portifólio para que eu possa reaproveitar algumas coisas.

Esse repositório é referente ao projeto 1 do desafio (A doc está na raiz do projeto).

O projeto se trata de um servidor node escrito em typescript, inspirado na clean architeture e utilizando princípios SOLID.

Os scripts para rodar em desenvolvimento e produção foram, respectivamente:

Dev:
-> npm run start:dev

Prod:
-> npm run build

e depois

-> npm run start

Para que tudo funcione corretamente você deve criar o seu .env na pasta raiz  seguindo o exemplo no repositório. 

Lembre-se de que a database_url pode ser encontrado no seu console mongodb, basta seguir o padrão que está lá.

Além disso, as demais informações são a respeito da comunicação com a Api de teste da link, onde foi necessário uma autênticação do tipo basic no formato "user:password" no header para utilizado ao comunicar com essa API. 

