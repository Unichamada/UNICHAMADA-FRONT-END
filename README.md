# UNICHAMADA-BACK-END

O Git Flow é um modelo de ramificação para o Git que facilita o gerenciamento de versões em projetos de desenvolvimento de software. Ele foi popularizado por Vincent Driessen em 2010 e se tornou uma abordagem amplamente adotada para organizar e gerenciar o trabalho em equipes de desenvolvimento.

## Estrutura do Git Flow

### Branches Principais

- **`main` (ou `master`)**: A branch principal que contém o código de produção. Sempre deve estar em um estado estável.
- **`develop`**: A branch principal de desenvolvimento, onde o código é integrado e preparado para ser lançado.

### Branches de Suporte

- **`feature/*`**: Usadas para desenvolver novas funcionalidades. Cada nova funcionalidade é desenvolvida em uma branch separada, derivada de `develop`.
- **`release/*`**: Usadas para preparar uma nova versão de produção. Uma vez que todas as funcionalidades para uma nova versão estão completas, uma branch de release é criada a partir de `develop`.
- **`hotfix/*`**: Usadas para corrigir rapidamente bugs em produção. Essas branches são criadas a partir de `main` e, uma vez corrigido o problema, o código é integrado tanto em `main` quanto em `develop`.
- **`support/*`**: Embora menos comum, essas branches podem ser usadas para manutenção de versões antigas.

## Fluxo de Trabalho

1. **Desenvolvimento de Funcionalidades**:
   - Crie uma nova branch `feature` a partir de `develop`.
   - Desenvolva a funcionalidade na branch `feature`.
   - Quando a funcionalidade estiver pronta, faça o merge da branch `feature` de volta para `develop`.

2. **Preparação para Lançamento**:
   - Quando estiver pronto para lançar uma nova versão, crie uma branch `release` a partir de `develop`.
   - Realize os ajustes finais na branch `release`.
   - Quando tudo estiver pronto, faça o merge da branch `release` em `main` e em `develop`.

3. **Correção de Bugs em Produção**:
   - Se um bug for encontrado em produção, crie uma branch `hotfix` a partir de `main`.
   - Corrija o bug na branch `hotfix`.
   - Faça o merge da branch `hotfix` em `main` e `develop`.


### 4. Fluxo Básico de Trabalho com Git Flow
Aqui estão os comandos básicos para usar o Git Flow:
- **Criar uma nova feature**:
  ```bash
  git flow feature start nome-da-feature
  ```
  Isso cria uma nova branch a partir de `develop`.
- **Finalizar uma feature**:
  ```bash
  git flow feature finish nome-da-feature
  ```
  Isso faz o merge da feature na branch `develop` e a deleta.
- **Criar uma release**:
  ```bash
  git flow release start numero-da-versao
  ```
  Isso cria uma branch de release a partir de `develop`.
- **Finalizar uma release**:
  ```bash
  git flow release finish numero-da-versao
  ```
  Isso faz o merge da release em `main` e `develop`, e cria uma tag para a versão.
- **Criar um hotfix**:
  ```bash
  git flow hotfix start nome-do-hotfix
  ```
  Isso cria uma branch de hotfix a partir de `main`.
- **Finalizar um hotfix**:
  ```bash
  git flow hotfix finish nome-do-hotfix
  ```
  Isso faz o merge do hotfix em `main` e `develop`.

  Claro! Aqui está uma versão mais simplificada da documentação para o seu repositório:

---

# Guia de Commits

## Estrutura dos Commits

Os commits devem seguir este formato:

```
<tipo>[escopo opcional]: <descrição>

[coração opcional]

[rodapé(s) opcional(is)]
```

### Tipos Comuns

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Atualização de documentação
- **style**: Alterações no estilo (espaçamento, formatação, etc.)
- **refactor**: Alteração no código sem modificar funcionalidades
- **perf**: Melhoria de desempenho
- **test**: Testes
- **build**: Mudanças no sistema de build
- **ci**: Configurações de integração contínua
- **chore**: Outras mudanças

### Exemplos

1. **Adicionar nova funcionalidade**

   ```
   feat(auth): adicionar login com Google
   ```

2. **Corrigir um bug**

   ```
   fix(api): corrigir erro ao buscar dados
   ```

3. **Atualizar documentação**

   ```
   docs: atualizar guia de instalação
   ```

4. **Melhorar desempenho**

   ```
   perf: otimizar tempo de resposta
   ```

## Dicas

- Use uma frase curta e clara.
- Comece com letra minúscula.
- Não use ponto final na descrição.

---


