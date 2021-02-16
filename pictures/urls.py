from django.urls import path
from .views import PictureListView, PictureDetailView

urlpatterns = [
    path("", PictureListView.as_view()),
    path("<int:pk>/", PictureDetailView.as_view()),
]