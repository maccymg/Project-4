from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pictures/', include('pictures.urls')),
    path('api/enquire/', include('enquire_forms.urls')),
    path('api/types/', include('picture_types.urls')),
    re_path(r'^.*$', index)
] 
# re_path(r'^(?!\/media\/images\/*).*', index)
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
