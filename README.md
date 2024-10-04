
```markdown
# 💰 Finance Manager Application

### 🔍 Visão Geral

- **Frontend**: Desenvolvido com **React** e **TypeScript**, oferece uma interface amigável e responsiva para o gerenciamento de transações.
  
- **Backend**: Construído em **Django**, fornece uma API RESTful robusta para gerenciar filtros predefinidos, transações e clientes, com persistência de dados no **PostgreSQL**.

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- ⚛️ **React**
- 📝 **TypeScript**
- 🎨 **Styled-Components**
- 🔗 **Axios** (para requisições HTTP)
  
### Backend:
- 🐍 **Django**
- 🗄️ **PostgreSQL**
- 🐳 **Docker** (para containerização)

---

## 🚀 Executando o Projeto

### 📋 Requisitos:

- Docker e Docker Compose instalados

### Como Rodar:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/usuario/finance-manager.git
   cd finance-manager
   ```

2. **Suba os containers (backend + banco de dados)**:
   ```bash
   docker-compose up -d --build
   docker exec -it finance-sys-backend-1 bash
   python manage.py migrate
   python manage.py makemigrations
   ```
2.1 **Ou suba as aplicações separadamente**
  ```bash
  Front: npm run dev
  Back: python manage.py runserver
  Back: python manage.py migrate
  Back: python manage.py makemigrations
  ```

3. **Acesse o frontend**:
   - 🌐 O frontend estará disponível em: `http://localhost:5173`

4. **Acesse o backend**:
   - 🛠️ A API estará disponível em: `http://localhost:8000`

---

## 📚 Documentação da API

A API do **Finance Manager** oferece endpoints para a gestão de clientes, transações e filtros predefinidos. Você pode explorar a documentação completa clicando no botão abaixo:

### ⚙️ Backend: API Finance Manager

[![API Documentation](https://img.shields.io/badge/📄-API_Documentation-blue?style=for-the-badge)](./finance_manager/README.md)

---

## 📂 Estrutura de Pastas

```bash
📦 finance-sys
├── 📂 finance_manager (back-end)
│   ├── 📁 finance_manager
│   ├── 📁 pre_filters
│   ├── 📁 clients
│   ├── 📁 transactions
│   └── ...
├── 📂 frontend
│   ├── 📁 src
│   ├── 📁 components
│   ├── 📁 styles
│   └── ...
└── 📄 README.md
```

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Made with ❤️ by Samuel Ribeiro
