from datetime import datetime
from .helpers import get_clients

class ClientsController:
    def __init__(self):
        self.clients = get_clients()

    def list_clients(self):
        return self.clients
    

class ClientDetailController:
    def __init__(self):
        self.clients = get_clients()

    def get_client(self, id):
        client_data = next((client for client in self.clients if str(client['id']) == str(id)), None)

        if not client_data:
            return None

        return client_data