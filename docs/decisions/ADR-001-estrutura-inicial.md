# ADR-001 — Estrutura inicial do projeto

## Status
Aceito

## Contexto

Este projeto tem como objetivo servir como **template de uma plataforma de controle
financeiro pessoal**, com foco em arquitetura, clareza de domínio e evolução a longo prazo.

Em ambientes profissionais de maior escala — como SaaS com múltiplos times —
é comum a adoção de **microfrontends**, **múltiplos repositórios** e um **Design System
centralizado**, modelo que também é utilizado na empresa em que atuo atualmente e outras 
aos quais já trabalhei. 

No entanto, este projeto possui características diferentes:
- Um único mantenedor
- Escopo inicial reduzido
- Necessidade de aprendizado e documentação clara
- Intenção de evolução futura, mas sem overengineering inicial

Diante disso, torna-se necessário definir uma estrutura inicial que equilibre
**simplicidade**, **clareza arquitetural** e **possibilidade de evolução**.

---

## Problema

Qual estrutura adotar como ponto de partida para o template:

- Manter alinhamento com arquiteturas usadas em SaaS em escala
- Evitar complexidade desnecessária no início
- Garantir que decisões futuras (ex: multi-repo, microfrontends) possam ser adotadas
  sem refatorações traumáticas

---

## Opções consideradas

### 1. Monorepo com monólito modular
- Um único repositório
- Separação clara entre `apps` e `packages`
- Domínio isolado de infraestrutura e UI

**Prós**
- Menor custo cognitivo inicial
- Facilidade de navegação e refatoração
- Excelente base para documentação arquitetural
- Migração futura para multi-repo é viável

**Contras**
- Não reflete diretamente arquiteturas de SaaS em larga escala
- Menor isolamento operacional no início

---

### 2. Multi-repo desde o início
- Repositórios separados para domínio, frontend e backend

**Prós**
- Alinhamento com arquiteturas de maior escala
- Isolamento forte entre componentes

**Contras**
- Overhead elevado para um único mantenedor
- Maior esforço de setup e manutenção
- Baixo ganho real no estágio inicial do projeto

---

### 3. Microfrontends desde o início
- Frontend dividido em múltiplas aplicações independentes

**Prós**
- Alinhamento direto com experiências de SaaS em escala
- Exercício arquitetural avançado

**Contras**
- Complexidade desnecessária para o escopo atual
- Problemas organizacionais simulados sem necessidade real
- Dificulta foco no domínio e nas decisões principais

---

## Decisão

Optou-se por iniciar o projeto utilizando **monorepo com monólito modular**.

A estrutura adotada prioriza:
- Separação clara de responsabilidades
- Isolamento do domínio de negócio
- Simplicidade operacional inicial
- Base sólida para evolução futura

A decisão de **não iniciar** com multi-repo ou microfrontends é **intencional**
e baseada no contexto atual do projeto, não por desconhecimento dessas abordagens.

---

## Consequências

### Positivas
- Redução do custo cognitivo inicial
- Facilidade para documentar e evoluir decisões arquiteturais
- Estrutura preparada para migração futura para multi-repo
- Melhor foco em domínio e regras de negócio

### Negativas
- Menor alinhamento imediato com arquiteturas de SaaS em escala
- Possível necessidade de revisão estrutural no futuro

### Mitigações
- Isolamento rigoroso entre `apps` e `packages`
- Proibição de dependências entre `apps`
- Uso de contratos explícitos no domínio
- Documentação contínua de decisões (ADRs)

---

## Revisão futura

Esta decisão poderá ser revisitada caso:
- O projeto evolua para múltiplos mantenedores
- Haja necessidade real de deploys independentes
- O custo cognitivo do monorepo supere seus benefícios

Uma possível revisão será documentada em um novo ADR.
