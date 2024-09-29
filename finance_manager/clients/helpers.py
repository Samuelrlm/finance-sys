import json

def get_clients():
    path = 'data/clients.json'
    with open(path, 'r') as file:
        return json.load(file)