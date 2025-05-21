Resumo do Código — Projeto Agrinho 2025
Objetivo:
Simular uma pequena fazenda com galinhas que botam ovos, uma esteira transportadora que leva os ovos até um caminhão. O caminhão coleta os ovos, leva até a cidade para aumentar a população e felicidade. Possui modo feriado e interação para alimentar as galinhas.

Principais Componentes:
Galinhas (Chicken):

Estão dentro de um galinheiro.

Se movimentam levemente e botam ovos em intervalos regulares.

Se alimentadas pelo clique, botam ovos mais rápido.

Ovos (Egg):

Caem das galinhas e rolam até a esteira.

Andam pela esteira até o final, onde o caminhão os coleta.

Esteira (conveyor):

Uma faixa horizontal que transporta ovos da galinha até o caminhão.

Tem largura menor (800 px) para facilitar a coleta dos ovos pelo caminhão.

Caminhão (Truck):

Fica parado no final da esteira para coletar ovos.

Coleta até 5 ovos, depois parte para a cidade.

Ao chegar na cidade, descarrega os ovos com animação de porta traseira abrindo.

Aumenta a população e felicidade da cidade.

Volta para o galinheiro para coletar mais ovos.

Cidade (city):

Representada por prédios dinâmicos que crescem conforme a população.

A felicidade varia conforme entregas e o modo feriado.

Modo Feriado:

Aumenta a velocidade da esteira e a felicidade da cidade.

Muda as cores do cenário e galinhas.

Interações:

Checkbox para ativar/desativar modo feriado.

Clique nas galinhas para alimentá-las e acelerar a produção de ovos.

Interface:

Mostra título, população, felicidade, ovos entregues no dia, e status do modo feriado.

Fluxo básico:
Galinhas botam ovos que caem na esteira.

Ovos são transportados até o caminhão.

Caminhão coleta ovos até encher (5 ovos).

Caminhão vai até a cidade, descarrega (com animação).

A cidade cresce e a felicidade aumenta.

Caminhão volta para o galinheiro.

Usuário pode alimentar galinhas para produção mais rápida.

Modo feriado acelera processos e muda visual.

