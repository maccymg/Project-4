from django.db import models

class Picture(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.ImageField(upload_to='images/')
    size = models.CharField(max_length=30)
    style = models.CharField(max_length=50)
    status = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.name} - {self.style}"
