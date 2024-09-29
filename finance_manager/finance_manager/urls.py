from django.urls import path, include

urlpatterns = [
    path('api/', include('transactions.urls')),
    path('api/', include('pre_filters.urls')),
    path('api/', include('clients.urls')),
]
