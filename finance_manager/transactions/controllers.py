from datetime import datetime
from .helpers import get_clients, get_transactions

class TransactionController:
    def __init__(self):
        self.clients = get_clients()
        self.transactions = get_transactions()

    def filter_transactions(self, client_names=None, start_date=None, end_date=None):
        client_ids = []
        if client_names:
            client_ids = [client['id'] for client in self.clients if client['name'] in client_names]

        filtered_transactions = []
        
        for transaction in self.transactions:
            transaction_date = datetime.fromisoformat(transaction['date'][:-1])
            date_filter_passed = True

            if start_date and transaction_date < datetime.fromisoformat(start_date):
                date_filter_passed = False
            if end_date and transaction_date > datetime.fromisoformat(end_date):
                date_filter_passed = False

            if date_filter_passed:
                if not client_names or transaction['client_id'] in client_ids:
                    client_name = next(
                        (client['name'] for client in self.clients if client['id'] == transaction['client_id']), 
                        None
                    )

                    data = {
                        'id': transaction['id'],
                        'client_name': client_name,
                        'amount': transaction['amount'],
                        'date': transaction['date'],
                    }
                    filtered_transactions.append(data)

        return filtered_transactions

class TransactionDetailController:
    def __init__(self):
        self.transactions = get_transactions()
        self.clients = get_clients()

    def get_transaction(self, id):
        transaction_data = next((transaction for transaction in self.transactions if str(transaction['id']) == str(id)), None)

        if not transaction_data:
            return None

        client_data = next((client for client in self.clients if client['id'] == transaction_data['client_id']), None)

        return {
            'id': transaction_data['id'],
            'amount': transaction_data['amount'],
            'date': transaction_data['date'],
            'client_data': client_data
        }
