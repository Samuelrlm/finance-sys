import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .controllers import ClientsController, ClientDetailController

class ListClientsView(View):
    @csrf_exempt
    def get(self, request):
        controller = ClientsController()
        clients = controller.list_clients()
        return JsonResponse(clients, safe=False)
    
class ClientDetailView(View):
    @csrf_exempt
    def get(self, request, id):
        controller = ClientDetailController()
        client = controller.get_client(id)

        if not client:
            return JsonResponse({"error": "Cliente não encontrado."}, status=404)

        return JsonResponse(client)