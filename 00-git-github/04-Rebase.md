# Rebase no Git
    O rebase essencialmente pega um conjunto de commits, "copia" os mesmos, e os despeja em outro lugar.
    a vantagem do rebase é que ele pode ser usado para construir uma sequência mais bonita e linear de commits. O registro de commits (história do repositório) ficará muito mais limpa se for utilizado apenas rebase em vez de merge.
    O único problema é que a main não é atualizada também, temos que atualiza-la depois, puxando o commit da branch main que foi deixada para traz;
    usamos o rebase nome da branch que foi juntada na main  
# git rebase [nomeBranch]
