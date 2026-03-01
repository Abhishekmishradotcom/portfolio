from .models import Project
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .models import ContactMessage



def index(request):
    projects = Project.objects.all()
    print(projects)
    return render(request, 'Myportfolio/index.html', {
        'projects': projects
    })

def home(request):
    projects = Project.objects.all()
    print(projects)
    return render(request, 'Myportfolio/base.html', {
        'projects': projects
    })
    


def contact_view(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        ContactMessage.objects.create(
            name=name,
            email=email,
            message=message
        )

        return redirect('/')

    return redirect('/')