---

# API Documentation

## Base URL
`http://localhost:8000/api/`

---

## Endpoints

### 1. **Clients**

#### `GET /api/clients/`
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
