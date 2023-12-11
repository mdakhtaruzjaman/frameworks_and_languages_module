from django import forms
from .models import ClientInquiry

class ClientInquiryForm(forms.ModelForm):
    class Meta:
        model = ClientInquiry
        fields = ['name', 'email', 'message']
