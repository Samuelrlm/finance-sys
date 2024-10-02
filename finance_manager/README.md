# API Documentation

## Base URL
`http://localhost:8000/api/`

---

## Endpoints

### 1. **Clients**

#### `GET /api/clients`
- **Description**: Retrieve a list of all clients.
- **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "Maria Silva"
      },
      {
        "id": 2,
        "name": "João Santos"
      }
    ]
    ```
- **Status Codes**:
    - 200 OK: Successfully retrieved.

#### `GET /api/clients/<id>/`
- **Description**: Retrieve a specific client by ID.
- **Request Params**:
  - `id` (integer): The unique ID of the client.
- **Response**:
    ```json
    {
      "id": 1,
      "name": "Maria Silva"
    }
    ```
- **Status Codes**:
    - 200 OK: Successfully retrieved.
    - 404 Not Found: Client not found.

---

### 2. **Simple Filters**

#### `GET /api/simple-filters/`
- **Description**: Retrieve all simple filters.
- **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "Filter 1",
        "clients": ["Maria Silva"],
        "start_date": "2023-01-01",
        "end_date": "2023-03-31"
      }
    ]
    ```
- **Status Codes**:
    - 200 OK: Successfully retrieved.

#### `POST /api/simple-filters/`
- **Description**: Create a new simple filter.
- **Request Body**:
    ```json
    {
      "name": "Filter 1",
      "clients": ["Maria Silva"],
      "start_date": "2023-01-01",
      "end_date": "2023-03-31"
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "name": "Filter 1",
      "clients": ["Maria Silva"],
      "start_date": "2023-01-01",
      "end_date": "2023-03-31"
    }
    ```
- **Status Codes**:
    - 201 Created: Successfully created.
    - 400 Bad Request: Validation error.

#### `PUT /api/simple-filters/<id>/`
- **Description**: Update a simple filter.
- **Request Body**:
    ```json
    {
      "name": "Updated Filter",
      "clients": ["João Santos"],
      "start_date": "2023-02-01",
      "end_date": "2023-04-01"
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "name": "Updated Filter",
      "clients": ["João Santos"],
      "start_date": "2023-02-01",
      "end_date": "2023-04-01"
    }
    ```
- **Status Codes**:
    - 200 OK: Successfully updated.
    - 404 Not Found: Filter not found.

#### `DELETE /api/simple-filters/<id>/`
- **Description**: Delete a simple filter.
- **Response**:
    - **Status Codes**:
      - 204 No Content: Successfully deleted.
      - 404 Not Found: Filter not found.

---

### 3. **Comparison Filters**

#### `GET /api/comparison-filters/`
- **Description**: Retrieve all comparison filters.
- **Response**:
    ```json
    [
      {
        "id": 1,
        "filters": {
          "filter-1": {
            "clients": ["Maria Silva", "João Santos"],
            "start_date": "2023-01-01",
            "end_date": "2023-03-31"
          },
          "filter-2": {
            "clients": ["Carlos Oliveira"],
            "start_date": "2023-01-01",
            "end_date": "2023-03-31"
          }
        }
      }
    ]
    ```
- **Status Codes**:
    - 200 OK: Successfully retrieved.

#### `POST /api/comparison-filters/`
- **Description**: Create a new comparison filter.
- **Request Body**:
    ```json
    {
      "filters": {
        "filter-1": {
          "clients": ["Maria Silva", "João Santos"],
          "start_date": "2023-01-01",
          "end_date": "2023-03-31"
        },
        "filter-2": {
          "clients": ["Carlos Oliveira"],
          "start_date": "2023-01-01",
          "end_date": "2023-03-31"
        }
      }
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "filters": {
        "filter-1": {
          "clients": ["Maria Silva", "João Santos"],
          "start_date": "2023-01-01",
          "end_date": "2023-03-31"
        },
        "filter-2": {
          "clients": ["Carlos Oliveira"],
          "start_date": "2023-01-01",
          "end_date": "2023-03-31"
        }
      }
    }
    ```
- **Status Codes**:
    - 201 Created: Successfully created.
    - 400 Bad Request: Validation error.

#### `PUT /api/comparison-filters/<id>/`
- **Description**: Update a comparison filter.
- **Request Body**:
    ```json
    {
      "filters": {
        "filter-1": {
          "clients": ["Updated Client"],
          "start_date": "2023-02-01",
          "end_date": "2023-04-01"
        }
      }
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "filters": {
        "filter-1": {
          "clients": ["Updated Client"],
          "start_date": "2023-02-01",
          "end_date": "2023-04-01"
        }
      }
    }
    ```
- **Status Codes**:
    - 200 OK: Successfully updated.
    - 404 Not Found: Filter not found.

#### `DELETE /api/comparison-filters/<id>/`
- **Description**: Delete a comparison filter.
- **Response**:
    - **Status Codes**:
      - 204 No Content: Successfully deleted.
      - 404 Not Found: Filter not found.

---

## Status Codes Summary

