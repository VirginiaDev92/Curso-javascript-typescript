# Javascript-typescript  
Este repositorio é para estudo de projetos envolvendo essa tecnologias.  

## Como fazer para para visualizar os codigos e projetos rodando na sua maquina.  
Primeiro, ter em sua maquina  o node v.14+ instalado e verificar se o npm(gerenciador de pacotes) esta instalado também.  

### Instalações:
* No Ubuntu, siga para o terminal.
* Digite os seguintes comandos.
```
sudo apt update
sudo apt install nodejs
```  
* Depois verifique se foi instalado corretamente e a versão.  
```
nodejs -v
```  
* Verifique se o npm esta instalado.  
```
npm -v
```  
* Se não estiver instalado.
```
sudo apt install npm
```  
### Atualizando:  
* Rode o comando  para instalar a versão mais recente do npm.
```
sudo npm install npm@latest -g
```  
* Rode estas linhas de código no seu terminal para limpar o cache do npm, instalar o módulo “n”, e instalar a mais recente versão estável do Node JS.  
```
sudo npm cache clean -f

sudo npm install -g n

sudo n stable
```  
* Para você instalar a versão mais recente, seja estável ou não, rode “sudo n latest”, outra forma é você rodar “n #.#.#”, para dar update Node JS para uma versão específica.
----------------------------------------------
## Rodando os projetos.
Primeiro, certifique-se que esta dentro da pasta do projeto,uma maneira simples é achar o arquivo package.json que guarda todas as bibliotecas e dependencias do projeto.  
Depois execute o comando:  
```
npm install
```  
E depois rode executando:
```
npm run dev
```
