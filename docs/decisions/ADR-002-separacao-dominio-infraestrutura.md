# ADR-002 — Separação entre Domínio e Infraestrutura

## Status
Aceito

## Contexto

Este projeto é um template de uma plataforma de controle financeiro pessoal,
com foco em arquitetura, clareza de domínio e evolução a longo prazo.

Por se tratar de um sistema financeiro, mesmo em um contexto pessoal,
as regras de negócio possuem complexidade própria, como:
- Modelagem de gastos e investimentos
- Validações e invariantes financeiras
- Evolução das regras ao longo do tempo

Além disso, o projeto foi concebido para permitir evolução futura,
incluindo a possibilidade de múltiplas aplicações, APIs e até
migração para multi-repo.

Diante disso, torna-se necessário definir uma separação clara entre
**regras de negócio (domínio)** e **detalhes de infraestrutura**.

---

## Problema

Como estruturar o projeto de forma que:
- As regras de negócio não dependam de frameworks
- O domínio possa evoluir de forma independente
- Mudanças em UI, API ou banco de dados não impactem a lógica central
- A migração futura para multi-repo seja simples

---

## Opções consideradas

### 1. Domínio acoplado à infraestrutura
Colocar regras de negócio diretamente em aplicações (API ou frontend).

**Prós**
- Implementação inicial mais rápida
- Menos arquivos no curto prazo

**Contras**
- Forte acoplamento com frameworks
- Dificuldade de teste
- Alto custo de mudança
- Migração futura complexa

---

### 2. Domínio isolado em um pacote independente
Isolar o domínio em um pacote próprio, sem dependências de infraestrutura.

**Prós**
- Regras de negócio independentes de tecnologia
- Facilidade de teste
- Maior clareza arquitetural
- Base sólida para evolução e reutilização
- Migração simples para multi-repo no futuro

**Contras**
- Maior esforço inicial de organização
- Necessidade de disciplina arquitetural

---

## Decisão

Optou-se por **isolar o domínio de negócio em um pacote independente**,
localizado em `packages/domain`.

Este pacote conterá exclusivamente:
- Entidades
- Value Objects
- Casos de uso
- Interfaces (contratos) para acesso a dados

O domínio **não terá dependência** de:
- Frameworks (React, Express, etc.)
- Infraestrutura (banco de dados, HTTP, filas)
- Camadas de apresentação

---

## Consequências

### Positivas
- Regras de negócio desacopladas de tecnologia
- Facilidade para testes unitários
- Clareza de responsabilidades
- Possibilidade de reutilização do domínio em múltiplos contextos
- Preparação para migração futura para multi-repo

### Negativas
- Estrutura inicial mais complexa
- Necessidade de maior disciplina na definição de fronteiras

### Mitigações
- Definição clara de contratos (interfaces)
- Imports restritos entre camadas
- Documentação contínua via ADRs

---

## Revisão futura

Esta decisão poderá ser revisitada caso:
- O domínio passe a exigir integração direta com infraestrutura específica
- O escopo do projeto mude significativamente

Qualquer revisão será documentada em um novo ADR.
