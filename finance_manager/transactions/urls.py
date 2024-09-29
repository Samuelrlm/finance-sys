from django.urls import path
from .views import TransactionFilterView, TransactionDetailView

urlpatterns = [
    path('transactions', TransactionFilterView.as_view(), name='transaction-filter'),
    path('transactions/<uuid:id>', TransactionDetailView.as_view(), name='transaction-detail'),
]
