from .models import Form
from .serializers.common import FormSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class FormSendView(APIView):

    def post(self, request):
        form_to_create = FormSerializer(data=request.data)
        if form_to_create.is_valid():
            form_to_create.save()
            return Response(form_to_create.data, status=status.HTTP_201_CREATED)
        return Response(form_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

