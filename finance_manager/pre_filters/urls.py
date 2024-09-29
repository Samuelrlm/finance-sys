from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SimpleFilterViewSet, ComparisonFilterViewSet

router = DefaultRouter()
router.register(r'simple-filters', SimpleFilterViewSet)
router.register(r'comparison-filters', ComparisonFilterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
