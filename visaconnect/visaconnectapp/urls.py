from django.urls import path
from . import views
urlpatterns = [
    path('', views.hi, name = 'home-page'),
]

#(the below code is to get access to facebook page and it's posts)
#from django.urls import path
#from . import views

#urlpatterns = [
    # Add other URL patterns
   # path('get-page-posts/', views.get_page_posts, name='get_page_posts'),
#]
