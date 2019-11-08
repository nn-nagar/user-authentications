#from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet

from rest_framework.authtoken.views import ObtainAuthToken


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view()),
]