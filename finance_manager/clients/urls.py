from django.urls import path
from .views import ListClientsView, ClientDetailView

urlpatterns = [
    path('clients', ListClientsView.as_view(), name='client-list'),
    path('clients/<int:id>', ClientDetailView.as_view(), name='client-detail'),
]
