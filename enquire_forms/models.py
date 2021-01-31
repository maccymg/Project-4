from django.db import models

class Form(models.Model):

    full_name = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    enquiring_about = models.CharField(max_length=50)
    message = models.TextField(max_length=500)

    def __str__(self):
        return f"{self.full_name} - {self.enquiring_about}"

