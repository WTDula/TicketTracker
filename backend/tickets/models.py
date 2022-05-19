from tkinter import CASCADE
from django.db import models
from authentication.models import User

# Create your models here.
class Ticket(models.Model):
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=25, default="submitted")
    priority = models.IntegerField()
    is_finished = models.BooleanField(default=False)
    description = models.TextField()
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, default=2)
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned', default=1)
    deadline = models.DateField()