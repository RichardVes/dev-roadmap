# git config
    Configura ações local e global.


# git config --list --show-origin
    exibir o caminho do arquivo de configuração junto com cada valor,
    facilitando a depuração da origem de uma configuração específica (por exemplo, sistema, global ou local).

# git config --global --unset key
--unset é o argumento de linha de comando correto para remover um par chave-valor específico de um arquivo de configuração do 

#  git config --local user.name "nome"
    A opção --local representa o comportamento padrão caso nenhuma opção de nível seja fornecida, 
    mas utilizá-la explicitamente esclarece que você está modificando a configuração especificamente 
    para o repositório atual localizado em .git/config.

# git config --global user.email "email@.com"
    A opção --global representa que você está modificando a configuração especificamente global 
    para o usuario do sistema localizado em .git/config.