from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pictures/', include('pictures.urls')),
    path('api/enquire/', include('enquire_forms.urls')),
    path('api/types/', include('picture_types.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
