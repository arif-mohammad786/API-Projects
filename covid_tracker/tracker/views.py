from django.shortcuts import render

# Create your views here.
def covid_tracker(request):
    return render(request,'tracker/Home.html')