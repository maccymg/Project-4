from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .serializers.populated import PopulatedPictureTypeSerializer
from .models import PictureType

class PictureTypeListView(APIView):

    def get(self, _request):
        picture_types = PictureType.objects.all()
        serialized_pictures_types = PopulatedPictureTypeSerializer(picture_types, many=True)
        return Response(serialized_pictures_types.data, status=status.HTTP_200_OK)

class PictureTypeDetailView(APIView):

    def get(self, _request, pk):
        try:
            picture_type = PictureType.objects.get(pk=pk)
            serialized_picture_types = PopulatedPictureTypeSerializer(picture_type)
            return Response(serialized_picture_types.data, status=status.HTTP_200_OK)
        except PictureType.DoesNotExist:
            raise NotFound()


