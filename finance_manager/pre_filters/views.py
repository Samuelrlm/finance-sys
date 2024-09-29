from rest_framework import viewsets
from .models import SimpleFilter, ComparisonFilter
from .serializers import SimpleFilterSerializer, ComparisonFilterSerializer

class SimpleFilterViewSet(viewsets.ModelViewSet):
    queryset = SimpleFilter.objects.all()
    serializer_class = SimpleFilterSerializer

class ComparisonFilterViewSet(viewsets.ModelViewSet):
    queryset = ComparisonFilter.objects.all()
    serializer_class = ComparisonFilterSerializer
