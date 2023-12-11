from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('', views.hi, name='home-page'),  # Home page
    path('canada/', views.canada_page, name='canada'),
    path('united-kingdom/', views.united_kingdom_page, name='united_kingdom'),
    path('inquiry/', views.inquiry_form, name='inquiry'),  # For displaying the form
    path('submit-inquiry/', views.submit_inquiry, name='submit_inquiry'),  # For form submission
    path('thank-you/', views.thank_you, name='thank_you'),  # Thank you page after submission
    path('admin/', admin.site.urls),
    # ... any other paths you need ...
]
