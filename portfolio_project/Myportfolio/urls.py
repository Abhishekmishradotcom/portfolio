from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('project/<int:id>/', views.project_detail)
]