from django.contrib import admin
from .models import ClientInquiry
#register your models here

@admin.register(ClientInquiry)
class ClientInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')
