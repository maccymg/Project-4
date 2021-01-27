from rest_framework import serializers
from ..models import PictureType

class PictureTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PictureType
        fields = '__all__'