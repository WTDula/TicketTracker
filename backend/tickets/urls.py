from django.urls import path
from tickets import views

urlpatterns = [
    path('', views.ticket_list),
    path('<int:pk>/', views.ticket_details),
]