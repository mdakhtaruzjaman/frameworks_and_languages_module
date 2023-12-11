from django.shortcuts import render, redirect
from .forms import ClientInquiryForm
from django.core.mail import send_mail
from django.conf import settings

def hi(request): 
    return render(request, 'visaconnectapp/hi.html')

def canada_page(request):
    return render(request, 'visaconnectapp/Canada.html')

def united_kingdom_page(request):
    return render(request, 'visaconnectapp/United-Kingdom.html')

def inquiry_form(request):
    form = ClientInquiryForm()
    return render(request, 'visaconnectapp/inquiry_form.html', {'form': form})

def submit_inquiry(request):
    if request.method == 'POST':
        form = ClientInquiryForm(request.POST)
        if form.is_valid():
            inquiry = form.save()

            # Email subject and body including client's information
            subject = f'New Client Inquiry from {inquiry.name}'
            message = f'You have received a new inquiry from {inquiry.name} (Email: {inquiry.email}).\n\nMessage:\n{inquiry.message}'

            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,  # Sender's email
                ['visaconnect.int@gmail.com'],  # Your email where you want to receive the inquiries
                fail_silently=False,
            )
            return redirect('thank_you')  # Redirect to the thank you page
    else:
        form = ClientInquiryForm()

    return render(request, 'visaconnectapp/inquiry_form.html', {'form': form})

def thank_you(request):
    return render(request, 'visaconnectapp/thank_you.html')

