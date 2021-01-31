from django.urls import path
from .views import FormSendView

urlpatterns = [
    path('', FormSendView.as_view())
]