- **200 OK**: The request was successful.
- **201 Created**: A new resource was successfully created.
- **204 No Content**: The resource was successfully deleted.
- **400 Bad Request**: The request could not be processed due to invalid input.
- **404 Not Found**: The requested resource was not found.

---
Aqui está uma documentação em Markdown para os controllers de transações que você forneceu:


## 🔍 4. Filtro de Transações

### Endpoint: `/api/transactions/filter`
**Método**: `POST`

Este endpoint permite filtrar transações por nome de clientes e intervalo de datas.

### Exemplo de Request:
```json
{
  "client_names": ["Maria Silva", "João Santos"],
  "start_date": "2023-01-01",
  "end_date": "2023-03-31"
}
```

### Exemplo de Response:
```json
[
  {
    "id": 1,
    "client_name": "Maria Silva",
    "amount": 5000.0,
    "date": "2023-01-15"
  },
  {
    "id": 2,
    "client_name": "João Santos",
    "amount": 1500.0,
    "date": "2023-03-01"
  }
]
```

### Parâmetros:

- `client_names` (opcional): Lista de nomes de clientes para filtrar as transações.
- `start_date` (opcional): Data de início no formato `YYYY-MM-DD`.
- `end_date` (opcional): Data de término no formato `YYYY-MM-DD`.

### Resposta:
Uma lista de transações que atendem aos critérios de filtro, com os seguintes campos:
- `id`: Identificador da transação.
- `client_name`: Nome do cliente associado à transação.
- `amount`: Valor da transação.
- `date`: Data da transação no formato `YYYY-MM-DD`.

---

## 📝 2. Detalhes de uma Transação

### Endpoint: `/api/transactions/<uuid:id>`
**Método**: `GET`

Este endpoint retorna os detalhes de uma transação específica.

### Exemplo de Request:
```
GET /api/transactions/1
```

### Exemplo de Response:
```json
{
  "id": 1,
  "amount": 5000.0,
  "date": "2023-01-15",
  "client_data": {
    "id": 101,
    "name": "Maria Silva",
    "email": "maria@example.com"
  }
}
```

### Parâmetros:
- `id`: O UUID da transação que você deseja recuperar.

### Resposta:
Um objeto contendo os detalhes da transação:
- `id`: Identificador da transação.
- `amount`: Valor da transação.
- `date`: Data da transação.
- `client_data`: Dados do cliente associado à transação, contendo `id`, `name` e `email`.

---

## ⚖️ 3. Comparação de Transações

### Endpoint: `/api/transactions/compare`
**Método**: `POST`

Este endpoint permite comparar transações utilizando diferentes filtros, como lista de clientes e intervalo de datas.

### Exemplo de Request:
```json
{
  "filters": {
    "filter-1": {
      "clients": ["Maria Silva", "João Santos"],
      "start_date": "2023-01-01",
      "end_date": "2023-03-31"
    },
    "filter-2": {
      "clients": ["Carlos Oliveira"],
      "start_date": "2023-01-01",
      "end_date": "2023-03-31"
    }
  }
}
```

### Exemplo de Response:
```json
{
  "filter-1_results": [
    {
      "id": 1,
      "client_name": "Maria Silva",
      "amount": 5000.0,
      "date": "2023-01-15"
    },
    {
      "id": 2,
      "client_name": "João Santos",
      "amount": 1500.0,
      "date": "2023-03-01"
    }
  ],
  "filter-2_results": [
    {
      "id": 3,
      "client_name": "Carlos Oliveira",
      "amount": 3000.0,
      "date": "2023-02-20"
    }
  ]
}
```

### Parâmetros:

- `filters`: Um objeto contendo diferentes critérios de comparação, cada um com uma lista de `clients`, `start_date` e `end_date`.

### Resposta:
Um objeto contendo listas de transações que atendem aos filtros, organizado por nome de filtro:
- `filter-name_results`: Uma lista de transações que atendem aos critérios definidos para cada filtro.

---

## 🛠️ Funções Helpers

As seguintes funções são usadas em cada um dos controllers:

- `get_clients()`: Retorna a lista de todos os clientes.
- `get_transactions()`: Retorna a lista de todas as transações.

---

## 📋 Estrutura dos Controllers

1. **TransactionController**:
   - Responsável por filtrar transações por nome do cliente e intervalo de datas.
  
2. **TransactionDetailController**:
   - Responsável por retornar os detalhes de uma transação específica.
  
3. **TransactionCompareController**:
   - Responsável por comparar transações utilizando múltiplos filtros e critérios.

---

### 📄 Observações Finais

Esses endpoints foram projetados para fornecer flexibilidade no gerenciamento e visualização de transações, facilitando a criação de relatórios financeiros personalizados com base em clientes e datas.
```

### Principais Seções:

1. **Filtro de Transações**: Detalha o endpoint de filtragem com parâmetros opcionais e exemplos.
2. **Detalhes de uma Transação**: Explica como obter detalhes de uma transação específica.
3. **Comparação de Transações**: Um endpoint para comparar transações com base em diferentes filtros.
4. **Funções Helpers**: Descreve as funções auxiliares que são chamadas dentro dos controllers.
