# ADR-003 — Modelagem inicial do domínio financeiro

## Status
Aceito

## Contexto

Este projeto é um template de uma plataforma de controle financeiro pessoal,
com foco em clareza de domínio, evolução a longo prazo e decisões arquiteturais explícitas.

Neste momento, **não será definida tecnologia de persistência** (banco relacional ou não),
nem frameworks de backend ou frontend. O objetivo é **modelar o domínio financeiro**
de forma independente de infraestrutura.

A modelagem será realizada utilizando:
- MER (Modelo Entidade-Relacionamento) em nível conceitual
---

## Problema

Como definir uma modelagem inicial do domínio financeiro que:
- Represente corretamente os conceitos do negócio
- Permita controle de gastos e receitas
- Seja simples, mas evolutiva
- Não acople decisões prematuras de banco ou framework

---

## Decisão

Optou-se por iniciar o domínio financeiro com as seguintes entidades principais:

- User
- Account
- Transaction
- Category

Essas entidades representam os conceitos mínimos necessários para
controle financeiro pessoal, mantendo clareza e flexibilidade para evolução futura.

---

## MER — Modelo Entidade-Relacionamento (conceitual)

### Entidade: User
Representa o usuário do sistema.

**Atributos**
- id: string (UUID)
- name: string
- email: string
- password: string (representação conceitual de credencial)

---

### Entidade: Account
Representa uma conta financeira pertencente a um usuário.

**Atributos**
- id: string (UUID)
- name: string
- initialBalance: number
- type: enum (CHECKING, INVESTMENT, CASH)
- color: string
- userId: string (UUID)

**Observação de domínio**
O saldo atual da conta **não é armazenado diretamente**.
Ele é derivado a partir das transações associadas à conta.

---

### Entidade: Transaction
Representa uma movimentação financeira.

**Atributos**
- id: string (UUID)
- name: string
- value: number (sempre positivo)
- type: enum (INCOME, EXPENSE)
- date: string
- userId: string (UUID)
- accountId: string (UUID)
- categoryId: string (UUID)

A natureza da transação (entrada ou saída) é definida pelo campo `type`.

---

### Entidade: Category
Representa uma categorização de transações.

**Atributos**
- id: string (UUID)
- name: string
- icon: string
- userId: string (UUID)

---

## Relacionamentos (conceituais)

- User 1:N Account
- User 1:N Transaction
- User 1:N Category
- Account 1:N Transaction
- Category 1:N Transaction

---

## Consequências

### Positivas
- Domínio financeiro claro e bem definido
- Separação entre conceito de negócio e persistência
- Base sólida para evolução futura
- Facilita implementação de regras e validações

### Negativas
- Modelagem pode precisar evoluir conforme novos requisitos surgirem
- Algumas decisões (ex: investimentos avançados) ficam para fases futuras

---

## Revisão futura

Esta modelagem poderá ser revisitada caso:
- O sistema passe a suportar múltiplos usuários por conta
- Surjam novos tipos de ativos financeiros
- Seja adotado event sourcing ou outro modelo de persistência

Qualquer revisão será documentada em um novo ADR.