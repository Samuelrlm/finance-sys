import json

def get_clients():
    path = 'data/clients.json'  # Caminho do arquivo de clientes
    with open(path, 'r') as file:
        return json.load(file)

def get_transactions():
    path = 'data/transactions.json'  # Caminho do arquivo de transações
    with open(path, 'r') as file:
        return json.load(file)