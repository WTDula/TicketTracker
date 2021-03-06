from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Ticket
from .serializers import TicketSerializer
from authentication.models import User
# Create your views here.


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def ticket_list(request):
    if request.method == "GET":
        tickets = Ticket.objects.all()
        serializer = TicketSerializer(tickets, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(posted_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE", "PATCH"])
@permission_classes([IsAuthenticated])
def ticket_details(request, pk):
    ticket = get_object_or_404(Ticket, id = pk)
    if request.method == "GET":
        serializer = TicketSerializer(ticket)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = TicketSerializer(ticket, data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == "DELETE":
        ticket_return = get_object_or_404(Ticket, pk = pk)
        serializer = TicketSerializer(ticket_return)
        ticket.delete()
        return Response(serializer.data, status = status.HTTP_204_NO_CONTENT)
    elif request.method == "PATCH":
        new_engineer = User.objects.get(pk = request.data['assigned_to'])
        ticket.assigned_to = new_engineer
        serializer = TicketSerializer(ticket, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
