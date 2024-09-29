import json
from django.http import JsonResponse
from .helpers import get_clients

class ValidateClientsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

        self.clients = get_clients()
        self.valid_client_names = [client['name'] for client in self.clients]

    def __call__(self, request):
        if request.path == '/api/transactions/' and request.method == 'GET':
            try:
                body = json.loads(request.body)
                client_names = body.get('clients', [])
                start_date = request.GET.get('start_date')
                end_date = request.GET.get('end_date')
                
                for client_name in client_names:
                    if client_name not in self.valid_client_names:
                        return JsonResponse(
                            {"error": f"Cliente '{client_name}' não encontrado na lista de clientes."},
                            status=400
                        )
                
                if start_date and not end_date or end_date and not start_date:
                    return JsonResponse(
                        {"error": "start_date e end_date devem ser informados juntos."},
                        status=400
                    )
                
            except json.JSONDecodeError:
                return JsonResponse({"error": "Erro ao ler o corpo da requisição."}, status=400)

        response = self.get_response(request)
        return response
