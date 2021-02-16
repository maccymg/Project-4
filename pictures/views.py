from .models import Picture
from .serializers.common import PictureSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

class PictureListView(APIView):

    def get(self, _request):
        pictures = Picture.objects.all()
        serialized_pictures = PictureSerializer(pictures, many=True)
        return Response(serialized_pictures.data, status=status.HTTP_200_OK)


class PictureDetailView(APIView):

    def get(self, _request, pk):
        try:
            picture = Picture.objects.get(pk=pk)
            serialized_pictures = PictureSerializer(picture)
            return Response(serialized_pictures.data, status=status.HTTP_200_OK)
        except Picture.DoesNotExist:
            raise NotFound()