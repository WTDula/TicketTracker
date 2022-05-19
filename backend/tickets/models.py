from tkinter import CASCADE
from django.db import models
from authentication.models import User

# Create your models here.
class Ticket(models.Model):
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=25, default="sumbitted")
    priority = models.IntegerField()
    is_finished = models.BooleanField(default=False)
    description = models.TextField()
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE)
    deadline = models.DateField()