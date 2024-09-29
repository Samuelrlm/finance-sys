from rest_framework import serializers
from .models import SimpleFilter, ComparisonFilter

class SimpleFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleFilter
        fields = '__all__'

class ComparisonFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComparisonFilter
        fields = '__all__'
