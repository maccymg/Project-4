from django.urls import path
from .views import PictureTypeListView, PictureTypeDetailView
urlpatterns = [
    path("", PictureTypeListView.as_view()),
    path("<int:pk>/", PictureTypeDetailView.as_view()),
]