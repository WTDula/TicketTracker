from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'name', 'status', 'priority', 'is_finished', 'description', 'deadline', 'posted_by', 'assigned_to']
        depth = 1