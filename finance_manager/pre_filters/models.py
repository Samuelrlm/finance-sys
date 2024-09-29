from django.db import models

class SimpleFilter(models.Model):
    name = models.CharField(max_length=255)
    clients = models.JSONField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

class ComparisonFilter(models.Model):
    name = models.CharField(max_length=255)
    filters = models.JSONField()

    def __str__(self):
        return self.name
