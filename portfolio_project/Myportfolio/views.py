from .models import Project
from django.shortcuts import render

def index(request):
    projects = Project.objects.all()
    print(projects)
    return render(request, 'Myportfolio/index.html', {
        'projects': projects
    })

def home(request):
    projects = Project.objects.all()
    print(projects)
    return render(request, 'Myportfolio/index.html', {
        'projects': projects
    })