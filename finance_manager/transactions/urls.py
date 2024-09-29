from django.urls import path
from .views import TransactionFilterView, TransactionDetailView, TransactionCompareView

urlpatterns = [
    path('transactions', TransactionFilterView.as_view(), name='transaction-filter'),
    path('transactions/<uuid:id>', TransactionDetailView.as_view(), name='transaction-detail'),
    path('transactions/compare', TransactionCompareView.as_view(), name='transaction-compare'),
]
