# views.py
import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .controllers import TransactionController, TransactionDetailController, TransactionCompareController

class TransactionFilterView(View):
    @csrf_exempt
    def post(self, request):
        controller = TransactionController()

        try:
            body = json.loads(request.body)
        except json.JSONDecodeError:
            body = {}

        client_names = body.get('clients', [])
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')

        filtered_transactions = controller.filter_transactions(client_names, start_date, end_date)

        return JsonResponse(filtered_transactions, safe=False)
    
class TransactionDetailView(View):
    @csrf_exempt
    def get(self, request, id):
        controller = TransactionDetailController()
        transaction = controller.get_transaction(id)

        if not transaction:
            return JsonResponse({"error": "Transação não encontrada."}, status=404)

        return JsonResponse(transaction)
    
class TransactionCompareView(View):
    @csrf_exempt
    def get(self, request):
        controller = TransactionCompareController()

        try:
            body = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Erro ao ler o corpo da requisição."}, status=400)

        filters = body.get('filters', [])

        if not filters:
            return JsonResponse({"error": "Nenhum filtro informado."}, status=400)

        filtered_transactions = controller.compare_transactions(filters)

        return JsonResponse(filtered_transactions, safe=False)
