# ADR-004 — Uso de Value Object para valores monetários

## Status
Aceito

## Contexto

Este projeto é um template de uma plataforma de controle financeiro pessoal,
com foco em clareza de domínio, evolução a longo prazo e decisões arquiteturais explícitas.

Durante a modelagem inicial do domínio financeiro, foi identificado que
valores monetários são um conceito central do sistema, estando presentes em
entidades como `Transaction` e, indiretamente, em cálculos de saldo e relatórios.

Neste estágio do projeto, **não será definida tecnologia de persistência**,
nem frameworks ou bibliotecas específicas. A decisão deve ser baseada apenas
em conceitos de domínio.

---

## Problema

Como representar valores monetários no domínio financeiro de forma que:
- Evite erros comuns de precisão
- Expresse claramente o conceito de dinheiro
- Centralize regras e validações
- Não dependa de tipos primitivos genéricos

O uso direto do tipo primitivo `number` não representa adequadamente
o conceito de dinheiro e pode introduzir erros silenciosos.

---

## Opções consideradas

### 1. Utilizar o tipo primitivo `number`
Representar valores monetários diretamente como números.

**Prós**
- Simplicidade inicial
- Menos código

**Contras**
- Problemas de precisão
- Falta de validações de domínio
- Regras financeiras espalhadas
- Baixa expressividade do código

---

### 2. Utilizar um Value Object (`Money`)
Encapsular o conceito de valor monetário em um objeto próprio de domínio.

**Prós**
- Representa corretamente o conceito de dinheiro
- Centraliza validações e regras
- Evita erros de precisão
- Código mais expressivo e seguro
- Facilita evolução futura (ex: múltiplas moedas)

**Contras**
- Maior esforço inicial
- Mais código no domínio

---

## Decisão

Optou-se por utilizar um **Value Object chamado `Money`** para representar
valores monetários no domínio financeiro.

O `Money` será:
- Imutável
- Definido por seus valores
- Responsável por validar e encapsular regras financeiras
- Independente de infraestrutura ou persistência

Entidades do domínio, como `Transaction`, **não utilizarão tipos primitivos**
para representar valores monetários.

---

## Consequências

### Positivas
- Domínio mais expressivo e seguro
- Redução de erros financeiros
- Centralização de regras monetárias
- Base sólida para cálculos e relatórios

### Negativas
- Maior complexidade inicial
- Necessidade de disciplina no uso do Value Object

### Mitigações
- Manter o `Money` simples no início
- Evoluir suas responsabilidades conforme o domínio crescer

---

## Revisão futura

Esta decisão poderá ser revisitada caso:
- Seja necessário suportar múltiplas moedas
- O modelo de persistência exija adaptações específicas
- O domínio evolua para event sourcing ou modelos financeiros mais complexos

Qualquer revisão será documentada em um novo ADR.
